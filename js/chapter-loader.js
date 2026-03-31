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
   FUNCIONALIDADES v2.1
   - Modo Oscuro (por defecto oscuro, persistente)
   - Búsqueda rápida de MN
   - Dado virtual (1-3 dados)
   - Breadcrumb de navegación
   - Atajos de teclado
   ============================================================ */

// ── Modo Oscuro ──────────────────────────────────────────────
const ModoOscuro = {
  KEY: 'skullTales_modoOscuro',

  init: function () {
    const saved = localStorage.getItem(this.KEY);
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
    btn.title = 'Alternar día / noche  [D]';
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
    panel.title = 'Ir a un MN por número  [/]';
    panel.innerHTML =
      '<span style="font-size:0.82rem;opacity:0.6;">MN</span>' +
      '<input id="mn-buscar-input" type="text" placeholder="Nº"' +
      '       inputmode="numeric" maxlength="6"' +
      '       onkeydown="BuscadorMN.onKeyDown(event)" />' +
      '<button id="mn-buscar-btn" title="Buscar" onclick="BuscadorMN.buscar()">🔍</button>';
    document.body.appendChild(panel);
  },

  onKeyDown: function (e) { if (e.key === 'Enter') this.buscar(); },

  buscar: function () {
    const input = document.getElementById('mn-buscar-input');
    if (!input) return;
    const valor = input.value.trim().replace(/^MN/i, '');
    const num = parseInt(valor, 10);
    if (isNaN(num) || num < 1) { this.feedback('⚠ Número inválido', true); return; }
    cargarTexto('MN' + num);
    this.feedback('↩ MN' + num, false);
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
    span.style.cssText = 'font-size:0.75rem;font-family:Georgia,serif;color:' +
      (error ? '#d04030' : '#50a850') + ';white-space:nowrap;';
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
  numDados: 1,
  rodando: false,

  // Genera el SVG de un dado con puntos (valor 1-6)
  _uid: 0,

  svgDado: function(valor, size) {
    size = size || 64;
    const uid = 'dg' + (++this._uid);
    const puntos = {
      1: [[32,32]],
      2: [[18,18],[46,46]],
      3: [[18,18],[32,32],[46,46]],
      4: [[18,18],[46,18],[18,46],[46,46]],
      5: [[18,18],[46,18],[32,32],[18,46],[46,46]],
      6: [[18,16],[46,16],[18,32],[46,32],[18,48],[46,48]]
    };
    const dots = (puntos[valor] || puntos[1])
      .map(([x,y]) => `<circle cx="${x}" cy="${y}" r="5.5" fill="#1a0c04"/>`)
      .join('');
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
      <defs>
        <linearGradient id="${uid}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#f0d88a"/>
          <stop offset="100%" style="stop-color:#c9940a"/>
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="10" ry="10"
            fill="url(#${uid})" stroke="#7a5010" stroke-width="2.5"/>
      <rect x="4" y="4" width="56" height="20" rx="10" ry="10"
            fill="rgba(255,255,255,0.12)"/>
      ${dots}
    </svg>`;
  },

  init: function () {
    if (document.getElementById('dado-panel')) return;
    const panel = document.createElement('div');
    panel.id = 'dado-panel';
    panel.innerHTML =
      '<div id="dado-titulo">⚄ Dados</div>' +
      '<div id="dado-selector">' +
        '<button class="dado-num activo" onclick="DadoVirtual.setDados(1,this)">1d6</button>' +
        '<button class="dado-num" onclick="DadoVirtual.setDados(2,this)">2d6</button>' +
        '<button class="dado-num" onclick="DadoVirtual.setDados(3,this)">3d6</button>' +
      '</div>' +
      '<div id="dado-caras" onclick="DadoVirtual.lanzar()" title="Clic o [D] para lanzar">' +
        this.svgDado(5, 64) +
      '</div>' +
      '<div id="dado-lanzar-hint">— clic o [D] —</div>' +
      '<div id="dado-resultado"></div>';
    document.body.appendChild(panel);
    this.inyectarEstilos();
  },

  setDados: function (n, btn) {
    this.numDados = n;
    document.querySelectorAll('.dado-num').forEach(b => b.classList.remove('activo'));
    if (btn) btn.classList.add('activo');
    const carasDiv = document.getElementById('dado-caras');
    if (carasDiv) {
      carasDiv.innerHTML = Array.from({length: n}, () => this.svgDado(5, n === 1 ? 72 : n === 2 ? 60 : 50)).join('');
    }
    document.getElementById('dado-resultado').textContent = '';
    document.getElementById('dado-resultado').className = '';
  },

  lanzar: function () {
    if (this.rodando) return;
    this.rodando = true;
    const carasDiv = document.getElementById('dado-caras');
    const resDiv   = document.getElementById('dado-resultado');
    const n        = this.numDados;
    if (!carasDiv) { this.rodando = false; return; }

    const size = n === 1 ? 72 : n === 2 ? 60 : 50;
    let ticks = 0;
    const intervalo = setInterval(() => {
      // Mostrar valores aleatorios mientras rueda
      carasDiv.innerHTML = Array.from({length: n}, () =>
        this.svgDado(Math.floor(Math.random() * 6) + 1, size)).join('');
      ticks++;
      if (ticks >= 10) {
        clearInterval(intervalo);
        // Resultado final
        const valores = Array.from({length: n}, () => Math.floor(Math.random() * 6) + 1);
        carasDiv.innerHTML = valores.map(v => this.svgDado(v, size)).join('');
        if (resDiv) {
          resDiv.textContent = valores.join('   ');
          resDiv.className = 'dado-res-anim';
        }
        this.rodando = false;
      }
    }, 60);
  },

  inyectarEstilos: function () {
    if (document.getElementById('dado-styles')) return;
    const style = document.createElement('style');
    style.id = 'dado-styles';
    style.textContent = `
      #dado-panel {
        position: fixed;
        bottom: 80px;
        left: 16px;
        z-index: 50;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6px;
        background: linear-gradient(160deg, #2e2010 0%, #1a1008 100%);
        border: 2px solid #c9a84c;
        border-radius: 16px;
        padding: 12px 14px 10px;
        box-shadow: 0 6px 24px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,215,80,0.1);
        user-select: none;
        min-width: 110px;
        transition: box-shadow 0.2s;
      }
      body.modo-claro #dado-panel {
        background: linear-gradient(160deg, #eddcac 0%, #d4c080 100%);
        border-color: #9a7820;
        box-shadow: 0 6px 18px rgba(0,0,0,0.3);
      }
      #dado-panel:hover {
        box-shadow: 0 8px 30px rgba(200,160,40,0.25), 0 4px 16px rgba(0,0,0,0.7);
      }
      #dado-titulo {
        font-family: 'Pirata One', cursive;
        font-size: 1rem;
        color: #c9a84c;
        letter-spacing: 0.06em;
        margin-bottom: 2px;
      }
      body.modo-claro #dado-titulo { color: #5c3a08; }
      #dado-selector {
        display: flex;
        gap: 5px;
      }
      .dado-num {
        background: rgba(0,0,0,0.35);
        border: 1.5px solid rgba(200,160,60,0.35);
        border-radius: 6px;
        color: #a08830;
        font-size: 0.78rem;
        padding: 3px 7px;
        cursor: pointer;
        font-style: normal;
        margin: 0;
        box-shadow: none;
        font-family: Georgia, serif;
        transition: background 0.15s, color 0.15s;
      }
      body.modo-claro .dado-num {
        background: rgba(255,255,255,0.45);
        color: #6b3d1e;
        border-color: rgba(100,70,10,0.4);
      }
      .dado-num:hover { background: rgba(180,130,30,0.3); color: #f0d070; }
      body.modo-claro .dado-num:hover { background: rgba(200,160,40,0.35); color: #2e1a00; }
      .dado-num.activo {
        background: linear-gradient(to bottom, #b09030, #806810);
        color: #fff8d0;
        border-color: #d4b040;
        box-shadow: 0 1px 6px rgba(200,160,40,0.4);
      }
      body.modo-claro .dado-num.activo {
        background: linear-gradient(to bottom, #c9a030, #987010);
        color: #fff8d0;
      }
      #dado-caras {
        display: flex;
        gap: 6px;
        align-items: center;
        cursor: pointer;
        padding: 6px 4px;
        border-radius: 10px;
        transition: transform 0.12s;
      }
      #dado-caras:hover { transform: scale(1.05); }
      #dado-caras:active { transform: scale(0.96); }
      #dado-caras svg {
        filter: drop-shadow(0 3px 5px rgba(0,0,0,0.55));
        transition: filter 0.15s;
      }
      #dado-caras:hover svg {
        filter: drop-shadow(0 4px 8px rgba(200,160,40,0.5));
      }
      #dado-lanzar-hint {
        font-size: 0.68rem;
        color: #7a6030;
        font-style: italic;
        font-family: Georgia, serif;
        margin-top: -4px;
      }
      body.modo-claro #dado-lanzar-hint { color: #9a7830; }
      #dado-resultado {
        font-family: 'Pirata One', cursive;
        font-size: 1.3rem;
        color: #f0d060;
        min-height: 1.4em;
        text-align: center;
        letter-spacing: 0.04em;
        text-shadow: 0 1px 4px rgba(0,0,0,0.6);
      }
      body.modo-claro #dado-resultado { color: #5c3a08; text-shadow: none; }
      .dado-res-anim {
        animation: dadoResAparecer 0.35s ease-out;
      }
      @keyframes dadoResAparecer {
        from { opacity: 0; transform: scale(0.7); }
        to   { opacity: 1; transform: scale(1); }
      }
      @keyframes dadoRoll {
        0%   { transform: rotate(0deg)   scale(1);    }
        20%  { transform: rotate(-25deg) scale(1.3);  }
        45%  { transform: rotate(20deg)  scale(0.8);  }
        70%  { transform: rotate(-15deg) scale(1.2);  }
        100% { transform: rotate(0deg)   scale(1);    }
      }

      /* ---- Responsive: móvil ---- */
      @media (max-width: 520px) {
        /* Dado: se mueve arriba a la derecha, más compacto */
        #dado-panel {
          bottom: auto;
          top: 58px;
          left: auto;
          right: 12px;
          min-width: 90px;
          padding: 8px 10px 7px;
          gap: 4px;
          flex-direction: row;
          align-items: center;
          flex-wrap: wrap;
          justify-content: center;
        }
        #dado-titulo { font-size: 0.85rem; width: 100%; text-align: center; margin-bottom: 0; }
        #dado-selector { gap: 3px; }
        .dado-num { font-size: 0.72rem; padding: 3px 6px; }
        .dado-cara { width: 44px !important; height: 44px !important; }
        #dado-resultado { font-size: 1.1rem; width: 100%; }
        #dado-lanzar-hint { display: none; }

        /* Buscador MN: ancho completo abajo */
        #mn-buscar-panel {
          top: auto;
          bottom: 60px;
          right: 12px;
          left: auto;
          padding: 7px 12px;
        }
        #mn-buscar-input { width: 70px; font-size: 1rem; }
        #mn-buscar-btn   { font-size: 1.1rem; }

        /* Botón modo oscuro: arriba izquierda, más grande */
        #btn-modo-oscuro {
          top: 10px;
          left: 10px;
          font-size: 1.2rem;
          padding: 6px 10px;
        }

        /* Breadcrumb: texto más pequeño */
        #breadcrumb { font-size: 0.75rem; padding: 4px 2px 8px; }
      }
    `;
    document.head.appendChild(style);
  }
};

// ── Breadcrumb ───────────────────────────────────────────────
const Breadcrumb = {
  CAMPS: {
    'sombras-del-caribe':       '🌊 Sombras del Caribe',
    'el-caldero-del-diablo':    '🔥 El Caldero del Diablo',
    'la-ira-de-tlanchana':      '🌀 La Ira de Tlanchana',
    'la-maldicion-de-vane':     '💀 La Maldición de Vane',
    'el-contador-de-historias': '📖 El Contador de Historias',
  },

  init: function () {
    if (document.getElementById('breadcrumb')) return;
    const camp = ChapterLoader.currentCampaign;
    const cap  = ChapterLoader.currentChapter;
    if (!camp) return;

    const campNombre = this.CAMPS[camp] || camp;
    const capNombre  = cap
      ? cap.replace(/^cap(\d+)$/, 'Cap. $1')
           .replace(/^an(\d+)$/,  'Anexo $1')
           .toUpperCase()
      : '';

    const bc = document.createElement('nav');
    bc.id = 'breadcrumb';
    bc.innerHTML =
      '<a href="../index.htm">☠ Inicio</a>' +
      '<span class="bc-sep"> › </span>' +
      '<span class="bc-camp">' + campNombre + '</span>' +
      (capNombre ? '<span class="bc-sep"> › </span><span class="bc-cap">' + capNombre + '</span>' : '');

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
        padding: 6px 2px 12px;
        opacity: 0.65;
        font-family: Georgia, serif;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
      }
      #breadcrumb a { color: var(--oro, #c9a84c); text-decoration: none; font-weight: normal; }
      #breadcrumb a:hover { text-decoration: underline; }
      .bc-sep { opacity: 0.4; }
      .bc-cap { font-style: italic; }
    `;
    document.head.appendChild(style);
  }
};

