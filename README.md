# ☠ Skull Tales · A Toda Vela — Companion App

> Aplicación web de acompañamiento para el juego de mesa **Skull Tales: A Toda Vela**, diseñada para usarse en pantalla durante la partida como sustituto de la lectura del libro de aventuras.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-222222?style=flat&logo=github&logoColor=white)

---

## 🗺 Tabla de Contenidos

- [¿Qué es esto?](#-qué-es-esto)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Campañas incluidas](#-campañas-incluidas)
- [Funcionalidades](#-funcionalidades)
- [Cómo usar durante la partida](#-cómo-usar-durante-la-partida)
- [Tecnología](#-tecnología)

---

## ¿Qué es esto?

Esta aplicación sustituye el libro de aventuras físico durante las partidas de Skull Tales. Permite leer los **Momentos Narrativos** (MNs) al instante sin buscar entre páginas, ver las **losetas del mapa** con sus eventos asociados, llevar el seguimiento del progreso de la historia y gestionar las fichas de los personajes.

Está pensada para funcionar en **PC** sin conexión a internet (todo el contenido es local) y es compatible con GitHub Pages para acceder desde el navegador.

---

## 📁 Estructura del proyecto

```
skulltales/
│
├── index.html                  # Página principal — listado de campañas
├── perfil.html                 # Cuaderno de Bitácora (fichas de personaje)
├── descargas.html              # Recursos descargables
├── videos.html                 # Videos de referencia
│
├── capitulos/                  # Un HTML por capítulo de cada campaña
│   ├── sombras-del-caribe-cap1.html
│   ├── sombras-del-caribe-cap2.html
│   ├── ...
│   ├── caldero-cap1.html
│   ├── la-ira-de-tlanchana-cap1.html
│   └── ...
│
├── data/                       # Contenido narrativo por campaña y capítulo
│   ├── sombras-del-caribe/
│   │   ├── cap1/
│   │   │   ├── intro.js        # Texto de inicio del capítulo
│   │   │   ├── mn.js           # Tabla de Momentos Narrativos
│   │   │   ├── mn/             # Texto de cada MN individual (mn30.js, etc.)
│   │   │   ├── travesia.js     # Tabla de Travesía
│   │   │   ├── preparacion.js  # Tabla de Preparación de Aventura
│   │   │   ├── objetivos.js    # Tabla de Objetivos
│   │   │   ├── enemigos.js     # Tabla de Aparición de Enemigos
│   │   │   └── exito.js        # Tabla de Éxitos
│   │   └── cap2/ ...
│   ├── el-caldero-del-diablo/
│   ├── la-ira-de-tlanchana/
│   ├── la-maldicion-de-vane/
│   └── el-contador-de-historias/
│
├── js/
│   ├── chapter-loader.js       # Motor principal de carga de contenido
│   └── chapter-loader-1.js    # Versión alternativa del loader
│
├── css/
│   ├── estilos.css             # Estilos de la página principal
│   └── estilos-1.css           # Estilos de los capítulos
│
├── losetas/                    # Imágenes de las losetas del mapa por campaña
├── img/                        # Imágenes de enemigos e iconos
├── audio/                      # Música de ambientación
└── variosimg/                  # Iconos de atributos y marcadores
```

---

## ⚔ Campañas incluidas

| # | Campaña | Capítulos |
|---|---------|-----------|
| I | **Sombras del Caribe** *(Core)* | 10 capítulos + 2 Anexos |
| II | **El Caldero del Diablo** | Prólogo + 5 capítulos |
| III | **La Ira de Tlanchana** | Prólogo + 5 capítulos |
| IV | **La Maldición de Vane** | Prólogo + 5 capítulos |
| V | **El Contador de Historias** | Prólogo + 5 capítulos |
| Fan | **La X Marca el Lugar** *(Fan Made — Celebfin)* | Capítulo único |

---

## 🧭 Funcionalidades

### Página principal (`index.html`)

- **Selector de campaña** en acordeón — expande cada campaña para ver sus capítulos
- **Progreso visual** — cada capítulo tiene un check marcable que persiste entre sesiones
- **Contador de avance** — muestra cuántos capítulos se han completado de cada campaña (ej. `3/10`)
- **Banner "Continuar partida"** — recuerda automáticamente el último capítulo visitado y ofrece un acceso directo
- **Frases pirata** rotativas en la cabecera
- **Modo oscuro / modo claro** — se guarda la preferencia entre sesiones

---

### Capítulos de aventura

Cada capítulo es una página independiente con los siguientes módulos accesibles desde botones:

#### 📖 Comienzo del capítulo
Texto de introducción narrativa que se lee al iniciar la sesión.

#### ⛵ Travesía
Tabla con los eventos aleatorios y condiciones de la fase de travesía marítima entre aventuras.

#### 🏴‍☠️ Preparación de Aventura
Instrucciones y tablas para la fase previa al despliegue del mapa.

#### 🎭 Momentos Narrativos (MNs)
El módulo central de la app. Muestra una tabla con todos los eventos narrativos del capítulo:

- **Columna Desencadenante** — describe la condición que activa el evento (ej. *"Al abrir la puerta A"*)
- **Columna MN** — botón con el número del Momento Narrativo; al pulsarlo se muestra el texto completo en pantalla
- **Columna Loseta** — botón con el código de la loseta (ej. `V1`, `I11`); al pulsarlo abre un **popup unificado** con:
  - La imagen de la loseta a pantalla completa (escala automáticamente al tamaño de la ventana)
  - Un panel lateral con todos los MNs que pueden ocurrir en esa loseta, clicables directamente desde el popup

#### 🏆 Éxitos
Tabla de condiciones de victoria y recompensas del capítulo.

#### 🎯 Objetivos
Tabla de objetivos con sus recompensas seleccionables mediante desplegable.

#### 👾 Aparición de Enemigos
Tabla de referencia para colocar enemigos según el resultado del dado.

---

### 🔧 Utilidades integradas en cada capítulo

Estas herramientas están disponibles de forma persistente mientras se juega:

#### 🎲 Dado Virtual
- Configurable en **1d6, 2d6 o 3d6**
- Se lanza haciendo clic o pulsando la tecla `D`
- Resultado animado visible en pantalla

#### 🔍 Buscador de MN
- Campo de búsqueda para localizar un Momento Narrativo por número sin tener que abrir la tabla
- Atajo de teclado: `F` para enfocar el buscador

#### 📊 Tracker de Progreso
- Línea de seguimiento visual en la parte inferior de cada capítulo
- Registra qué MNs ya han sido leídos durante la sesión
- Los MNs visitados se marcan en la barra de progreso
- Se puede desmarcar un MN pulsando el botón ❌ sobre él
- Persiste durante la sesión gracias a `localStorage`

#### 🌙 Modo oscuro / claro
- Botón flotante en esquina superior izquierda
- Preferencia guardada entre sesiones

#### ⌨️ Atajos de teclado

| Tecla | Acción |
|-------|--------|
| `D` | Lanzar dado virtual |
| `F` | Enfocar buscador de MN |
| `Escape` | Cerrar popup / tabla activa |

---

### 📖 Cuaderno de Bitácora (`perfil.html`)

Ficha de campaña persistente con soporte para hasta 4 jugadores y el barco:

**Por cada jugador:**
- Nombre del personaje y del jugador
- Atributos (Fuerza, Agilidad, Percepción, Inteligencia, Carisma, Destino)
- Heridas permanentes y estados especiales
- Habilidades aprendidas (checklist)
- Equipo (lista editable)
- Logros y botín (oro, prestigio, otros recursos)
- Diario personal de campaña (texto libre)

**Pestaña El Barco:**
- Estadísticas del barco (Casco, Velas, Cañones, Tripulación...)
- Daños y estado de la nave
- Diario de a bordo

**Guardado y exportación:**
- 💾 **Guardar** — persiste todos los datos en `localStorage`
- 📤 **Exportar JSON** — descarga un archivo `.json` con el estado completo de la partida para hacer copias de seguridad o compartir entre dispositivos

---

## 🎮 Cómo usar durante la partida

1. Abre `index.html` (o la URL de GitHub Pages) en el navegador
2. Selecciona la campaña y el capítulo que vais a jugar
3. Lee el **Comienzo del capítulo** al inicio de la sesión
4. Consulta **Travesía** y **Preparación** durante las fases correspondientes
5. Cuando el juego indique un Momento Narrativo, abre la tabla de **MNs** y pulsa el número indicado
6. Al revelar o explorar una loseta, pulsa su código en la columna **Loseta** para ver el mapa de esa pieza y todos sus posibles eventos en el panel lateral
7. Usa el **Tracker** en la parte inferior para no repetir MNs ya leídos
8. El **Dado Virtual** está disponible en todo momento para tiradas rápidas
9. Registra los cambios de los personajes en el **Cuaderno de Bitácora**

---

## 💻 Tecnología

- **HTML5 / CSS3 / JavaScript vanilla** — sin frameworks, sin dependencias externas
- **Sin backend** — todo el contenido se carga localmente mediante inyección de scripts
- **`localStorage`** — para persistir progreso, preferencias, fichas de personaje y último capítulo visitado
- **Compatible con `file://`** — puede usarse directamente abriendo los archivos sin servidor
- **GitHub Pages** — desplegado estáticamente sin configuración adicional
- **Fuente tipográfica:** [Pirata One](https://fonts.google.com/specimen/Pirata+One) (Google Fonts)
