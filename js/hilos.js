/* ═══════════════════════════════════════════════════════════
   Bandeja de empalme: ocho hilos, ocho proyectos.
   El orden y el color siguen el código TIA-598-C. El hilo 08 es
   negro en el estándar; aquí va en grafito para que se vea sobre
   una bandeja oscura.
   ═══════════════════════════════════════════════════════════ */

const HILOS = [
  {
    id: "crm",
    color: "#1477D1",
    tinte: "azul",
    nombre: "CRM Connecting",
    resumen: "FastAPI · MySQL · SSE · AWS",
    papel:
      "El sistema completo con el que un call center de telecomunicaciones registra " +
      "ventas, reparte comisiones y mide a sus agentes.",
    capturas: [
      { src: "img/crm-estadisticas.webp", pie: "Estadísticas por equipo, puntaje y tasa de activación" },
      { src: "img/crm.webp", pie: "Entrada al sistema" },
    ],
    prosa: [
      "Un agente cierra una venta y la captura en el CRM. A partir de ahí el sistema " +
        "la valida, la factura, calcula la comisión que le toca, la suma al puntaje " +
        "del agente y mueve el ranking del equipo. El supervisor ve el cambio en su " +
        "tablero sin recargar la página.",
      "Dentro conviven dos negocios que no comparten un solo dato: Residencial y " +
        "Líneas. La pertenencia no se marca a mano, se deduce del equipo o del rol de " +
        "quien entra, y ese cálculo vive en un único lugar del código para que nadie " +
        "pueda saltárselo desde otra pantalla.",
      "El frontend es HTML, CSS y JavaScript servidos por el mismo backend. Sin " +
        "framework, sin paso de compilación, sin dependencias que caduquen. La parte " +
        "difícil nunca estuvo en la interfaz: estuvo en los permisos por equipo, en la " +
        "auditoría de las acciones críticas y en no dejar que un proxy mal configurado " +
        "desarmara el límite de intentos de login.",
    ],
    ficha: [
      ["Rol", "Desarrollador único: producto, backend, frontend y servidor"],
      ["Periodo", "Mayo – agosto 2026 · 218 commits"],
      ["Backend", "Python 3.11 · FastAPI async · SQLAlchemy 2.0"],
      ["Datos", "MySQL en RDS privada · 24 tablas · TLS obligatorio"],
      ["Tiempo real", "Server-Sent Events · broker pub/sub en memoria"],
      ["Sesión", "JWT en cookie httpOnly con renovación deslizante"],
      ["Infraestructura", "AWS EC2 us-east-2 · RDS en VPC · respaldos a S3"],
      ["Tamaño", "34 routers · 17 000 líneas Python · 9 800 de JavaScript"],
    ],
    destacados: [
      "Ranking en vivo",
      "Comisiones calculadas",
      "Permisos por equipo",
      "Chat interno",
      "Log de auditoría",
      "Asistente de IA",
    ],
    repo: "https://github.com/Zombie550211/agentes-",
  },
  {
    id: "pagos",
    color: "#FF7A1A",
    tinte: "naranja",
    nombre: "Centro de pagos",
    resumen: "FastAPI · Stripe · Twilio",
    papel:
      "El agente genera un enlace de cobro, el cliente paga con tarjeta y el equipo " +
      "se entera en el momento.",
    capturas: [
      { src: "img/pagos.webp", pie: "Panel de control: embudo de cobro y distribución por estado" },
      { src: "img/pagos-lista.webp", pie: "Listado de enlaces con su estado y vencimiento" },
    ],
    prosa: [
      "Cobrar por teléfono es el punto donde más ventas se caen. Este sistema convierte " +
        "el cobro en un enlace: se crea desde el panel, se manda por SMS o correo, " +
        "caduca solo, y deja registrado quién lo generó y qué pasó con él.",
      "Stripe procesa la tarjeta y avisa por webhook. Twilio manda el SMS. El panel " +
        "enseña el embudo completo — enviados, abiertos, pagados — y la tasa de " +
        "conversión del equipo. Va empaquetado en Docker para levantarlo igual en " +
        "cualquier servidor.",
    ],
    ficha: [
      ["Rol", "Desarrollador único"],
      ["Backend", "Python · FastAPI · SQLAlchemy · Alembic"],
      ["Cobros", "Stripe · webhooks firmados"],
      ["Avisos", "Twilio SMS · correo por SMTP"],
      ["Datos", "PostgreSQL o MySQL · SQLite en desarrollo"],
      ["Despliegue", "Docker · docker-compose"],
      ["Tamaño", "6 routers · 4 servicios · 2 000 líneas Python"],
    ],
    destacados: [
      "Enlaces con caducidad",
      "Webhooks de Stripe",
      "Aviso por SMS",
      "Embudo de conversión",
      "Respaldo diario",
    ],
    repo: "https://github.com/Zombie550211/Gestor-de-cobros",
    nota: "Las cifras de las capturas son de ejemplo: no se muestran datos de clientes reales.",
  },
  {
    id: "lifeline",
    color: "#0FA95E",
    tinte: "verde",
    nombre: "Life Line Call",
    resumen: "Express 5 · Nodemailer",
    papel:
      "Página de captación para un agente autorizado que vende planes de varios " +
      "operadores en todo Estados Unidos.",
    capturas: [
      { src: "img/lifeline.webp", pie: "Portada y comparativa de operadores" },
    ],
    prosa: [
      "El visitante llega buscando internet, compara los operadores que el call center " +
        "representa y deja sus datos. El formulario cae directo en el correo del equipo " +
        "de ventas, sin hoja de cálculo de por medio.",
      "Lleva sus páginas legales completas — privacidad, cookies y términos — porque " +
        "un call center que vende en Estados Unidos las necesita para poder anunciarse.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Servidor", "Node · Express 5 · Nodemailer"],
      ["Frontend", "HTML · CSS · JavaScript"],
      ["Tamaño", "1 290 líneas HTML · 1 600 de CSS"],
    ],
    destacados: ["Formulario al correo del equipo", "Páginas legales", "Multi-operador"],
    repo: "https://github.com/Zombie550211/Spectrum_web",
  },
  {
    id: "linelife",
    color: "#A9713F",
    tinte: "café",
    nombre: "Line Life",
    resumen: "HTML · CSS · JavaScript",
    papel: "Internet, televisión y móvil presentados en una sola página.",
    capturas: [
      { src: "img/linelife.webp", pie: "Portada con consulta de disponibilidad por zona" },
    ],
    prosa: [
      "Un solo documento que tiene que explicar tres productos distintos sin que el " +
        "visitante se pierda. La página se apoya en secciones cortas y una jerarquía " +
        "clara: qué es, cuánto cuesta, cómo se contrata.",
      "El aviso de cookies y la letra pequeña de la promoción están a la vista desde " +
        "el primer pantallazo, no escondidos en el pie.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Frontend", "HTML · CSS · JavaScript sin dependencias"],
      ["Tamaño", "652 líneas HTML"],
    ],
    destacados: ["Página única", "Tres líneas de producto", "Aviso de cookies"],
    repo: "https://github.com/Zombie550211/xfinity",
  },
  {
    id: "planes",
    color: "#7D919E",
    tinte: "gris",
    nombre: "Planes con descuento",
    resumen: "Spline 3D · Render",
    papel:
      "Página de promociones con una portada en tres dimensiones que se carga sin " +
      "frenar el resto del sitio.",
    capturas: [
      { src: "img/planes.webp", pie: "Portada: promociones por zona con atención en español" },
    ],
    prosa: [
      "La portada monta una escena 3D de Spline con un cargador propio: si la escena " +
        "tarda o el dispositivo no da, la página sigue funcionando y enseña la " +
        "alternativa plana. La animación de fondo está escrita a mano, no importada.",
      "Sale publicada en Render con su propio archivo de despliegue, así que un " +
        "cambio en el repositorio se publica solo.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Frontend", "HTML · CSS · JavaScript · Spline"],
      ["Despliegue", "Render · render.yaml"],
      ["Tamaño", "1 184 líneas CSS · 206 del cargador 3D"],
    ],
    destacados: ["Portada 3D", "Carga progresiva", "Despliegue automático"],
    repo: "https://github.com/Zombie550211/pagina-2-spec",
  },
  {
    id: "residencial",
    color: "#E2E6E4",
    tinte: "blanco",
    nombre: "Internet Residencial",
    resumen: "Fibra óptica · SEO",
    papel:
      "Planes de fibra desde 65 dólares al mes, con instalación en 48 a 72 horas y " +
      "soporte en español.",
    capturas: [
      { src: "img/residencial.webp", pie: "Portada de speed-internet.com" },
    ],
    prosa: [
      "Esta página se construyó para que la encuentren en buscadores: mapa del sitio, " +
        "archivo de robots, descripciones escritas una por una y tipografías servidas " +
        "desde el propio dominio para que cargue rápido con datos móviles.",
      "Incluye las páginas de privacidad y términos que exige anunciarse, y está " +
        "pensada para leerse primero en teléfono.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Frontend", "HTML · CSS · JavaScript · fuentes propias"],
      ["Buscadores", "sitemap.xml · robots.txt · metadatos por página"],
      ["Tamaño", "486 líneas HTML · 892 de CSS"],
    ],
    destacados: ["Primero en móvil", "SEO técnico", "Páginas legales"],
    sitio: "https://speed-internet.com",
    repo: "https://github.com/Zombie550211/Pagina-alexis-2-residencial-1-",
  },
  {
    id: "lineas",
    color: "#E23D3D",
    tinte: "rojo",
    nombre: "Líneas móviles",
    resumen: "Carrusel · 5G",
    papel:
      "Planes de telefonía móvil desde 55 dólares al mes, sin contrato y activados " +
      "el mismo día.",
    capturas: [
      { src: "img/lineas.webp", pie: "Portada con carrusel de tres mensajes" },
    ],
    prosa: [
      "La portada rota entre tres mensajes distintos para probar cuál convierte mejor, " +
        "y deja siempre a la vista el botón de llamada: en este negocio la venta se " +
        "cierra por teléfono, no por formulario.",
      "Es la única de estas páginas publicada en GitHub Pages, así que se puede abrir " +
        "y revisar sin pedir permiso a nadie.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Frontend", "HTML · CSS · JavaScript"],
      ["Publicación", "GitHub Pages"],
      ["Tamaño", "1 202 líneas HTML"],
    ],
    destacados: ["Carrusel de portada", "Llamada siempre visible", "Atención en español"],
    sitio: "https://zombie550211.github.io/Page-Lineas-moviles/",
    repo: "https://github.com/Zombie550211/Page-Lineas-moviles",
  },
  {
    id: "limpieza",
    color: "#4A5658",
    tinte: "negro",
    nombre: "B.A. Cleaning Services",
    resumen: "Servicios de limpieza · Inglés",
    papel:
      "Limpieza residencial y de oficinas para un negocio local en Estados Unidos, " +
      "en inglés.",
    capturas: [
      { src: "img/limpieza.webp", pie: "Portada con llamada y mensaje de texto directos" },
    ],
    prosa: [
      "Un negocio de dos personas no necesita un sitio con diez secciones: necesita " +
        "que suene el teléfono. Toda la página está construida alrededor de dos " +
        "botones — llamar y enviar un mensaje — repetidos donde hagan falta.",
      "El único proyecto de esta lista fuera del rubro de telecomunicaciones, y el " +
        "único escrito íntegramente en inglés.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Frontend", "HTML · CSS"],
      ["Idioma", "Inglés"],
    ],
    destacados: ["Llamar o escribir", "Presupuesto gratuito", "Negocio local"],
    repo: "https://github.com/Zombie550211/B.A.CLEANING-SERVICES",
  },
];

