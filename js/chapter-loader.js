/**
 * chapter-loader.js
 * Carga dinÃ¡mica de contenido usando inyecciÃ³n de scripts (Compatible con file://)
 */

const ChapterLoader = {
    currentCampaign: '',
    currentChapter: '',
    rootPath: '', // Ruta raÃ­z para cargar datos (ej: '../')
    cache: {}, // Almacena los textos cargados

    init: function (campaign, chapter, rootPath = '') {
        this.currentCampaign = campaign;
        this.currentChapter = chapter;
        this.rootPath = rootPath;
    },

    // --- LÃ³gica del Tracker MN ---
    trackerMNs: [],

    initTracker: function (mnList) {
        // Ordenar numÃ©ricamente (MN4 antes que MN12, y MN23b correctamente)
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
        if (confirm("Â¿Restaurar estado de Momentos Narrativos?")) {
            const key = `skullTales_visited_${this.currentCampaign}_${this.currentChapter}`;
            localStorage.removeItem(key);
            this.updateTrackerUI();
        }
    },

    unvisitMN: function (index, id, event) {
        if (event) event.stopPropagation();
        if (!confirm(`Â¿Olvidar que has visitado ${id}?`)) return;

        const key = `skullTales_visited_${this.currentCampaign}_${this.currentChapter}`;
        let visited = JSON.parse(localStorage.getItem(key) || '[]');

        // Eliminar por Ã­ndice para borrar solo la instancia especÃ­fica
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

        // Mapear visited con sus Ã­ndices originales para poder borrar duplicados correctamente
        const mappedVisited = visited.map((id, index) => ({ id, originalIndex: index }));

        // Filtrar solo los MNs que pertenecen al capÃ­tulo actual
        const displayedMNs = mappedVisited.filter(item => this.trackerMNs.includes(item.id));

        const mnsPerRow = 9;
        let html = '<table class="tracker-table">';

        if (displayedMNs.length === 0) {
            // Fila vacÃ­a inicial de 9 celdas
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
                                    <div class="delete-mn-btn" onclick="ChapterLoader.unvisitMN(${originalIdx}, '${mnId}', event)">â</div>
                                 </td>`;
                    } else {
                        html += '<td class="tracker-cell empty"></td>';
                    }
                }
                html += '</tr>';
            }
        }

        // Fila extra para el botÃ³n de Reset
        html += '<tr><td colspan="' + mnsPerRow + '" class="tracker-cell reset-cell" onclick="ChapterLoader.resetTracker()" style="width: 100%; margin-top: 10px;">â» Reiniciar Camino</td></tr>';

        html += '</table>';
        container.innerHTML = html;
    },

    updateTrackerUI: function () {
        this.renderTracker(); // Re-renderizar es barato para una tabla pequeÃ±a
    },

    // FunciÃ³n helper para botones en TravesÃ­a/Tablas que llaman a MNs
    mostrarMN: function (id) {
        // Asegurar que es tratado como un MN
        this.loadContent('mn', id);
    },

    // --- Fin LÃ³gica Tracker ---

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
                // El fichero de la tabla principal estÃ¡ en la raÃ­z del capÃ­tulo
                path = `${this.rootPath}data/${this.currentCampaign}/${this.currentChapter}/${id}.js`;
            } else {
                // Los MN individuales estÃ¡n en la subcarpeta mn/
                path = `${this.rootPath}data/${this.currentCampaign}/${this.currentChapter}/mn/${id}.js`;
            }
        } else {
            path = `${this.rootPath}data/${this.currentCampaign}/${this.currentChapter}/${type}.js`;
        }

        const script = document.createElement('script');
        script.src = path;
        script.onerror = () => {
            const contenedor = document.getElementById("texto");
            contenedor.innerHTML = `<p style="color:red">Error: No se pudo cargar el archivo ${path}. AsegÃºrate de que existe.</p>`;
        };
        document.body.appendChild(script);
        // El script ejecutarÃ¡ RegisterContent, que llamarÃ¡ a DisplayContent

        // Mostrar feedback de carga SOLO si es contenido principal (Intro o MN especÃ­fico)
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

        // LÃ³gica de UI para CapÃ­tulos Refactorizados:
        // 1. Asegurar que el contenedor de texto es visible
        if (contenedor.style.display === 'none') contenedor.style.display = 'block';

        // 2. Cerrar cualquier tabla auxiliar o de MN que estÃ© abierta
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
                    // Para las demÃ¡s, usamos toggleTabla para restaurar el contenedor de aventura
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
            // Normalizar y parsear (Misma lÃ³gica que antes)
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

            // Marcar botÃ³n activo
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

// FunciÃ³n global wrapper
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
    if (nombre === 'exito') label = 'Ãxitos';

    const mostrar = !div.classList.contains('visible');

    // Si vamos a mostrar una tabla, cerramos todas las demÃ¡s primero
    if (mostrar) {
        const tablasIds = ['tablaTravesia', 'tablaPreparacion', 'tablaExito', 'tablaObjetivos', 'tablaEnemigos', 'tablaTrampas', 'tablaTrastornos'];

        // 1. Cerrar otras tablas auxiliares
        tablasIds.forEach(otroId => {
            if (otroId !== id) {
                const otraDiv = document.getElementById(otroId);
                if (otraDiv && otraDiv.classList.contains('visible')) {
                    toggleTabla(otroId); // RecursiÃ³n segura porque ahora 'mostrar' serÃ¡ false para esa tabla
                }
            }
        });

        // 2. Cerrar Momentos Narrativos si estÃ¡ abierto
        const tablaMN = document.getElementById('tablaMN');
        if (tablaMN && tablaMN.classList.contains('visible')) {
            tablaMN.classList.remove('visible');
            tablaMN.innerHTML = '';
            const btnMN = document.getElementById('botonMN');
            if (btnMN) btnMN.textContent = "Mostrar Momentos Narrativos";
            // Nota: No es necesario restaurar intro/texto aquÃ­ porque si estamos abriendo una tabla auxiliar,
            // el contenedor de aventura se ocultarÃ¡ de todos modos en el bloque de abajo.

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
        // Cargar contenido si no estÃ¡
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
        // AÃ±adido abc/ (cartas travesÃ­a) y audio/ (sonidos)
        content = content.replace(/src=(["'])(img\/|variosimg\/|losetas\/|abc\/|audio\/)/g, `src=$1${pathPrefix}$2`);

        // CorrecciÃ³n para los onclick="mostrarPopupImagen('...')"
        content = content.replace(/mostrarPopupImagen\(['"](img\/|variosimg\/|losetas\/|abc\/)/g, `mostrarPopupImagen('${pathPrefix}$1`);

        // CorrecciÃ³n para estilos inline con url(...) preservando comillas (o ausencia)
        content = content.replace(/url\((['"]?)(img\/|variosimg\/|losetas\/|abc\/)/g, `url($1${pathPrefix}$2`);

        // CorrecciÃ³n para atributo background="..." antiguo en tablas
        content = content.replace(/background=(["'])(img\/|variosimg\/|losetas\/|abc\/)/g, `background=$1${pathPrefix}$2`);

        // CorrecciÃ³n para enlaces directos a recursos (href="img/...")
        content = content.replace(/href=(["'])(img\/|variosimg\/|losetas\/|abc\/|audio\/)/g, `href=$1${pathPrefix}$2`);
    }

    this.cache[id] = content;

    // Si es una tabla conocida, actualizar su div especifico
    // Si es una tabla conocida, actualizar su div especifico
    if (['objetivos', 'enemigos', 'trampas', 'travesia', 'preparacion', 'mn', 'exito', 'trastornos'].includes(id)) {
        let targetId = 'tabla' + id.charAt(0).toUpperCase() + id.slice(1);
        if (id === 'mn') targetId = 'tablaMN'; // ExcepciÃ³n para casing correcto
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

// LÃ³gica para el Selector de Objetivos
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
        // Modo Aventura: Mostrar contenido principal, cerrar todo lo demás
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

        // Cerrar MN internos si están abiertos
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

        // Toggle MN vs Introducción
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


/* ============================================================
   NUEVAS FUNCIONALIDADES v2.1
   - Modo Oscuro (por defecto oscuro, persistente)
   - Búsqueda rápida de MN
   - Dado virtual (d6 piratas)
   - Breadcrumb de navegación
   - Atajos de teclado
   ============================================================ */

// ── Modo Oscuro ──────────────────────────────────────────────
const ModoOscuro = {
  KEY: 'skullTales_modoOscuro',

  init: function () {
    const saved = localStorage.getItem(this.KEY);
    // Por defecto: oscuro (sin clase). Claro solo si guardado '0'
    if (saved === '0') {
      document.body.classList.add('modo-claro');
      document.body.classList.remove('modo-oscuro');
    } else {
      document.body.classList.add('modo-oscuro');
      document.body.classList.remove('modo-claro');
    }
    this.inyectarBoton();
  },

  toggle: function () {
    const esClaro = document.body.classList.toggle('modo-claro');
    document.body.classList.toggle('modo-oscuro', !esClaro);
    localStorage.setItem(this.KEY, esClaro ? '0' : '1');
    this.actualizarBoton(esClaro);
  },

  inyectarBoton: function () {
    if (document.getElementById('btn-modo-oscuro')) return;
    const btn = document.createElement('button');
    btn.id = 'btn-modo-oscuro';
    btn.title = 'Alternar día / noche  [Atajo: D]';
    btn.onclick = () => ModoOscuro.toggle();
    this.actualizarBoton(document.body.classList.contains('modo-claro'), btn);
    document.body.appendChild(btn);
  },

  actualizarBoton: function (esClaro, btn) {
    const el = btn || document.getElementById('btn-modo-oscuro');
    if (el) el.textContent = esClaro ? '🌙' : '☀️';
  }
};

// ── Búsqueda de MN ───────────────────────────────────────────
const BuscadorMN = {
  init: function () {
    if (document.getElementById('mn-buscar-panel')) return;
    const panel = document.createElement('div');
    panel.id = 'mn-buscar-panel';
    panel.title = 'Ir a un MN por número  [Atajo: /]';
    panel.innerHTML = `
      <span style="font-size:0.82rem;opacity:0.6;">MN</span>
      <input id="mn-buscar-input" type="text" placeholder="Nº"
             inputmode="numeric" maxlength="6"
             onkeydown="BuscadorMN.onKeyDown(event)" />
      <button id="mn-buscar-btn" title="Buscar" onclick="BuscadorMN.buscar()">🔍</button>
    `;
    document.body.appendChild(panel);
  },

  onKeyDown: function (e) { if (e.key === 'Enter') this.buscar(); },

  buscar: function () {
    const input = document.getElementById('mn-buscar-input');
    if (!input) return;
    let valor = input.value.trim().replace(/^MN/i, '');
    const num = parseInt(valor, 10);
    if (isNaN(num) || num < 1) { this.feedback('⚠ Número inválido', true); return; }
    const id = 'MN' + num;
    cargarTexto(id);
    this.feedback('↩ ' + id, false);
    input.value = '';
    setTimeout(() => {
      const c = document.getElementById('texto');
      if (c) c.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 350);
  },

  feedback: function (msg, error) {
    const panel = document.getElementById('mn-buscar-panel');
    if (!panel) return;
    const prev = document.getElementById('mn-feedback');
    if (prev) prev.remove();
    const span = document.createElement('span');
    span.id = 'mn-feedback';
    span.textContent = msg;
    span.style.cssText = `font-size:0.75rem;font-family:Georgia,serif;color:${error?'#d04030':'#50a850'};white-space:nowrap;`;
    panel.appendChild(span);
    setTimeout(() => span.remove(), 2200);
  },

  focus: function () {
    const input = document.getElementById('mn-buscar-input');
    if (input) { input.focus(); input.select(); }
  }
};

// ── Dado Virtual ─────────────────────────────────────────────
const DadoVirtual = {
  CARAS: ['⚀','⚁','⚂','⚃','⚄','⚅'],

  init: function () {
    if (document.getElementById('dado-panel')) return;
    const panel = document.createElement('div');
    panel.id = 'dado-panel';
    panel.title = 'Lanzar dado  [Atajo: Espacio]';
    panel.innerHTML = `
      <div id="dado-cara" onclick="DadoVirtual.lanzar()" title="Clic o Espacio para lanzar">⚄</div>
      <div id="dado-resultado"></div>
    `;
    document.body.appendChild(panel);
    this.inyectarEstilos();
  },

  lanzar: function () {
    const cara = document.getElementById('dado-cara');
    const res  = document.getElementById('dado-resultado');
    if (!cara) return;

    // Animación de shake
    cara.style.animation = 'none';
    void cara.offsetWidth;
    cara.style.animation = 'dadoRoll 0.45s ease-out';

    let ticks = 0;
    const intervalo = setInterval(() => {
      const r = Math.floor(Math.random() * 6);
      cara.textContent = this.CARAS[r];
      ticks++;
      if (ticks >= 8) {
        clearInterval(intervalo);
        const final = Math.floor(Math.random() * 6);
        cara.textContent = this.CARAS[final];
        if (res) res.textContent = (final + 1);
      }
    }, 55);
  },

  inyectarEstilos: function () {
    if (document.getElementById('dado-styles')) return;
    const style = document.createElement('style');
    style.id = 'dado-styles';
    style.textContent = `
      #dado-panel {
        position: fixed;
        bottom: 70px;
        left: 20px;
        z-index: 50;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2px;
        background: linear-gradient(to bottom, #2a1e0c, #1a1208);
        border: 2px solid var(--oro, #c9a84c);
        border-radius: 12px;
        padding: 6px 10px 4px;
        box-shadow: 0 4px 14px rgba(0,0,0,0.55);
        cursor: pointer;
        transition: transform 0.12s;
      }
      body.modo-claro #dado-panel {
        background: linear-gradient(to bottom, #f2e5c0, #deca98);
      }
      #dado-panel:hover { transform: scale(1.06); }
      #dado-cara {
        font-size: 2rem;
        line-height: 1;
        user-select: none;
        filter: drop-shadow(0 1px 3px rgba(0,0,0,0.5));
      }
      #dado-resultado {
        font-family: 'Pirata One', cursive;
        font-size: 0.85rem;
        color: var(--oro, #c9a84c);
        min-height: 1em;
        text-align: center;
      }
      @keyframes dadoRoll {
        0%   { transform: rotate(0deg) scale(1); }
        25%  { transform: rotate(-20deg) scale(1.2); }
        50%  { transform: rotate(18deg) scale(0.9); }
        75%  { transform: rotate(-12deg) scale(1.15); }
        100% { transform: rotate(0deg) scale(1); }
      }
    `;
    document.head.appendChild(style);
  }
};

// ── Breadcrumb ───────────────────────────────────────────────
const Breadcrumb = {
  init: function () {
    if (document.getElementById('breadcrumb')) return;

    // Detectar campaña y capítulo desde ChapterLoader
    const camp = ChapterLoader.currentCampaign;
    const cap  = ChapterLoader.currentChapter;
    if (!camp) return;

    // Mapas de nombres amigables
    const CAMPS = {
      'sombras-del-caribe':       '🌊 Sombras del Caribe',
      'el-caldero-del-diablo':    '🔥 El Caldero del Diablo',
      'la-ira-de-tlanchana':      '🌀 La Ira de Tlanchana',
      'la-maldicion-de-vane':     '💀 La Maldición de Vane',
      'el-contador-de-historias': '📖 El Contador de Historias',
    };
    const campNombre = CAMPS[camp] || camp;
    const capNombre  = cap ? cap.replace('cap', 'Cap.').replace('an', 'Anexo ').toUpperCase() : '';

    const bc = document.createElement('nav');
    bc.id = 'breadcrumb';
    bc.innerHTML = `
      <a href="../index.htm">☠ Inicio</a>
      <span class="bc-sep">›</span>
      <span class="bc-camp">${campNombre}</span>
      ${capNombre ? `<span class="bc-sep">›</span><span class="bc-cap">${capNombre}</span>` : ''}
    `;
    // Insertar antes del primer hijo del container
    const container = document.querySelector('.container');
    if (container) container.insertBefore(bc, container.firstChild);

    this.inyectarEstilos();
  },

  inyectarEstilos: function () {
    if (document.getElementById('bc-styles')) return;
    const style = document.createElement('style');
    style.id = 'bc-styles';
    style.textContent = `
      #breadcrumb {
        font-size: 0.82rem;
        padding: 6px 2px 10px;
        opacity: 0.7;
        font-family: Georgia, serif;
        display: flex;
        align-items: center;
        gap: 5px;
        flex-wrap: wrap;
      }
      #breadcrumb a { color: var(--oro, #c9a84c); text-decoration: none; font-weight: normal; }
      #breadcrumb a:hover { text-decoration: underline; }
      .bc-sep { opacity: 0.4; }
      .bc-camp, .bc-cap { color: inherit; opacity: 0.9; }
      .bc-cap { font-style: italic; }
    `;
    document.head.appendChild(style);
  }
};

// ── Atajos de Teclado ────────────────────────────────────────
const Atajos = {
  init: function () {
    document.addEventListener('keydown', function (e) {
      // No activar si el foco está en un input o textarea
      const tag = document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      switch (e.key) {
        case 'd':
        case 'D':
          // Dado
          DadoVirtual.lanzar();
          break;

        case '/':
          // Foco en buscador MN
          e.preventDefault();
          BuscadorMN.focus();
          break;

        case ' ':
          // Espacio también lanza el dado (si no hay scroll activo)
          if (!e.target.closest('button')) {
            e.preventDefault();
            DadoVirtual.lanzar();
          }
          break;

        case 'ArrowRight':
        case 'ArrowLeft': {
          // Navegar entre secciones del capítulo
          const secciones = ['intro', 'travesia', 'preparacion', 'mn', 'exito'];
          const botones = secciones.map(s => document.getElementById('boton' + s.charAt(0).toUpperCase() + s.slice(1))).filter(Boolean);
          if (botones.length === 0) break;
          const activo = botones.findIndex(b => b.classList.contains('activo'));
          const siguiente = e.key === 'ArrowRight'
            ? (activo + 1) % botones.length
            : (activo - 1 + botones.length) % botones.length;
          botones[siguiente].click();
          break;
        }

        case 'Escape':
          // Cerrar popup de imagen si está abierto
          if (typeof cerrarPopupImagen === 'function') cerrarPopupImagen();
          break;
      }
    });
  }
};

// ── Inicialización automática ─────────────────────────────────
(function arrancar() {
  function setup() {
    ModoOscuro.init();
    BuscadorMN.init();
    DadoVirtual.init();
    Atajos.init();
    // Breadcrumb necesita que ChapterLoader ya tenga campaña/capítulo
    // Se llama con pequeño delay para dejar que window.onload lo inicialice
    setTimeout(() => Breadcrumb.init(), 100);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
