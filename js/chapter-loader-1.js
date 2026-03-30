/**
 * chapter-loader.js
 * Carga dinámica de contenido usando inyección de scripts (Compatible con file://)
 */

const ChapterLoader = {
    currentCampaign: '',
    currentChapter: '',
    rootPath: '', // Ruta raíz para cargar datos (ej: '../')
    cache: {}, // Almacena los textos cargados

    init: function (campaign, chapter, rootPath = '') {
        this.currentCampaign = campaign;
        this.currentChapter = chapter;
        this.rootPath = rootPath;
    },

    // --- Lógica del Tracker MN ---
    trackerMNs: [],

    initTracker: function (mnList) {
        // Ordenar numéricamente (MN4 antes que MN12, y MN23b correctamente)
        mnList.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
        this.trackerMNs = mnList;
        this.renderTracker();
    },

    markMNVisited: function (id) {
        if (!id.toLowerCase().startsWith('mn')) return;

        const key = `skullTales_visited_${this.currentCampaign}_${this.currentChapter}`;
        let visited = JSON.parse(localStorage.getItem(key) || '[]');

        // Normalizar ID (ej. MN65 -> mn65) o mantener como viene, asegurando unicidad case-insensitive
        const upperId = id.toUpperCase();
        // Permitir duplicados para mostrar el camino recorrido
        visited.push(upperId);
        localStorage.setItem(key, JSON.stringify(visited));
        this.updateTrackerUI();
    },

    isMNVisited: function (id) {
        const key = `skullTales_visited_${this.currentCampaign}_${this.currentChapter}`;
        let visited = JSON.parse(localStorage.getItem(key) || '[]');
        return visited.includes(id.toUpperCase());
    },

    resetTracker: function () {
        if (confirm("¿Restaurar estado de Momentos Narrativos?")) {
            const key = `skullTales_visited_${this.currentCampaign}_${this.currentChapter}`;
            localStorage.removeItem(key);
            this.updateTrackerUI();
        }
    },

    unvisitMN: function (index, id, event) {
        if (event) event.stopPropagation();
        if (!confirm(`¿Olvidar que has visitado ${id}?`)) return;

        const key = `skullTales_visited_${this.currentCampaign}_${this.currentChapter}`;
        let visited = JSON.parse(localStorage.getItem(key) || '[]');

        // Eliminar por índice para borrar solo la instancia específica
        if (index >= 0 && index < visited.length) {
            visited.splice(index, 1);
        }

        localStorage.setItem(key, JSON.stringify(visited));
        this.updateTrackerUI();
    },

    renderTracker: function () {
        const container = document.getElementById('mn-tracker-container');
        if (!container) return;

        const key = `skullTales_visited_${this.currentCampaign}_${this.currentChapter}`;
        const visited = JSON.parse(localStorage.getItem(key) || '[]');

        // Mapear visited con sus índices originales para poder borrar duplicados correctamente
        const mappedVisited = visited.map((id, index) => ({ id, originalIndex: index }));

        // Filtrar solo los MNs que pertenecen al capítulo actual
        const displayedMNs = mappedVisited.filter(item => this.trackerMNs.includes(item.id));

        const mnsPerRow = 9;
        let html = '<table class="tracker-table">';

        if (displayedMNs.length === 0) {
            // Fila vacía inicial de 9 celdas
            html += '<tr>';
            for (let i = 0; i < mnsPerRow; i++) {
                html += '<td class="tracker-cell empty"></td>';
            }
            html += '</tr>';
        } else {
            // Generar filas de 9 columnas
            for (let i = 0; i < displayedMNs.length; i += mnsPerRow) {
                html += '<tr>';
                for (let j = 0; j < mnsPerRow; j++) {
                    const index = i + j;
                    if (index < displayedMNs.length) {
                        const item = displayedMNs[index];
                        const mnId = item.id;
                        const originalIdx = item.originalIndex;

                        const isLast = (index === displayedMNs.length - 1);
                        const clase = isLast ? 'tracker-cell last-visited' : 'tracker-cell visited';

                        html += `<td class="${clase}" onclick="cargarTexto('${mnId}')">
                                    ${mnId.replace(/^MN/i, '')}
                                    <div class="delete-mn-btn" onclick="ChapterLoader.unvisitMN(${originalIdx}, '${mnId}', event)">❌</div>
                                 </td>`;
                    } else {
                        html += '<td class="tracker-cell empty"></td>';
                    }
                }
                html += '</tr>';
            }
        }

        // Fila extra para el botón de Reset
        html += '<tr><td colspan="' + mnsPerRow + '" class="tracker-cell reset-cell" onclick="ChapterLoader.resetTracker()" style="width: 100%; margin-top: 10px;">♻ Reiniciar Camino</td></tr>';

        html += '</table>';
        container.innerHTML = html;
    },

    updateTrackerUI: function () {
        this.renderTracker(); // Re-renderizar es barato para una tabla pequeña
    },

    // Función helper para botones en Travesía/Tablas que llaman a MNs
    mostrarMN: function (id) {
        // Asegurar que es tratado como un MN
        this.loadContent('mn', id);
    },

    // --- Fin Lógica Tracker ---

    loadContent: function (type, id) {
        // Normalizamos
        id = id.toLowerCase();

        // Si ya lo tenemos, mostrarlo directo
        if (this.cache[id]) {
            this.registerContent(id, this.cache[id]);
            return;
        }

        // Si no, inyectar script
        let path = '';
        if (type === 'mn') {
            if (id === 'mn') {
                // El fichero de la tabla principal está en la raíz del capítulo
                path = `${this.rootPath}data/${this.currentCampaign}/${this.currentChapter}/${id}.js`;
            } else {
                // Los MN individuales están en la subcarpeta mn/
                path = `${this.rootPath}data/${this.currentCampaign}/${this.currentChapter}/mn/${id}.js`;
            }
        } else {
            path = `${this.rootPath}data/${this.currentCampaign}/${this.currentChapter}/${type}.js`;
        }

        const script = document.createElement('script');
        script.src = path;
        script.onerror = () => {
            const contenedor = document.getElementById("texto");
            contenedor.innerHTML = `<p style="color:red">Error: No se pudo cargar el archivo ${path}. Asegúrate de que existe.</p>`;
        };
        document.body.appendChild(script);
        // El script ejecutará RegisterContent, que llamará a DisplayContent

        // Mostrar feedback de carga SOLO si es contenido principal (Intro o MN específico)
        // Si es una tabla auxiliar, no tocamos el #texto principal
        if (!['objetivos', 'enemigos', 'trampas', 'travesia', 'preparacion', 'mn', 'exito', 'trastornos'].includes(id)) {
            const contenedor = document.getElementById("texto");
            if (contenedor) {
                contenedor.style.opacity = 0.5;
                contenedor.innerHTML = "<p><em>Cargando...</em></p>";
            }
        }
    },

    displayContent: function (id) {
        const textoBruto = this.cache[id];
        const contenedor = document.getElementById("texto");

        if (!textoBruto) return;

        // Marcar como visitado si es MN
        this.markMNVisited(id);

        // Lógica de UI para Capítulos Refactorizados:
        // 1. Asegurar que el contenedor de texto es visible
        if (contenedor.style.display === 'none') contenedor.style.display = 'block';

        // 2. Cerrar cualquier tabla auxiliar o de MN que esté abierta
        const tablesToClose = ['MN', 'Travesia', 'Preparacion', 'Enemigos', 'Objetivos', 'Trampas', 'Trastornos', 'Exito'];
        tablesToClose.forEach(t => {
            const tableId = 'tabla' + t;
            const tableDiv = document.getElementById(tableId);
            if (tableDiv && tableDiv.classList.contains('visible')) {
                if (t === 'MN') {
                    // Para la tabla MN, la cerramos directamente
                    tableDiv.classList.remove('visible');
                    tableDiv.innerHTML = '';
                    const btn = document.getElementById('botonMN');
                    if (btn) btn.textContent = "Mostrar Momentos Narrativos";
                } else {
                    // Para las demás, usamos toggleTabla para restaurar el contenedor de aventura
                    toggleTabla(tableId);
                }
            }
        });

        // 3. Gestionar cabecera "Historia"
        const introDiv = document.getElementById('introducciones');
        if (introDiv) {
            // Si es un MN, ocultar "Historia". Si es intro, mostrarlo.
            if (id.toLowerCase().startsWith('mn')) {
                introDiv.style.display = 'none';
            } else if (id.toLowerCase() === 'intro') {
                introDiv.style.display = 'block';
            }
        }

        if (!textoBruto) return;

        contenedor.style.opacity = 0;

        setTimeout(() => {
            // Normalizar y parsear (Misma lógica que antes)
            const limpio = textoBruto.replace(/\r\n/g, "\n").trim();
            const bloques = limpio.split(/\n--+\n/g);
            const empiezaConInstruccion = limpio.startsWith("--") || limpio.match(/^\s*--+/);
            let html = "";

            bloques.forEach((bloque, i) => {
                const tipoBloque = (i + (empiezaConInstruccion ? 1 : 0)) % 2 === 0 ? "narrativa" : "instrucciones";
                if (tipoBloque === "narrativa") {
                    html += bloque.replace(/\*([^*]+)\*/g, (_, contenido) => {
                        return `<p class="narrativa"><em>${contenido.trim()}</em></p>`;
                    });
                } else {
                    html += `<div class="instrucciones">${bloque.trim()}</div>`;
                }
            });

            contenedor.innerHTML = html;

            // Marcar botón activo
            document.querySelectorAll("button").forEach(btn => btn.classList.remove("activo"));
            const botones = document.querySelectorAll("button");
            botones.forEach(btn => {
                const onclick = btn.getAttribute("onclick");
                if (onclick && onclick.toLowerCase().includes(`'${id}'`)) {
                    btn.classList.add("activo");
                }
            });

            contenedor.style.opacity = 1;
        }, 100);
    }
};