/* Iteraciones y variantes que no tienen sección propia */
const ARCHIVO = [
  ["Internet-Residencial", "Versión anterior de la página residencial"],
  ["Pagina-internet-residencial-2-", "Segunda versión residencial"],
  ["Pagina-alexis-1-residencial-", "Primera versión para el mismo cliente"],
  ["pagina-alexis-1-residencial-2-", "Variante de la primera versión"],
  ["Pagina-lineas-2", "Segunda versión de líneas móviles"],
  ["lineas3", "Tercera versión de líneas móviles"],
  ["pagina-lineas-4", "Cuarta versión de líneas móviles"],
  ["pagina-duplicada-de-lineas", "Copia de trabajo de líneas"],
  ["pagina-tito-2-lineas-moviles-", "Líneas móviles para otro cliente"],
  ["xfinity.com", "Variante de Line Life"],
  ["pagina-call-center-line-", "Primera versión de Line Life"],
];

/* ── Filas de la bandeja ────────────────────────────────── */

const lista = document.getElementById("tray-lista");
const tray = document.getElementById("tray");
const grupo = document.getElementById("hilos");

function numero(i) {
  return String(i + 1).padStart(2, "0");
}

HILOS.forEach((h, i) => {
  const fila = document.createElement("li");
  fila.className = "hilo-fila";
  fila.style.setProperty("--hilo", h.color);
  fila.innerHTML =
    '<div class="hilo-fila__vano"></div>' +
    '<button class="hilo-fila__boton" type="button" data-hilo="' + i + '">' +
    '<span class="hilo-fila__num">' + numero(i) + "</span>" +
    '<span class="hilo-fila__texto">' +
    '<span class="hilo-fila__nombre">' + h.nombre + "</span>" +
    '<span class="hilo-fila__stack">' + h.resumen + "</span>" +
    "</span>" +
    (h.sitio ? '<span class="hilo-fila__vivo">En línea</span>' : "") +
    "</button>";
  lista.appendChild(fila);
});

