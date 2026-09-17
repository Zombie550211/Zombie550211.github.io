# Portafolio — Daniel Ernesto Pérez Martínez

Sitio personal. Una sola página, sin framework y sin paso de compilación: se abre
`index.html` y funciona.

## Idea del diseño

Los ocho proyectos se presentan como los ocho hilos de una bandeja de empalme de
fibra óptica. Cada uno lleva el color que le corresponde en el código
**TIA-598-C** — el mismo estándar que usa el técnico que instala el internet que
estos sistemas venden:

| Hilo | Color | Proyecto | Publicado |
|---|---|---|---|
| 01 | Azul `#1477D1` | CRM Connecting | — |
| 02 | Naranja `#FF7A1A` | Centro de pagos | — |
| 03 | Verde `#0FA95E` | Life Line Call | — |
| 04 | Café `#A9713F` | Line Life | — |
| 05 | Gris `#7D919E` | Planes con descuento | — |
| 06 | Blanco `#E2E6E4` | Internet Residencial | speed-internet.com |
| 07 | Rojo `#E23D3D` | Líneas móviles | GitHub Pages |
| 08 | Negro `#4A5658` | B.A. Cleaning Services | — |

La numeración no es decorativa: los hilos de un cable de fibra van numerados en
ese orden exacto. El hilo 08 es negro en el estándar; aquí va en grafito para que
se vea sobre una bandeja oscura.

## Estructura

```
index.html          Marcado y contenido fijo (portada, oficio, archivo, contacto)
css/estilos.css     Tokens de color y tipografía, y todo el estilo
js/hilos.js         Datos de los proyectos + dibujo SVG de los hilos
img/*.webp          Capturas de cada proyecto
.nojekyll           Evita que GitHub Pages procese el sitio con Jekyll
```

**Para cambiar un proyecto**, edita el arreglo `HILOS` al principio de
[`js/hilos.js`](js/hilos.js). De ahí salen las filas de la bandeja, las secciones
de detalle, las capturas y los enlaces: no hay que tocar el HTML. El arreglo
`ARCHIVO`, debajo, alimenta la lista de versiones anteriores.

Para añadir un noveno proyecto, el siguiente color del estándar es amarillo
`#E8C547`; luego violeta, rosa y aqua.

## Capturas

Se tomaron con Chrome en modo headless a 1440 px de ancho y se convirtieron a
WebP (1500 px, calidad 82). Pesan 581 KB entre las diez.

Las del centro de pagos se generaron renderizando las plantillas Jinja con datos
de ejemplo: **no aparece ningún dato de cliente real**.

## Tipografías

- **Archivo** (variable, eje de ancho) — títulos
- **Newsreader** — prosa
- **IBM Plex Mono** — etiquetas, fichas y cifras

Se cargan desde Google Fonts.

## Ver en local

```bash
python -m http.server 8000
```

Y abrir http://localhost:8000.

## Detalles de accesibilidad

- El abanico de hilos se oculta bajo 860 px y cada proyecto queda con un filo de
  color a la izquierda.
- `prefers-reduced-motion` desactiva el trazado de los hilos y el desplazamiento
  suave.
- Los proyectos son botones reales: se recorren con el tabulador y el hilo
  correspondiente se resalta al recibir el foco.
- Cada captura lleva texto alternativo con el nombre del proyecto y qué muestra.