// Función global wrapper
function cargarTexto(nombre) {
    let tipo = '';
    let id = nombre.toLowerCase();

    if (nombre.startsWith('MN')) {
        tipo = 'mn';
    } else if (['intro', 'exito', 'enemigos', 'objetivos'].includes(id)) {
        tipo = id;
    } else {
        tipo = id;
    }

    ChapterLoader.loadContent(tipo, id);
}

function toggleTabla(id) {
    const div = document.getElementById(id);
    let nombre = id.toLowerCase().replace('tabla', '');
    const btn = document.getElementById("boton" + id.replace('tabla', ''));

    if (!div) return;

    // Ajuste de nombres para mostrar bonitos
    let label = nombre.charAt(0).toUpperCase() + nombre.slice(1);
    if (nombre === 'exito') label = 'Éxitos';

    const mostrar = !div.classList.contains('visible');

    // Si vamos a mostrar una tabla, cerramos todas las demás primero
    if (mostrar) {
        const tablasIds = ['tablaTravesia', 'tablaPreparacion', 'tablaExito', 'tablaObjetivos', 'tablaEnemigos', 'tablaTrampas', 'tablaTrastornos'];

        // 1. Cerrar otras tablas auxiliares
        tablasIds.forEach(otroId => {
            if (otroId !== id) {
                const otraDiv = document.getElementById(otroId);
                if (otraDiv && otraDiv.classList.contains('visible')) {
                    toggleTabla(otroId); // Recursión segura porque ahora 'mostrar' será false para esa tabla
                }
            }
        });

        // 2. Cerrar Momentos Narrativos si está abierto
        const tablaMN = document.getElementById('tablaMN');
        if (tablaMN && tablaMN.classList.contains('visible')) {
            tablaMN.classList.remove('visible');
            tablaMN.innerHTML = '';
            const btnMN = document.getElementById('botonMN');
            if (btnMN) btnMN.textContent = "Mostrar Momentos Narrativos";
            // Nota: No es necesario restaurar intro/texto aquí porque si estamos abriendo una tabla auxiliar,
            // el contenedor de aventura se ocultará de todos modos en el bloque de abajo.

            // Si estamos en la vista de aventura, restauramos la intro por si acaso cerramos la tabla
            const introDiv = document.getElementById('introducciones');
            const textoDiv = document.getElementById('texto');
            if (introDiv) introDiv.style.display = 'block';
            if (textoDiv) textoDiv.style.display = 'block';
        }
    }

    div.classList.toggle('visible');

    // Ocultar contenedor de aventura para todas las tablas auxiliares
    const contenedorAventura = document.getElementById('contenedor-aventura');
    if (contenedorAventura && ['travesia', 'preparacion', 'enemigos', 'objetivos', 'trampas', 'trastornos'].includes(nombre)) {
        if (mostrar) {
            contenedorAventura.style.display = 'none';
        } else {
            contenedorAventura.style.display = 'block';
        }
    }

    if (mostrar) {
        // Cargar contenido si no está
        if (!ChapterLoader.cache[nombre]) {
            ChapterLoader.loadContent(nombre, nombre);
        } else {
            div.innerHTML = ChapterLoader.cache[nombre];
        }
        if (btn) btn.textContent = "Ocultar " + label;
    } else {
        div.innerHTML = '';
        if (btn) btn.textContent = "Mostrar " + label;
    }
}