/* ── Dibujo de los hilos ────────────────────────────────── */

function dibujar() {
  const ancho = tray.clientWidth;
  const alto = tray.clientHeight;
  const svg = tray.querySelector(".tray__svg");
  if (!svg || ancho < 700) return; // en móvil el abanico no se muestra

  // viewBox 1:1 con los píxeles reales: el trazo no se deforma al escalar
  svg.setAttribute("viewBox", "0 0 " + ancho + " " + alto);
  svg.setAttribute("preserveAspectRatio", "none");
  grupo.innerHTML = "";

  const filas = lista.querySelectorAll(".hilo-fila");
  const tope = tray.getBoundingClientRect().top;
  const salidaX = ancho * 0.52;

  HILOS.forEach((h, i) => {
    const caja = filas[i].getBoundingClientRect();
    const finY = caja.top - tope + caja.height / 2;
    // Los ocho hilos entran juntos, como un cable, y se abren dentro de la bandeja
    const iniY = alto / 2 + (i - (HILOS.length - 1) / 2) * 4;

    const d =
      "M 0 " + iniY +
      " C " + ancho * 0.2 + " " + iniY +
      ", " + ancho * 0.32 + " " + finY +
      ", " + salidaX + " " + finY;

    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", d);
    path.setAttribute("stroke", h.color);
    path.setAttribute("class", "tray__hilo");
    path.dataset.hilo = String(i);
    grupo.appendChild(path);

    const largo = path.getTotalLength();
    path.style.setProperty("--largo", largo);
    path.style.setProperty("--retraso", 0.1 * i + 0.2 + "s");
  });
}