// ── Atajos de Teclado ────────────────────────────────────────
const Atajos = {
  init: function () {
    document.addEventListener('keydown', function (e) {
      const tag = document.activeElement.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      switch (e.key) {
        case 'd': case 'D':
          DadoVirtual.lanzar(); break;

        case '/':
          e.preventDefault();
          BuscadorMN.focus(); break;

        case ' ':
          if (!e.target.closest('button')) {
            e.preventDefault();
            DadoVirtual.lanzar();
          }
          break;

        case 'ArrowRight': case 'ArrowLeft': {
          const ids = ['botonTravesia','botonPreparacion','botonMN','botonExito'];
          const btns = ids.map(id => document.getElementById(id)).filter(Boolean);
          if (!btns.length) break;
          const act = btns.findIndex(b => b.classList.contains('activo'));
          const next = e.key === 'ArrowRight'
            ? (act + 1) % btns.length
            : (act - 1 + btns.length) % btns.length;
          btns[next].click(); break;
        }

        case 'Escape':
          if (typeof cerrarPopupImagen === 'function') cerrarPopupImagen(); break;
      }
    });
  }
};

// ── Inicialización ───────────────────────────────────────────
(function arrancar() {
  function setup() {
    ModoOscuro.init();
    BuscadorMN.init();
    DadoVirtual.init();
    Atajos.init();
    setTimeout(() => Breadcrumb.init(), 120);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setup);
  } else {
    setup();
  }
})();
