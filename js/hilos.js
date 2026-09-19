/* ═══════════════════════════════════════════════════════════
   Bandeja de empalme: nueve hilos, nueve proyectos en producción.
   El orden y el color siguen el código TIA-598-C. El hilo 08 es
   negro en el estándar; aquí va en grafito para que se vea sobre
   una bandeja oscura.
   ═══════════════════════════════════════════════════════════ */

/* Tiempo que lleva funcionando algo, contado hasta hoy: así no envejece solo */
function enFuncionamiento(desde) {
  const inicio = new Date(desde + "T00:00:00");
  const hoy = new Date();
  let anios = hoy.getFullYear() - inicio.getFullYear();
  let meses = hoy.getMonth() - inicio.getMonth();
  let dias = hoy.getDate() - inicio.getDate();
  if (dias < 0) {
    meses--;
    dias += new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
  }
  if (meses < 0) {
    anios--;
    meses += 12;
  }
  const partes = [];
  if (anios) partes.push(anios + (anios === 1 ? " año" : " años"));
  if (meses) partes.push(meses + (meses === 1 ? " mes" : " meses"));
  if (dias && partes.length < 2) partes.push(dias + (dias === 1 ? " día" : " días"));
  return partes.join(" y ");
}

const HILOS = [
  {
    id: "crm",
    color: "#1477D1",
    tinte: "azul",
    nombre: "connecting.lat",
    resumen: "Aplicación web · FastAPI · MySQL · AWS",
    papel:
      "CRM Connecting: el sistema completo con el que un call center de " +
      "telecomunicaciones registra ventas, reparte comisiones y mide a sus agentes.",
    capturas: [
      { src: "img/crm-tablero.webp", pie: "Tablero: ventas del año, mapa de instalaciones, ranking y llamadas pendientes" },
      { src: "img/crm-estadisticas.webp", pie: "Estadísticas por equipo, con desglose por servicio y tasa de activación" },
      { src: "img/crm-ventas.webp", pie: "Listado de ventas con estatus, logística y estado de la comisión" },
      { src: "img/crm-registro.webp", pie: "Registro de una venta, con puntaje calculado automáticamente" },
      { src: "img/crm-ranking.webp", pie: "Tabla de posiciones del mes por agente" },
      { src: "img/crm-podio.webp", pie: "El podio del mes, tal como lo ve el agente" },
      { src: "img/crm-equipos.webp", pie: "Rendimiento por equipo, separado en residencial y líneas" },
    ],
    prosa: [
      "Entró en producción el 3 de septiembre de 2025, con la primera venta registrada. " +
        "La primera cuenta de usuario es de una semana antes, y el código venía de más " +
        "atrás: el primer commit fue la importación de trescientos archivos ya escritos.",
      "Un agente cierra una venta y la captura en el CRM. A partir de ahí el sistema " +
        "la valida, la factura, calcula la comisión que le toca, la suma al puntaje " +
        "del agente y mueve el ranking del equipo. El supervisor ve el cambio en su " +
        "tablero sin recargar la página.",
      "Dentro conviven dos negocios que no comparten un solo dato: Residencial y " +
        "Líneas. La pertenencia no se marca a mano, se deduce del equipo o del rol de " +
        "quien entra, y ese cálculo vive en un único lugar del código para que nadie " +
        "pueda saltárselo desde otra pantalla.",
      "El sistema está escrito dos veces. La primera etapa —Node, Express y MongoDB " +
        "en Render— fue de agosto de 2025 a abril de 2026 y dejó 646 commits. El 18 de " +
        "mayo de 2026 se reescribió entero a FastAPI con MySQL: backend, capa de datos " +
        "y salida de MongoDB, todo en un día. La historia de git empieza de cero ahí, " +
        "aunque el sistema llevaba ocho meses en producción.",
      "El frontend es HTML, CSS y JavaScript servidos por el mismo backend: 44 páginas " +
        "sin framework, sin paso de compilación y con Chart.js servido desde el propio " +
        "servidor en vez de un CDN. La parte difícil nunca estuvo en la interfaz: estuvo " +
        "en los permisos por equipo, en la auditoría de las acciones críticas y en no " +
        "dejar que un proxy mal configurado desarmara el límite de intentos de login.",
      "Después de la auditoría de agosto de 2026 llegaron la política de contenido, el " +
        "límite de intentos de login, la revocación de sesiones y el cierre de los " +
        "endpoints sin autenticar. Un mes más tarde el despliegue dejó de ser manual: " +
        "el servidor mira la rama main cada minuto y aplica los cambios con punto de " +
        "retorno y vuelta atrás automática.",
    ],
    ficha: [
      ["Rol", "Desarrollador único: producto, backend, frontend y servidor"],
      ["En producción", "Desde el 3 de septiembre de 2025 · " + enFuncionamiento("2025-09-03") + " funcionando"],
      ["Primera etapa", "Node · Express 5 · MongoDB · Render — 646 commits, ago. 2025 a abr. 2026"],
      ["Segunda etapa", "Python · FastAPI · SQLAlchemy async · MySQL 8.4 — desde mayo de 2026"],
      ["Datos", "MySQL 8.4 en RDS privada · red cerrada · TLS obligatorio"],
      ["Tiempo real", "Server-Sent Events · broker pub/sub en memoria"],
      ["Sesión", "JWT en cookie httpOnly · roles de administrador, supervisor, agente y backoffice"],
      ["Infraestructura", "AWS EC2 con nginx y systemd · RDS en VPC · respaldos diarios a S3"],
      ["Despliegue", "Automático desde main, con punto de retorno y vuelta atrás"],
      ["Tamaño", "82 000 líneas · 44 páginas · 33 routers · 902 commits entre las dos etapas"],
    ],
    destacados: [
      "Ranking en vivo",
      "Comisiones calculadas",
      "Permisos por equipo",
      "Chat interno",
      "Log de auditoría",
      "Asistente de IA",
      "Despliegue automático",
      "Entorno local con datos anonimizados",
    ],
    sitio: "https://connecting.lat",
    articulo: "crm-connecting.html",
    nota: "Capturas del sistema en uso. Van difuminados los datos de clientes y agentes y las cifras del negocio: lo que se ve es el diseño, no la operación de nadie.",
  },
  {
    id: "linea-latina",
    color: "#FF7A1A",
    tinte: "naranja",
    nombre: "linea-latina.com",
    resumen: "Líneas móviles · Next.js 16 · Amplify",
    papel:
      "Planes de líneas móviles 5G para familias latinas en Estados Unidos, desde " +
      "55 dólares al mes.",
    verticales: true,
    capturas: [
      { src: "img/linea-latina-portada.webp", pie: "Portada: planes sin contrato desde 55 dólares al mes" },
      { src: "img/linea-latina-servicio.webp", pie: "Las cifras del servicio y por qué elegirlo" },
      { src: "img/linea-latina-familiares.webp", pie: "Planes familiares: hasta cuatro líneas con tarifa reducida" },
      { src: "img/linea-latina-equipos.webp", pie: "Catálogo de equipos de alta gama" },
      { src: "img/linea-latina-precios.webp", pie: "Precios: plan básico y plan familiar" },
      { src: "img/linea-latina-cobertura.webp", pie: "Mapa de cobertura y velocidad de la red" },
      { src: "img/linea-latina-preguntas.webp", pie: "Preguntas frecuentes y pie de página" },
    ],
    prosa: [
      "La única de las páginas de captación hecha con Next.js: corre en AWS Amplify " +
        "con renderizado en servidor, detrás de CloudFront y con el DNS en Route 53. " +
        "Llegó ahí desde Render en una migración con su propio documento de " +
        "infraestructura, y ahora cada push a main se construye y se publica solo.",
      "El formulario de contacto y el chatbot están escritos — validación con zod, " +
        "envío por Resend, diez intentos por IP cada quince minutos — pero se apagan en " +
        "producción según NODE_ENV, así que nadie los enciende por accidente desde la " +
        "consola. En vivo la venta entra por teléfono, y cada clic en el número se mide " +
        "como conversión de Google Ads.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Periodo", "Abril – agosto 2026 · 77 commits"],
      ["Framework", "Next.js 16 · React 19 · Tailwind 4 · TypeScript"],
      ["Alojamiento", "AWS Amplify · CloudFront · Route 53"],
      ["Tamaño", "1 000 líneas TSX · 600 de CSS"],
    ],
    destacados: [
      "Renderizado en servidor",
      "Migrado de Render a AWS",
      "Captación apagada en producción",
      "Conversiones de Google Ads",
    ],
    sitio: "https://linea-latina.com",
    repo: "https://github.com/Zombie550211/pagina-duplicada-de-lineas",
    nota: "Capturas tomadas en un teléfono, que es desde donde llega casi todo el tráfico.",
  },
  {
    id: "lineas-moviles",
    color: "#0FA95E",
    tinte: "verde",
    nombre: "lineas-moviles.com",
    resumen: "Líneas móviles · S3 + CloudFront · Botpress",
    papel:
      "Planes móviles 5G sin contrato ni ataduras, con atención en español y " +
      "activación el mismo día.",
    capturas: [
      { src: "img/lineas-moviles.webp", pie: "Portada centrada en el producto" },
    ],
    prosa: [
      "Un sitio estático en un bucket de S3 privado, servido por CloudFront. La " +
        "infraestructura está escrita como plantilla de CloudFormation: el bucket, la " +
        "distribución, una función de CloudFront para las URLs limpias y la política de " +
        "cabeceras de seguridad salen de un solo archivo.",
      "El script de despliegue arma una carpeta con solo lo publicable y se niega a " +
        "subir si ahí aparece algo que no debe salir. La página lleva un chatbot de " +
        "Botpress y mide cada clic en el teléfono como conversión.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Periodo", "Abril – septiembre 2026 · 80 commits"],
      ["Frontend", "HTML · CSS · JavaScript"],
      ["Alojamiento", "S3 privado · CloudFront · Route 53"],
      ["Infraestructura", "CloudFormation · política IAM de despliegue"],
      ["Tamaño", "2 600 líneas HTML"],
    ],
    destacados: [
      "Infraestructura como código",
      "Cabeceras de seguridad",
      "Chatbot Botpress",
      "Conversiones medidas",
    ],
    sitio: "https://lineas-moviles.com",
    repo: "https://github.com/Zombie550211/Page-Lineas-moviles",
  },
  {
    id: "planeslineasmoviles",
    color: "#A9713F",
    tinte: "café",
    nombre: "planeslineasmoviles.com",
    resumen: "Líneas móviles · activación con eSIM",
    papel: "Servicio de línea móvil en Estados Unidos con activación cien por ciento en línea.",
    capturas: [
      { src: "img/planeslineasmoviles.webp", pie: "Portada: cobertura nacional y activación en línea" },
    ],
    prosa: [
      "La página vende el trámite, no el teléfono: tres planes con precio por línea, " +
        "tres pasos para activar con eSIM y las dudas de siempre resueltas antes de que " +
        "alguien tenga que llamar.",
      "Lleva cuatro páginas legales — privacidad, términos, aviso legal y política de " +
        "uso justo — porque un plan que se anuncia como ilimitado tiene que explicar " +
        "dónde está el límite.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Periodo", "Junio – agosto 2026 · 22 commits"],
      ["Frontend", "HTML · CSS · JavaScript"],
      ["Alojamiento", "AWS S3 · CloudFront"],
      ["Tamaño", "550 líneas HTML · 420 de CSS"],
    ],
    destacados: ["Activación con eSIM", "Tres planes", "Política de uso justo"],
    sitio: "https://planeslineasmoviles.com",
    repo: "https://github.com/Zombie550211/lineas3",
  },
  {
    id: "tumovilplan",
    color: "#7D919E",
    tinte: "gris",
    nombre: "tumovilplan.com",
    resumen: "Líneas móviles · portabilidad",
    papel:
      "Planes móviles 5G+ desde 30 dólares por línea, con la portabilidad del número " +
      "explicada paso a paso.",
    capturas: [
      { src: "img/tumovilplan.webp", pie: "Portada con los planes a la vista" },
    ],
    prosa: [
      "Cambiar de compañía da miedo por una sola razón: perder el número. La página " +
        "dedica una sección entera a la portabilidad y avisa en grande de lo único que " +
        "no hay que hacer — cancelar el servicio anterior antes de recibir la confirmación.",
      "La portada es un solo documento, con el estilo y el comportamiento dentro, para " +
        "que llegue de una vez a cualquier teléfono.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Periodo", "Mayo 2026 · 15 commits"],
      ["Frontend", "HTML con CSS y JavaScript en el mismo archivo"],
      ["Alojamiento", "AWS S3 · CloudFront"],
      ["Tamaño", "1 160 líneas la portada · 3 páginas"],
    ],
    destacados: ["Portabilidad paso a paso", "Un solo archivo", "Precio por línea"],
    sitio: "https://tumovilplan.com",
    repo: "https://github.com/Zombie550211/Pagina-lineas-2",
  },
  {
    id: "offers-mobile",
    color: "#E2E6E4",
    tinte: "blanco",
    nombre: "offers-mobile.com",
    resumen: "Tienda de teléfonos · 9 páginas",
    papel:
      "Tienda de teléfonos en español: Samsung, Apple y Motorola, con cotización por " +
      "teléfono y envío en Estados Unidos.",
    capturas: [
      { src: "img/offers-mobile.webp", pie: "Portada del catálogo" },
    ],
    prosa: [
      "La más grande de las páginas: nueve documentos entre la tienda, envíos, " +
        "devoluciones, garantía, ayuda y las páginas legales. El diseño se toma el " +
        "tiempo de un catálogo — fotografía grande, mucho aire y un filtro por marca.",
      "El visor de cada modelo gira el teléfono en 3D con CSS: con un botón da la " +
        "vuelta solo, y con el dedo o el ratón se inclina hacia donde se arrastre. El " +
        "despliegue a S3 y CloudFront tiene modo de prueba para ver qué se va a subir " +
        "antes de subirlo.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Periodo", "Agosto – septiembre 2026 · 20 commits"],
      ["Frontend", "HTML · CSS · JavaScript"],
      ["Alojamiento", "AWS S3 · CloudFront"],
      ["Tamaño", "9 páginas · 2 000 líneas HTML · 760 de CSS"],
    ],
    destacados: ["Catálogo por marca", "Visor 3D", "Envíos y garantía", "Despliegue con modo de prueba"],
    sitio: "https://offers-mobile.com",
    repo: "https://github.com/Zombie550211/pagina-tito-2-lineas-moviles-",
  },
  {
    id: "speed-internet",
    color: "#E23D3D",
    tinte: "rojo",
    nombre: "speed-internet.com",
    resumen: "Internet residencial · SEO",
    papel:
      "Planes de fibra desde 65 dólares al mes, con instalación en 48 a 72 horas y " +
      "soporte en español.",
    capturas: [
      { src: "img/speed-internet.webp", pie: "Portada de speed-internet.com" },
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
      ["Periodo", "Agosto – septiembre 2026 · 8 commits"],
      ["Frontend", "HTML · CSS · JavaScript · fuentes propias"],
      ["Buscadores", "sitemap.xml · robots.txt · metadatos por página"],
      ["Alojamiento", "AWS S3 · CloudFront"],
      ["Tamaño", "486 líneas HTML · 892 de CSS"],
    ],
    destacados: ["Primero en móvil", "SEO técnico", "Páginas legales"],
    sitio: "https://speed-internet.com",
    repo: "https://github.com/Zombie550211/Pagina-alexis-2-residencial-1-",
  },
  {
    id: "internetparatuhogar",
    color: "#4A5658",
    tinta: "#8B9A9C", // el grafito no se lee como texto: etiquetas y enlaces van más claros
    tinte: "negro",
    nombre: "internetparatuhogar.com",
    resumen: "Internet y TV · datos estructurados",
    papel:
      "Internet y televisión residencial: se verifica la cobertura en la dirección " +
      "del cliente y se le ayuda a contratar el plan.",
    capturas: [
      { src: "img/internetparatuhogar.webp", pie: "Portada con los servicios del hogar" },
    ],
    prosa: [
      "Dos productos, internet y televisión, cada uno con su sección y un paquete que " +
        "los junta. El recorrido está contado en pasos numerados para que el visitante " +
        "sepa qué pasa después de llamar.",
      "Tiene centro de ayuda, página 404 propia, datos estructurados de schema.org " +
        "para buscadores y una barra de llamada fija abajo, que en el teléfono es donde " +
        "llega el pulgar.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Periodo", "Junio – septiembre 2026 · 10 commits"],
      ["Frontend", "HTML · CSS · fuentes propias"],
      ["Buscadores", "schema.org · sitemap.xml · robots.txt"],
      ["Alojamiento", "AWS S3 · CloudFront"],
      ["Tamaño", "5 páginas · 1 500 líneas HTML"],
    ],
    destacados: ["Internet + TV", "Centro de ayuda", "Datos estructurados", "Llamada siempre a mano"],
    sitio: "https://internetparatuhogar.com",
    repo: "https://github.com/Zombie550211/Pagina-internet-residencial-2-",
  },
  {
    id: "asistenteinternet",
    color: "#E8C547",
    tinte: "amarillo",
    nombre: "asistenteinternet.com",
    resumen: "Cambio de proveedor · carrusel",
    papel: "Asesoría en español para cambiar de proveedor de internet sin pagar de más.",
    capturas: [
      { src: "img/asistenteinternet.webp", pie: "Portada: segundo mensaje del carrusel" },
    ],
    prosa: [
      "La portada es un carrusel de tres mensajes — el problema, quiénes somos y los " +
        "precios — y debajo está el cambio de proveedor explicado en cuatro pasos: " +
        "asesoría, comparación, gestión del cambio y conexión.",
      "Los textos entran con animaciones de máscara al hacer scroll, escritas a mano " +
        "con IntersectionObserver. Se publica con un script que sincroniza el sitio con " +
        "S3 e invalida la caché de CloudFront.",
    ],
    ficha: [
      ["Rol", "Diseño y desarrollo"],
      ["Periodo", "Agosto 2026 · 4 commits"],
      ["Frontend", "HTML · CSS · JavaScript"],
      ["Alojamiento", "AWS S3 · CloudFront"],
      ["Tamaño", "1 150 líneas CSS · 220 de JavaScript"],
    ],
    destacados: ["Carrusel de portada", "Cambio en cuatro pasos", "Animaciones propias"],
    sitio: "https://asistenteinternet.com",
    repo: "https://github.com/Zombie550211/pagina-alexis-1-residencial-2-",
  },
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
  if (h.tinta) fila.style.setProperty("--tinta", h.tinta);
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
    // Los hilos entran juntos, como un cable, y se abren dentro de la bandeja
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
  if (h.tinta) s.style.setProperty("--tinta", h.tinta);

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
      : "") +
    (h.articulo
      ? '<a class="enlace" href="' + h.articulo + '">Caso completo →</a>'
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
    '<div class="capturas capturas--' + (h.capturas || []).length +
    (h.verticales ? " capturas--vertical" : (h.capturas || []).length > 2 ? " capturas--muchas" : "") +
    '">' + capturas + "</div>" +
    '<div class="proyecto__cuerpo">' +
    '<div class="proyecto__prosa">' + prosa + nota + "</div>" +
    '<dl class="ficha">' + ficha + "</dl>" +
    "</div>" +
    '<ul class="destacados">' + chips + "</ul>" +
    "</div>";

  contenedor.appendChild(s);
});

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