// Override de registerContent para manejar tablas que no van al main div
const originalRegister = ChapterLoader.registerContent;
ChapterLoader.registerContent = function (id, content) {
    // Si tenemos un rootPath definido (ej: '../'), necesitamos ajustar las rutas de imagen relativas
    if (this.rootPath && typeof content === 'string') {
        const pathPrefix = this.rootPath;
        // Reemplazar: src="img/..., src='img/... preservando comillas. 
        // Añadido abc/ (cartas travesía) y audio/ (sonidos)
        content = content.replace(/src=(["'])(img\/|variosimg\/|losetas\/|abc\/|audio\/)/g, `src=$1${pathPrefix}$2`);

        // Corrección para los onclick="mostrarPopupImagen('...')"
        content = content.replace(/mostrarPopupImagen\(['"](img\/|variosimg\/|losetas\/|abc\/)/g, `mostrarPopupImagen('${pathPrefix}$1`);

        // Corrección para estilos inline con url(...) preservando comillas (o ausencia)
        content = content.replace(/url\((['"]?)(img\/|variosimg\/|losetas\/|abc\/)/g, `url($1${pathPrefix}$2`);

        // Corrección para atributo background="..." antiguo en tablas
        content = content.replace(/background=(["'])(img\/|variosimg\/|losetas\/|abc\/)/g, `background=$1${pathPrefix}$2`);

        // Corrección para enlaces directos a recursos (href="img/...")
        content = content.replace(/href=(["'])(img\/|variosimg\/|losetas\/|abc\/|audio\/)/g, `href=$1${pathPrefix}$2`);
    }

    this.cache[id] = content;

    // Si es una tabla conocida, actualizar su div especifico
    // Si es una tabla conocida, actualizar su div especifico
    if (['objetivos', 'enemigos', 'trampas', 'travesia', 'preparacion', 'mn', 'exito', 'trastornos'].includes(id)) {
        let targetId = 'tabla' + id.charAt(0).toUpperCase() + id.slice(1);
        if (id === 'mn') targetId = 'tablaMN'; // Excepción para casing correcto
        if (id === 'exito') targetId = 'tablaExito'; // Explicit naming for safety

        const div = document.getElementById(targetId);
        if (div && div.classList.contains('visible')) {
            div.innerHTML = content;
        }
    } else {
        // Si no es tabla ni prep, es contenido principal (intro o MN)
        this.displayContent(id);
    }
};

function mostrarPopupImagen(ruta) {
    const popup = document.getElementById('popupImagen');
    const img = document.getElementById('popupImagenContenido');
    img.src = ruta;
    popup.classList.add('visible');
}

function cerrarPopupImagen() {
    const popup = document.getElementById('popupImagen');
    popup.classList.remove('visible');
    document.getElementById('popupImagenContenido').src = '';
}

// Lógica para el Selector de Objetivos
window.mostrarRecompensaObjetivo = function (select) {
    const resultadoDiv = document.getElementById('resultadoObjetivo');
    const selectedOption = select.options[select.selectedIndex];
    const recompensa = selectedOption.getAttribute('data-recompensa');

    if (recompensa) {
        resultadoDiv.innerHTML = `<div class="recompensa-box"><strong>Recompensa:</strong><br>${recompensa}</div>`;
        resultadoDiv.style.display = 'block';
        resultadoDiv.style.opacity = 0;
        setTimeout(() => resultadoDiv.style.opacity = 1, 50);
    } else {
        resultadoDiv.style.display = 'none';
        resultadoDiv.innerHTML = '';
    }
};

window.mostrarSeccion = function(seccion) {
    const contenedorAventura = document.getElementById('contenedor-aventura');
    const introDiv = document.getElementById('introducciones');
    const textoDiv = document.getElementById('texto');
    const tablaMN = document.getElementById('tablaMN');
    const botonMN = document.getElementById('botonMN');

    // Lista de todas las tablas auxiliares que ocultan la aventura
    const todasLasTablas = ['tablaTravesia', 'tablaPreparacion', 'tablaExito', 'tablaObjetivos', 'tablaEnemigos', 'tablaTrampas', 'tablaTrastornos'];

    if (seccion === 'aventura') {
        // Modo Aventura: Mostrar contenido principal, cerrar todo lo dem�s
        if (contenedorAventura) contenedorAventura.style.display = 'block';
        if (introDiv) introDiv.style.display = 'block';
        if (textoDiv) textoDiv.style.display = 'block';

        // Cerrar cualquier tabla auxiliar abierta
        todasLasTablas.forEach(id => {
            const div = document.getElementById(id);
            if (div && div.classList.contains('visible')) {
                toggleTabla(id);
            }
        });

        // Cerrar MN internos si est�n abiertos
        if (tablaMN && tablaMN.classList.contains('visible')) {
            tablaMN.classList.remove('visible');
            tablaMN.innerHTML = '';
            if (botonMN) botonMN.textContent = 'Mostrar Momentos Narrativos';
        }

    } else if (seccion === 'mn') {
        // Modo MN: Requiere contenedor aventura visible pero con contenido cambiado
        if (contenedorAventura && contenedorAventura.style.display === 'none') {
            contenedorAventura.style.display = 'block';
        }

        // Cerrar tablas auxiliares (IMPORTANTE: Esto cierra Exitos, Travesia, etc.)
        todasLasTablas.forEach(id => {
            const div = document.getElementById(id);
            if (div && div.classList.contains('visible')) {
                toggleTabla(id);
            }
        });

        // Toggle MN vs Introducci�n
        if (tablaMN) {
            const isVisible = tablaMN.classList.contains('visible');
            if (!isVisible) {
                // Mostrar MN
                if (!ChapterLoader.cache['mn']) {
                    ChapterLoader.loadContent('mn', 'mn');
                } else {
                    tablaMN.innerHTML = ChapterLoader.cache['mn'];
                }
                tablaMN.classList.add('visible');
                if (botonMN) botonMN.textContent = 'Ocultar Momentos Narrativos';
                if (introDiv) introDiv.style.display = 'none';
                if (textoDiv) textoDiv.style.display = 'none';
            } else {
                // Ocultar MN
                tablaMN.classList.remove('visible');
                tablaMN.innerHTML = '';
                if (botonMN) botonMN.textContent = 'Mostrar Momentos Narrativos';
                if (introDiv) introDiv.style.display = 'block';
                if (textoDiv) textoDiv.style.display = 'block';
                // Opcional: recargar intro si se prefiere
                cargarTexto('intro');
            }
        }

    } else {
        // Secciones que son tablas (Exito, Travesia, etc.)
        // Mapear nombre seccion a ID de tabla
        let tablaId = 'tabla' + seccion.charAt(0).toUpperCase() + seccion.slice(1);
        if (seccion === 'exito') tablaId = 'tablaExito'; // Asegurar casing
        
        // toggleTabla ya se encarga de cerrar otras tablas
        toggleTabla(tablaId);
    }
};