/* ── Seguir un hilo con el cursor ───────────────────────── */

function enfocar(indice) {
  const activos = grupo.querySelectorAll(".tray__hilo");
  if (indice === null) {
    tray.classList.remove("is-enfocando");
    activos.forEach((p) => p.classList.remove("is-activo"));
    return;
  }
  tray.classList.add("is-enfocando");
  activos.forEach((p) => {
    p.classList.toggle("is-activo", p.dataset.hilo === String(indice));
  });
}

lista.addEventListener("pointerover", (e) => {
  const boton = e.target.closest("[data-hilo]");
  if (boton) enfocar(boton.dataset.hilo);
});
lista.addEventListener("pointerleave", () => enfocar(null));
lista.addEventListener("focusin", (e) => {
  const boton = e.target.closest("[data-hilo]");
  if (boton) enfocar(boton.dataset.hilo);
});
lista.addEventListener("focusout", () => enfocar(null));

lista.addEventListener("click", (e) => {
  const boton = e.target.closest("[data-hilo]");
  if (!boton) return;
  const destino = document.getElementById(HILOS[boton.dataset.hilo].id);
  if (destino) destino.scrollIntoView({ behavior: "smooth", block: "start" });
});

/* ── Secciones de proyecto ──────────────────────────────── */

const contenedor = document.getElementById("proyectos");

