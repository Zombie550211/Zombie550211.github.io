# Portafolio — Daniel Ernesto Pérez Martínez

Sitio personal. Una sola página, sin framework y sin paso de compilación: se abre
`index.html` y funciona.

## Idea del diseño

Los nueve proyectos en producción se presentan como los nueve hilos de una bandeja de empalme de
fibra óptica. Cada uno lleva el color que le corresponde en el código
**TIA-598-C** — el mismo estándar que usa el técnico que instala el internet que
estos sistemas venden:

| Hilo | Color | Dominio | Qué es |
|---|---|---|---|
| 01 | Azul `#1477D1` | connecting.lat | CRM Connecting, aplicación web |
| 02 | Naranja `#FF7A1A` | linea-latina.com | Líneas móviles · Next.js en Amplify |
| 03 | Verde `#0FA95E` | lineas-moviles.com | Líneas móviles · S3 + CloudFront |
| 04 | Café `#A9713F` | planeslineasmoviles.com | Líneas móviles · activación con eSIM |
| 05 | Gris `#7D919E` | tumovilplan.com | Líneas móviles · portabilidad |
| 06 | Blanco `#E2E6E4` | offers-mobile.com | Tienda de teléfonos |
| 07 | Rojo `#E23D3D` | speed-internet.com | Internet residencial |
| 08 | Negro `#4A5658` | internetparatuhogar.com | Internet y TV residencial |
| 09 | Amarillo `#E8C547` | asistenteinternet.com | Cambio de proveedor de internet |

La numeración no es decorativa: los hilos de un cable de fibra van numerados en
ese orden exacto. El hilo 08 es negro en el estándar; aquí va en grafito para que
se vea sobre una bandeja oscura. Si se quita un proyecto, los que siguen suben de
posición y toman el color que les toca en la nueva.

## Estructura

```
index.html          Marcado y contenido fijo (portada, oficio, contacto)
css/estilos.css     Tokens de color y tipografía, y todo el estilo
js/hilos.js         Datos de los proyectos + dibujo SVG de los hilos
img/*.webp          Capturas de cada proyecto
.nojekyll           Evita que GitHub Pages procese el sitio con Jekyll
```

**Para cambiar un proyecto**, edita el arreglo `HILOS` al principio de
[`js/hilos.js`](js/hilos.js). De ahí salen las filas de la bandeja, las secciones
de detalle, las capturas y los enlaces: no hay que tocar el HTML.

Para añadir un décimo proyecto, el siguiente color del estándar es violeta;
luego rosa y aqua.

## Capturas

Las del CRM y las de linea-latina.com son del sistema y del sitio en uso, tomadas
por su autor. En las del CRM van difuminados los datos de clientes y agentes:
nombres, teléfonos, direcciones, números de cuenta y fotos de perfil. Las demás
páginas de captación se capturaron de los sitios en vivo con Chrome en modo
headless a 1440 × 900. Todas son WebP de calidad 82 y pesan 906 KB entre las 21.

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