function dominio(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

HILOS.forEach((h, i) => {
  const s = document.createElement("section");
  s.className = "proyecto";
  s.id = h.id;
  s.style.setProperty("--hilo", h.color);

  const capturas = (h.capturas || [])
    .map(
      (c) =>
        '<figure class="captura">' +
        '<img src="' + c.src + '" alt="' + h.nombre + ": " + c.pie + '" loading="lazy" decoding="async">' +
        '<figcaption class="captura__pie">' + c.pie + "</figcaption>" +
        "</figure>"
    )
    .join("");

  const enlaces =
    (h.sitio
      ? '<a class="enlace enlace--vivo" href="' + h.sitio + '" target="_blank" rel="noopener">' +
        dominio(h.sitio) + "</a>"
      : "") +
    (h.repo
      ? '<a class="enlace" href="' + h.repo + '" target="_blank" rel="noopener">Código en GitHub</a>'
      : "");

  const ficha = h.ficha
    .map((f) => '<div class="ficha__fila"><dt>' + f[0] + "</dt><dd>" + f[1] + "</dd></div>")
    .join("");

  const prosa = h.prosa.map((p) => "<p>" + p + "</p>").join("");
  const chips = h.destacados.map((d) => "<li>" + d + "</li>").join("");
  const nota = h.nota ? '<p class="proyecto__nota">' + h.nota + "</p>" : "";

  s.innerHTML =
    '<div class="proyecto__interior">' +
    '<p class="proyecto__marca">Hilo ' + numero(i) + " · " + h.tinte + "</p>" +
    '<h2 class="proyecto__titulo">' + h.nombre + "</h2>" +
    '<p class="proyecto__papel">' + h.papel + "</p>" +
    '<div class="proyecto__enlaces">' + enlaces + "</div>" +
    '<div class="capturas capturas--' + (h.capturas || []).length + '">' + capturas + "</div>" +
    '<div class="proyecto__cuerpo">' +
    '<div class="proyecto__prosa">' + prosa + nota + "</div>" +
    '<dl class="ficha">' + ficha + "</dl>" +
    "</div>" +
    '<ul class="destacados">' + chips + "</ul>" +
    "</div>";

  contenedor.appendChild(s);
});

/* ── Archivo de iteraciones ─────────────────────────────── */

const archivo = document.getElementById("archivo-lista");
if (archivo) {
  archivo.innerHTML = ARCHIVO.map(
    (a) =>
      "<li>" +
      '<a href="https://github.com/Zombie550211/' + a[0] + '" target="_blank" rel="noopener">' +
      a[0] + "</a>" +
      "<span>" + a[1] + "</span>" +
      "</li>"
  ).join("");
}

/* ── Arranque ───────────────────────────────────────────── */

dibujar();

let temporizador;
window.addEventListener("resize", () => {
  clearTimeout(temporizador);
  temporizador = setTimeout(dibujar, 150);
});

// Las tipografías cambian la altura de las filas: redibujar cuando terminen
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(dibujar);
}
