import type { ImageMetadata } from 'astro';
import type { Lang } from './site';

/** Nombres de las categorías que se pueden filtrar en la grilla. */
export type Category = 'production' | 'own' | 'freelance' | 'lab';

export interface Bilingual {
  es: string;
  en: string;
}

export interface BilingualList {
  es: string[];
  en: string[];
}

export interface Shot {
  src: ImageMetadata;
  alt: Bilingual;
  caption?: Bilingual;
  /** Agrupa las capturas en la página de detalle. */
  group?: Bilingual;
}

export interface ProjectLink {
  kind: 'demo' | 'site';
  label: Bilingual;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  category: Category;
  /** Etiqueta de tiempo: puede ser un rango de años o una descripción. */
  period: Bilingual;
  role: Bilingual;
  context: Bilingual;
  summary: Bilingual;
  body: BilingualList;
  highlights: BilingualList;
  stack: string[];
  links?: ProjectLink[];
  /** Ocupa dos columnas en la grilla. */
  featured?: boolean;
  /** Índice de la captura que usa la tarjeta, si no es la primera. */
  cardCover?: number;
}

/* --------------------------------------------------------------------------
   Catálogo de capturas.
   Las imágenes viven en `capturas/`, en la raíz del repositorio: la misma
   carpeta que usa el README y que publica el sitio. Una sola fuente de verdad.
   `import.meta.glob` las resuelve al compilar, así que Astro las optimiza y
   avisa si una ruta no existe.
   -------------------------------------------------------------------------- */

const files = import.meta.glob<{ default: ImageMetadata }>('../../capturas/**/*.png', {
  eager: true,
});

function shot(
  path: string,
  alt: Bilingual,
  caption?: Bilingual,
  group?: Bilingual,
): Shot {
  const key = `../../capturas/${path}`;
  const mod = files[key];
  if (!mod) {
    throw new Error(
      `No existe la captura "${path}". Revisa capturas/ antes de compilar.`,
    );
  }
  return { src: mod.default, alt, caption, group };
}

/* --------------------------------------------------------------------------
   Proyectos
   -------------------------------------------------------------------------- */

export const projects: Project[] = [
  {
    slug: 'gailaggold',
    title: 'GailagGold',
    category: 'production',
    period: { es: '2021 – 2026', en: '2021 – 2026' },
    role: {
      es: 'Diseño, desarrollo y mantenimiento — único desarrollador',
      en: 'Design, development and maintenance — sole developer',
    },
    context: {
      es: 'Infinity Comercializadora de Metales Preciosos · Tolima, Colombia',
      en: 'Infinity Precious Metals Trading Company · Tolima, Colombia',
    },
    summary: {
      es: 'El sistema de escritorio que sostiene la operación completa de una comercializadora de oro: compra, bodega, lingoteo, contabilidad, rutas y despachos.',
      en: 'The desktop system running the entire operation of a gold trading company: purchasing, warehouse, bar casting, accounting, routes and dispatch.',
    },
    body: {
      es: [
        'GailagGold es el corazón operativo de la empresa. Cubre la compra de oro a mineros de subsistencia, bodega e inventario, registro de mineros, negocios y sucursales, lingoteo con certificado de peso y pureza, contabilidad, mobiliario, vehículos, rutas, despachos y reportes.',
        'El mayor reto técnico fue el hardware. Para cumplir con el certificado de origen que exige la Agencia Nacional de Minería, el sistema captura la huella del minero en un lector DigitalPersona y su firma en una tableta Topaz. Como esos SDK solo existen para Windows y el sistema es multiplataforma, escribí utilidades propias en Java y C# que el cliente invoca para hablar con el hardware. Resolví de la misma forma la impresión silenciosa de tickets POS, cartas y facturas.',
        'La primera versión era Angular + Electron. Con los años se volvió pesada, así que la reescribí por completo en Flutter: arranca en una fracción del tiempo y consume muchos menos recursos. El sistema sigue en uso diario en la empresa.',
      ],
      en: [
        'GailagGold is the operational heart of the company. It covers buying gold from small-scale miners, warehouse and inventory, miner registration, businesses and branches, bar casting with weight and purity certificates, accounting, furniture, vehicles, routes, dispatch and reporting.',
        'The main technical challenge was the hardware. To produce the certificate of origin required by Colombia\u2019s National Mining Agency, the system captures the miner\u2019s fingerprint on a DigitalPersona reader and their signature on a Topaz pad. Because those SDKs only exist for Windows and the system is cross-platform, I wrote my own Java and C# utilities that the client calls to talk to the hardware. I solved silent printing of POS tickets, letters and invoices the same way.',
        'The first version was Angular + Electron. Over the years it grew heavy, so I rewrote it entirely in Flutter: it starts in a fraction of the time and uses far fewer resources. The system is still in daily use at the company.',
      ],
    },
    highlights: {
      es: [
        'Único desarrollador de todo el ecosistema: arquitectura, backend, apps, servidores y soporte.',
        'Hardware real integrado: huellero DigitalPersona, tableta de firma Topaz, cámara e impresión silenciosa (POS, carta y factura) con utilidades propias en Java y C#.',
        'Certificado de origen con firma digital del minero, listo para la Agencia Nacional de Minería.',
        'Más de 3.800 lingotes con trazabilidad completa en el punto más alto.',
        'Reescrito de Angular + Electron a Flutter para mejorar el rendimiento.',
      ],
      en: [
        'Sole developer of the whole ecosystem: architecture, backend, apps, servers and support.',
        'Real hardware integrated: DigitalPersona fingerprint reader, Topaz signature pad, camera and silent printing (POS, letter and invoice) through custom Java and C# utilities.',
        'Certificate of origin with the miner\u2019s digital signature, ready for Colombia\u2019s National Mining Agency.',
        '3,800+ gold bars with full traceability at peak.',
        'Rewritten from Angular + Electron to Flutter for performance.',
      ],
    },
    stack: ['Flutter', 'Dart', 'GetX', 'Syncfusion', 'fl_chart', 'Java', 'C#', 'PostgreSQL', 'PDF'],
  },

  {
    slug: 'pricelock',
    title: 'PriceLock',
    category: 'production',
    period: { es: '2024 – 2026', en: '2024 – 2026' },
    role: {
      es: 'App móvil y API en Go — único desarrollador',
      en: 'Mobile app and Go API — sole developer',
    },
    context: {
      es: 'Infinity Comercializadora de Metales Preciosos · Tolima, Colombia',
      en: 'Infinity Precious Metals Trading Company · Tolima, Colombia',
    },
    summary: {
      es: 'App móvil para que los mineros consulten el precio del oro al minuto, publiquen ofertas de venta que congelan el precio y registren sus compras con foto.',
      en: 'A mobile app where miners check the gold price by the minute, post sale offers that lock the price, and record their purchases with a photo.',
    },
    body: {
      es: [
        'PriceLock nació de una necesidad concreta: los mineros de subsistencia necesitaban saber a cuánto estaba el oro antes de bajar al casco urbano a vender. La app muestra el precio por gramo en vivo para oro, plata, platino, paladio y rodio, con el estado de apertura del mercado y el dólar de compra.',
        'El usuario publica una oferta de venta, la oferta congela el precio por un tiempo limitado y la comercializadora la ve desde el otro lado. La app incluye una calculadora que saca el total a pagar a partir de la ley (pureza), los gramos brutos y los finos, lee códigos QR y funciona en teléfonos de gama baja: fue justamente el motivo por el que descarté React Native y me pasé a Flutter.',
        'El backend, también desarrollado por mí, está escrito en Go: API REST, autenticación con JWT, tareas programadas que actualizan precios y moderan anuncios, y notificaciones push sobre Firebase.',
      ],
      en: [
        'PriceLock came out of a concrete need: small-scale miners needed to know the gold price before travelling into town to sell. The app shows the live price per gram for gold, silver, platinum, palladium and rhodium, along with market open/closed status and the buying exchange rate.',
        'A user posts a sale offer, the offer locks the price for a limited time, and the trading company sees it on the other side. The app includes a calculator that works out the total payable from purity, gross grams and fine grams, scans QR codes and runs on low-end phones — which is exactly why I dropped React Native and moved to Flutter.',
        'The backend, which I also built, is written in Go: REST API, JWT authentication, scheduled jobs that refresh prices and moderate listings, and push notifications on top of Firebase.',
      ],
    },
    highlights: {
      es: [
        'Precio por gramo en vivo de cinco metales, con estado de mercado y dólar de compra.',
        'Ofertas de venta que congelan el precio durante una ventana de tiempo.',
        'Calculadora de compra a partir de ley, gramos brutos y finos.',
        'Backend propio en Go: REST, JWT, cron de precios y moderación, notificaciones push.',
        'Optimizada para teléfonos de gama baja después de descartar React Native por rendimiento.',
      ],
      en: [
        'Live price per gram for five metals, with market status and buying exchange rate.',
        'Sale offers that lock the price for a limited window.',
        'Purchase calculator based on purity, gross grams and fine grams.',
        'My own Go backend: REST, JWT, price and moderation cron jobs, push notifications.',
        'Tuned for low-end phones after dropping React Native for performance.',
      ],
    },
    stack: ['Flutter', 'Dart', 'GetX', 'fl_chart', 'Go', 'Echo', 'GORM', 'SQLite', 'JWT', 'Firebase'],
  },

  {
    slug: 'infinityapp',
    title: 'InfinityApp',
    category: 'production',
    period: { es: '2019 – 2026', en: '2019 – 2026' },
    role: {
      es: 'App móvil y backend — único desarrollador',
      en: 'Mobile app and backend — sole developer',
    },
    context: {
      es: 'Infinity Comercializadora de Metales Preciosos · Tolima, Colombia',
      en: 'Infinity Precious Metals Trading Company · Tolima, Colombia',
    },
    summary: {
      es: 'La herramienta que los mineros usan a diario para saber el precio del oro y calcular cuánto vale su material antes de venderlo.',
      en: 'The tool miners use every day to check the gold price and work out what their material is worth before selling.',
    },
    body: {
      es: [
        'InfinityApp es la app más antigua del ecosistema y la que más gente ha usado. Muestra el precio del oro y del dólar en tiempo real, y permite calcular cuánto se va a pagar por un material a partir de su ley y su porcentaje.',
        'Tiene alarmas configurables para avisar cuando el precio cruza un umbral, que es lo que realmente mueve la decisión de vender o esperar. Se publicó para Android e iOS; hoy se usa en Android por decisiones internas de la empresa.',
      ],
      en: [
        'InfinityApp is the oldest app in the ecosystem and the one most people have used. It shows the gold price and the exchange rate in real time, and works out how much will be paid for a piece of material from its purity and percentage.',
        'It has configurable alerts that fire when the price crosses a threshold — which is really what drives the decision to sell or wait. It shipped for Android and iOS; today it runs on Android by an internal company decision.',
      ],
    },
    highlights: {
      es: [
        'Precio del oro y del dólar en tiempo real.',
        'Calculadora de compra según ley (pureza) y porcentaje.',
        'Alarmas configurables sobre el precio.',
        'En producción desde 2019, con uso diario por parte de los mineros.',
      ],
      en: [
        'Real-time gold price and exchange rate.',
        'Purchase calculator based on purity and percentage.',
        'Configurable price alerts.',
        'In production since 2019, used by miners daily.',
      ],
    },
    stack: ['Flutter', 'Dart', 'GetX', 'Firebase', 'Django', 'Python', 'QR'],
  },

  {
    slug: 'nian-admin',
    title: 'Nian Admin',
    category: 'own',
    period: { es: '2026', en: '2026' },
    role: {
      es: 'Proyecto propio — servidor Go y cliente de escritorio',
      en: 'Personal project — Go server and desktop client',
    },
    context: {
      es: 'Panel de lingotes para Nian Capital · servidor Go propio con ORM Ent',
      en: 'Gold-bar admin panel for Nian Capital · its own Go server with the Ent ORM',
    },
    summary: {
      es: 'Panel administrativo de una comercializadora de lingotes: inventario, producción de lotes con certificado de peso y pureza, contabilidad e informes.',
      en: 'Admin panel for a gold-bar trading company: inventory, batch production with weight and purity certificates, accounting and reporting.',
    },
    body: {
      es: [
        'Nian Admin es el panel administrativo que construí como propuesta para Nian Capital. Cubre ventas, compras, clientes, inventario y contabilidad, con ingresos y gastos e informes diario y general.',
        'La parte más interesante es la producción de lingotes: cada lote se registra con su certificado de peso y pureza, sus regalías y sus imágenes, y queda trazable de principio a fin. Encima de eso van el control de sucursales, las reasignaciones entre ellas y los usuarios con permisos por grupos, con exportación e importación de datos en Excel.',
        'El servidor está escrito en Go con el ORM Ent y esquema propio. El cliente es una app de escritorio en Flutter pensada para trabajar con grillas de datos densas, informes en PDF y hojas de cálculo.',
      ],
      en: [
        'Nian Admin is the admin panel I built as a proposal for Nian Capital. It covers sales, purchases, customers, inventory and accounting, with income and expenses plus daily and general reports.',
        'The most interesting part is bar production: every batch is recorded with its weight and purity certificate, its royalties and its images, and stays traceable from end to end. On top of that come branch control, transfers between them, and users with group-based permissions, with Excel import and export.',
        'The server is Go with the Ent ORM and a schema of its own. The client is a Flutter desktop app built for dense data grids, PDF reports and spreadsheets.',
      ],
    },
    highlights: {
      es: [
        'Producción de lotes: certificado de peso y pureza, regalías e imágenes por lingote.',
        'Contabilidad con informes diario y general.',
        'Sucursales, reasignaciones y usuarios con permisos por grupos.',
        'Importación y exportación de datos en Excel.',
        'Servidor en Go con ORM Ent: consultas tipadas y migraciones versionadas.',
      ],
      en: [
        'Batch production: weight and purity certificate, royalties and images per bar.',
        'Accounting with daily and general reports.',
        'Branches, transfers and users with group-based permissions.',
        'Excel data import and export.',
        'Go server with the Ent ORM: typed queries and versioned migrations.',
      ],
    },
    stack: ['Go', 'Ent', 'PostgreSQL', 'Flutter', 'trina_grid', 'fl_chart', 'PDF', 'Excel'],
  },

  {
    slug: 'llantaseltoro',
    title: 'Llantas El Toro',
    category: 'freelance',
    period: { es: '2026', en: '2026' },
    role: {
      es: 'Diseño, desarrollo y entrega al cliente',
      en: 'Design, development and client handover',
    },
    context: {
      es: 'Cliente en Chile · trabajo remoto',
      en: 'Client in Chile · remote work',
    },
    summary: {
      es: 'Sitio web corporativo para una tienda y taller de llantas en Chile, entregado con un manual de administración para que el cliente lo mantenga solo.',
      en: 'Corporate website for a tyre shop and fitting workshop in Chile, handed over with an admin manual so the client can maintain it alone.',
    },
    body: {
      es: [
        'El cliente necesitaba dejar atrás un sitio viejo y lento y pasar a algo que él mismo pudiera editar sin depender de nadie. Lo construí con Astro y Strapi como CMS: el cliente edita el contenido desde el panel de Strapi y el sitio se publica como HTML estático, así que carga al instante y el costo de servidor es mínimo.',
        'Incluye catálogo de productos y servicios, blog, formulario de cotización, integración con WhatsApp y datos estructurados para que Google muestre el negocio correctamente. Lo entregué con un manual de administración escrito para alguien que no es técnico.',
      ],
      en: [
        'The client needed to move away from an old, slow site to something they could edit themselves without depending on anyone. I built it with Astro and Strapi as the CMS: the client edits content in the Strapi admin panel and the site is published as static HTML, so it loads instantly and server costs stay minimal.',
        'It includes a product and service catalogue, a blog, a quote form, WhatsApp integration and structured data so Google shows the business correctly. I handed it over with an admin manual written for a non-technical person.',
      ],
    },
    highlights: {
      es: [
        'Sitio estático en Astro con Strapi como CMS: rápido y con costo de servidor mínimo.',
        'Catálogo, blog y formulario de cotización administrables por el cliente desde Strapi.',
        'Entrega con manual de administración para una persona no técnica.',
        'Datos estructurados y buenas prácticas de SEO local.',
      ],
      en: [
        'Static Astro site with Strapi as the CMS: fast and with minimal server cost.',
        'Catalogue, blog and quote form the client manages from Strapi.',
        'Handed over with an admin manual written for a non-technical person.',
        'Structured data and local SEO best practices.',
      ],
    },
    stack: ['Astro', 'Strapi', 'JavaScript', 'HTML / CSS', 'SEO', 'Caddy'],
    links: [
      { kind: 'site', label: { es: 'Ver llantaseltoro.cl', en: 'Visit llantaseltoro.cl' }, href: 'https://llantaseltoro.cl' },
    ],
  },

  {
    slug: 'gailaggold-v1',
    title: 'GailagGold v1',
    category: 'production',
    period: { es: 'Primera generación', en: 'First generation' },
    role: {
      es: 'Diseño, desarrollo e integración de hardware',
      en: 'Design, development and hardware integration',
    },
    context: {
      es: 'Infinity Comercializadora de Metales Preciosos · Tolima, Colombia',
      en: 'Infinity Precious Metals Trading Company · Tolima, Colombia',
    },
    summary: {
      es: 'La primera versión del sistema de gestión, construida con Angular y Electron. Fue donde resolví por primera vez la integración con hardware y la impresión silenciosa.',
      en: 'The first version of the management system, built with Angular and Electron. This is where I first solved hardware integration and silent printing.',
    },
    body: {
      es: [
        'Antes de Flutter, el sistema de escritorio era una aplicación Angular empaquetada en Electron. Cubría compras, bodega, mineros, negocios, mobiliario, lingoteo, ingresos y egresos con analítica y cortes, informes y nómina.',
        'Fue la primera vez que tuve que hacer que un programa hablara con un lector de huellas y una tableta de firma. La solución —microservicios en Java para el SDK del huellero y la impresión, y en C# para el SDK de la tableta, invocados desde Electron— siguió funcionando en las versiones posteriores.',
        'Años después la reescribí por completo en Flutter. Mantengo esta versión en el portafolio porque documenta mi experiencia previa con Angular, Electron y JavaScript antes de pasar a Dart.',
      ],
      en: [
        'Before Flutter, the desktop system was an Angular application packaged in Electron. It covered purchasing, warehouse, miners, businesses, furniture, bar casting, income and expenses with analytics and period closes, reports and payroll.',
        'This was my first time making a program talk to a fingerprint reader and a signature pad. The solution — Java microservices for the reader SDK and printing, C# for the signature pad SDK, called from Electron — kept working in later versions.',
        'Years later I rewrote it entirely in Flutter. I keep this version in the portfolio because it documents my earlier experience with Angular, Electron and JavaScript before moving to Dart.',
      ],
    },
    highlights: {
      es: [
        'Primera integración con hardware: huellero DigitalPersona y tableta de firma mediante microservicios en Java y C#.',
        'Impresión silenciosa de tickets POS desde Electron.',
        'Módulo completo de nómina, informes y cortes de movimientos con analítica.',
        'Multiplataforma: Windows, macOS y Linux.',
      ],
      en: [
        'First hardware integration: DigitalPersona fingerprint reader and signature pad through Java and C# microservices.',
        'Silent POS ticket printing from Electron.',
        'Full payroll, reporting and movement period closes with analytics.',
        'Cross-platform: Windows, macOS and Linux.',
      ],
    },
    stack: ['Angular', 'TypeScript', 'Electron', 'Java', 'C#', 'Node.js', 'MariaDB'],
  },

  // ------------------------------------------------------------------
  // Laboratorio: dos experimentos con asistente de IA. Cada uno tiene su
  // propio modulo de Go, su propio esquema y su propio cliente.
  // ------------------------------------------------------------------

  {
    slug: 'syscafe-ia',
    title: 'SysCafé IA',
    category: 'lab',
    period: { es: '2026', en: '2026' },
    role: {
      es: 'Proyecto propio — arquitectura, servidor Go, escritorio y asistente',
      en: 'Personal project — architecture, Go server, desktop and assistant',
    },
    context: {
      es: 'ERP contable · servidor Go con pgx y RLS · se puede probar en el navegador',
      en: 'Accounting ERP · Go server with pgx and RLS · can be tried in the browser',
    },
    summary: {
      es: 'Reproducción moderna de un ERP contable colombiano: escritorio de ventanas MDI, comprobantes y catálogos, con un asistente que explica cada proceso y abre las ventanas por ti.',
      en: 'A modern reproduction of a Colombian accounting ERP: an MDI windowed desktop, vouchers and ledgers, with an assistant that explains each process and opens the windows for you.',
    },
    body: {
      es: [
        'SysCafé IA es una reproducción moderna de SysCafé Gestión, un ERP contable colombiano. Lo construí para medir hasta dónde llega un asistente cuando el sistema tiene cientos de procesos: el catálogo completo del menú —cada opción con su icono, su resumen y el enlace a la página del manual— vive en un solo archivo que alimenta la barra de menú, la paleta de búsqueda, las ventanas todavía en construcción y las respuestas del asistente.',
        'El escritorio es un MDI escrito desde cero: arrastrar, redimensionar con ocho asas, minimizar a la barra de tareas, ajuste a bordes y esquinas con vista previa, cascada, mosaico, atajos de teclado y modo pestañas automático en tablet y móvil. Cada ventana conserva su estado al cambiar de modo, porque su contenido vive bajo una clave global.',
        'El asistente no se limita a responder: explica cómo se hace cada proceso según el manual y abre la ventana que corresponde. Los usuarios siguen las clases del sistema original —administrador, normal, auxiliar, invitado— derivadas de los permisos, con restricciones por usuario y registro de auditoría. Está en línea ahora mismo.',
      ],
      en: [
        'SysCafé IA is a modern reproduction of SysCafé Gestión, a Colombian accounting ERP. I built it to find out how far an assistant can go when the system has hundreds of processes: the full menu catalogue — every option with its icon, its summary and a link to the manual page — lives in a single file that feeds the menu bar, the search palette, the windows still under construction, and the assistant\u2019s answers.',
        'The desktop is an MDI written from scratch: dragging, eight-handle resizing, minimise to the task bar, edge and corner snapping with a preview, cascade, tile, keyboard shortcuts and an automatic tab mode on tablet and mobile. Each window keeps its state when the mode changes, because its content lives under a global key.',
        'The assistant does not just answer: it explains how each process works according to the manual and opens the matching window. Users follow the original system\u2019s classes — administrator, standard, auxiliary, guest — derived from permissions, with per-user restrictions and an audit log. It is online right now.',
      ],
    },
    highlights: {
      es: [
        'Escritorio MDI propio: arrastrar, redimensionar, ajustar a bordes y esquinas, cascada, mosaico, atajos y modo pestañas.',
        'Catálogo único del menú, con enlace al manual, que alimenta el menú, la paleta de búsqueda y el asistente.',
        'El asistente explica cada proceso y abre la ventana que hace falta.',
        'Usuarios y permisos siguiendo las clases del sistema original, con auditoría de eventos.',
        'Dos marcas en el mismo binario, con modo de presentación.',
        'Pruebas de servidor contra PostgreSQL real y pruebas de interfaz en Flutter.',
      ],
      en: [
        'Its own MDI desktop: dragging, resizing, edge and corner snapping, cascade, tile, shortcuts and tab mode.',
        'A single menu catalogue, linked to the manual, feeding the menu, the search palette and the assistant.',
        'The assistant explains each process and opens the window that is needed.',
        'Users and permissions following the original system\u2019s classes, with an event audit log.',
        'Two brands in one binary, through a presentation mode.',
        'Server tests against a real PostgreSQL instance and Flutter UI tests.',
      ],
    },
    stack: ['Go', 'Echo', 'pgx', 'PostgreSQL', 'RLS', 'River', 'JWT', 'Flutter', 'MDI', 'trina_grid', 'pdfrx', 'LLM'],
    // La primera captura es la pantalla de ingreso; el escritorio dice más.
    cardCover: 1,
    links: [
      {
        kind: 'demo',
        label: { es: 'Probar el demo en vivo', en: 'Try the live demo' },
        href: 'https://nianadmin.anmaucol.org/',
      },
    ],
  },

  {
    slug: 'asistente-ia',
    title: 'Asistente IA',
    category: 'lab',
    period: { es: '2026', en: '2026' },
    role: {
      es: 'Proyecto propio — servidor Go, cliente Flutter y orquestador de IA',
      en: 'Personal project — Go server, Flutter client and AI orchestrator',
    },
    context: {
      es: 'Consola de gestión para comercio · servidor Go propio con pgx y RLS',
      en: 'Business management console for retail · its own Go server with pgx and RLS',
    },
    summary: {
      es: 'Consola de gestión para un negocio de barrio —punto de venta, inventario, compras, gastos y cartera— con un asistente que consulta y registra datos siempre con confirmación.',
      en: 'Management console for a small business — point of sale, inventory, purchases, expenses and receivables — with an assistant that queries and records data, always asking for confirmation.',
    },
    body: {
      es: [
        'Este experimento nace de una pregunta concreta: qué pasa cuando el asistente no vive en una pantalla aparte, sino dentro del sistema que la gente usa para facturar todos los días. El cliente es una consola de gestión para un comercio —punto de venta con carrito, inventario y kardex, compras con recepción de mercancía, gastos y cartera por tercero— y sobre todo eso trabaja el asistente.',
        'Destacan dos funciones. La primera es la lectura de facturas: se le entrega la foto, el PDF o el XML de un gasto y el sistema propone los datos para no digitar. La segunda es la disciplina de escritura: cuando el asistente necesita registrar algo, prepara la operación y la muestra en una tarjeta con los valores exactos; hasta que la persona no confirma, nada toca la base de datos.',
        'El servidor está organizado por módulos, cada uno con sus propias migraciones y sus propias herramientas expuestas al asistente. Todo va sobre PostgreSQL con seguridad a nivel de fila, así que una empresa nunca puede ver los datos de otra aunque el SQL lo genere el modelo. El cliente corre en escritorio, web y móvil desde el mismo código.',
      ],
      en: [
        'This experiment comes from a specific question: what happens when the assistant does not live on a separate screen, but inside the system people use to invoice every day. The client is a management console for a shop — point of sale with a cart, inventory and stock ledger, purchases with goods receiving, expenses and customer balances — and the assistant works on top of all of it.',
        'Two features stand out. The first is invoice reading: hand it a photo, a PDF or the XML of an expense and the system proposes the data so nobody has to type it. The second is write discipline: when the assistant needs to record something, it prepares the operation and shows it in a card with the exact values; until the person confirms, nothing touches the database.',
        'The server is organised by modules, each with its own migrations and its own tools exposed to the assistant. Everything sits on PostgreSQL with row-level security, so one company can never see another\u2019s data even when the model generates the SQL. The client runs on desktop, web and mobile from the same code.',
      ],
    },
    highlights: {
      es: [
        'Tablero con KPIs, tendencia de 14 días y alertas calculadas en el servidor.',
        'Punto de venta, inventario con kardex, compras con recepción y cartera por tercero.',
        'Lectura automática de facturas de gasto desde foto, PDF o XML.',
        'Terceros con detección de duplicados y fusión de registros.',
        'Asistente con herramientas por módulo y tarjetas de confirmación antes de escribir.',
        'Un solo código para escritorio, web y móvil.',
      ],
      en: [
        'Dashboard with KPIs, a 14-day trend and alerts computed on the server.',
        'Point of sale, inventory with stock ledger, purchases with receiving, and customer balances.',
        'Automatic reading of expense invoices from a photo, a PDF or XML.',
        'Third parties with duplicate detection and record merging.',
        'Assistant with per-module tools and confirmation cards before any write.',
        'One codebase for desktop, web and mobile.',
      ],
    },
    stack: ['Go', 'Echo', 'pgx', 'PostgreSQL', 'RLS', 'River', 'Argon2id', 'JWT', 'Flutter', 'GetX', 'fl_chart', 'LLM'],
  },
];

/* --------------------------------------------------------------------------
   Capturas por proyecto
   -------------------------------------------------------------------------- */

export const GROUP = {
  overview: { es: 'El sistema', en: 'The system' },
  assistant: { es: 'El asistente en acción', en: 'The assistant at work' },
  pos: { es: 'Punto de venta y tablero', en: 'Point of sale and dashboard' },
  reports: { es: 'Contabilidad, lotes y reportes', en: 'Accounting, batches and reports' },
  desktop: { es: 'Escritorio y multiempresa', en: 'Desktop and multi-tenant' },
} as const;

export const shots: Record<string, Shot[]> = {
  gailaggold: [
    shot('infinity-escritorio/02-menu.png', {
      es: 'Menú principal de GailagGold con los quince módulos de la operación',
      en: 'GailagGold main menu with the operation\u2019s fifteen modules',
    }),
    shot('infinity-escritorio/03-compra.png', {
      es: 'Registro de compra de oro: ley, gramos, finos y total a pagar',
      en: 'Gold purchase entry: purity, grams, fine grams and total payable',
    }),
    shot('infinity-escritorio/04-lingoteo.png', {
      es: 'Lingoteo: lotes con certificado de peso y pureza',
      en: 'Bar casting: batches with weight and purity certificates',
    }),
    shot('infinity-escritorio/05-contabilidad.png', {
      es: 'Contabilidad: ingresos, egresos y cierres',
      en: 'Accounting: income, expenses and period closes',
    }),
    shot('infinity-escritorio/01-login.png', {
      es: 'Ingreso al sistema con número de documento',
      en: 'Sign-in with document number',
    }),
  ],

  pricelock: [
    shot('pricelock/01-precios.png', {
      es: 'Precio por gramo en vivo y estado de apertura del mercado',
      en: 'Live price per gram and market open status',
    }),
    shot('pricelock/02-metales.png', {
      es: 'Selección de metal: oro, plata, platino, paladio y rodio',
      en: 'Metal selection: gold, silver, platinum, palladium and rhodium',
    }),
    shot('pricelock/05-compra.png', {
      es: 'Registro de compra con cálculo automático del total',
      en: 'Purchase entry with automatic total calculation',
    }),
    shot('pricelock/04-anuncios.png', {
      es: 'Anuncios de compra y venta que congelan el precio',
      en: 'Buy and sell listings that lock the price',
    }),
    shot('pricelock/06-disponibilidad.png', {
      es: 'Disponibilidad horaria de la comercializadora',
      en: 'The trading company\u2019s opening hours',
    }),
    shot('pricelock/03-menu.png', {
      es: 'Menú de la aplicación',
      en: 'Application menu',
    }),
  ],

  infinityapp: [
    shot('infinityapp/01-precios.png', {
      es: 'Precio del oro y del dólar en tiempo real',
      en: 'Real-time gold price and exchange rate',
    }),
    shot('infinityapp/02-calculadora.png', {
      es: 'Calculadora de compra según ley y porcentaje',
      en: 'Purchase calculator based on purity and percentage',
    }),
  ],

  llantaseltoro: [
    shot('llantaseltoro/01-escritorio.png', {
      es: 'Portada del sitio de Llantas El Toro en escritorio',
      en: 'Llantas El Toro homepage on desktop',
    }),
    shot('llantaseltoro/02-movil.png', {
      es: 'La misma portada en un teléfono',
      en: 'The same homepage on a phone',
    }),
  ],

  'gailaggold-v1': [
    shot('gailaggold-v1/02-analisis-movimientos.png', {
      es: 'Análisis de movimientos con cortes por período',
      en: 'Movement analytics with period closes',
    }),
    shot('gailaggold-v1/03-registros.png', {
      es: 'Registro de datos maestros',
      en: 'Master data entry',
    }),
    shot('gailaggold-v1/01-login.png', {
      es: 'Ingreso a la versión en Angular + Electron',
      en: 'Sign-in for the Angular + Electron version',
    }),
  ],

  /* --- SysCafé IA: el ERP contable con escritorio MDI --- */
  'syscafe-ia': [
    shot(
      'syscafe-ia/00-demo-en-vivo.png',
      {
        es: 'Pantalla de ingreso de la versión publicada en el navegador',
        en: 'Sign-in screen of the version published on the web',
      },
      {
        es: 'La marca que se ve aquí es Nian Admin, la otra marca de la misma aplicación.',
        en: 'The brand shown here is Nian Admin, the other brand for the same application.',
      },
    ),
    shot(
      'syscafe-ia/02-escritorio.png',
      {
        es: 'Escritorio con ventanas MDI: tablero del período, novedades y barra de accesos',
        en: 'Desktop with MDI windows: period dashboard, notices and shortcut bar',
      },
      undefined,
      GROUP.desktop,
    ),
    shot(
      'syscafe-ia/03-factura.png',
      {
        es: 'Comprobante abierto como una ventana independiente, con su grilla de detalle',
        en: 'Voucher open as its own window, with its detail grid',
      },
      undefined,
      GROUP.desktop,
    ),
    shot(
      'syscafe-ia/01-login.png',
      { es: 'Ingreso con selección de empresa', en: 'Sign-in with company selection' },
      undefined,
      GROUP.desktop,
    ),
    shot(
      'syscafe-ia/04-asistente.png',
      {
        es: 'El asistente responde cómo se hace un proceso y enlaza la página del manual',
        en: 'The assistant explains how a process works and links the manual page',
      },
      undefined,
      GROUP.assistant,
    ),
    shot(
      'syscafe-ia/05-terceros.png',
      {
        es: '«Ábreme terceros»: el asistente abre la ventana por su cuenta',
        en: '\u201cOpen third parties for me\u201d: the assistant opens the window on its own',
      },
      undefined,
      GROUP.assistant,
    ),
  ],

  /* --- Asistente IA: consola de gestión para comercio --- */
  'asistente-ia': [
    shot(
      'asistente-ia/02-tablero.png',
      {
        es: 'Tablero con KPIs, tendencia de ventas de 14 días, cola de prioridades y metas',
        en: 'Dashboard with KPIs, a 14-day sales trend, a priority queue and targets',
      },
      undefined,
      GROUP.pos,
    ),
    shot(
      'asistente-ia/03-punto-de-venta.png',
      {
        es: 'Punto de venta con carrito y búsqueda de productos',
        en: 'Point of sale with cart and product search',
      },
      undefined,
      GROUP.pos,
    ),
    shot(
      'asistente-ia/04-asistente-ventas.png',
      {
        es: 'El asistente responde por las ventas de hoy comparando con ayer a la misma hora',
        en: 'The assistant reports today\u2019s sales, compared with yesterday at the same time',
      },
      undefined,
      GROUP.assistant,
    ),
    shot(
      'asistente-ia/05-asistente-inventario.png',
      {
        es: 'El asistente detecta inventario crítico sin que se lo pidan por nombre',
        en: 'The assistant surfaces critical stock without being told where to look',
      },
      undefined,
      GROUP.assistant,
    ),
    shot(
      'asistente-ia/06-asistente-orden.png',
      {
        es: 'Orden de compra preparada por el asistente, con tarjeta de confirmación antes de escribir',
        en: 'Purchase order prepared by the assistant, with a confirmation card before writing',
      },
      undefined,
      GROUP.assistant,
    ),
    shot(
      'asistente-ia/01-login.png',
      { es: 'Ingreso a la consola de gestión', en: 'Sign-in to the management console' },
      undefined,
      GROUP.overview,
    ),
  ],

  /* --- Nian Admin: panel de lingotes --- */
  'nian-admin': [
    shot('nian-admin/02-informe-general.png', {
      es: 'Informe general del período',
      en: 'General report for the period',
    }),
    shot('nian-admin/01-informe-diario.png', {
      es: 'Informe diario',
      en: 'Daily report',
    }),
    shot('nian-admin/03-lote.png', {
      es: 'Producción de lotes con certificado de peso y pureza, regalías e imágenes',
      en: 'Batch production with weight and purity certificates, royalties and images',
    }),
    shot('nian-admin/04-municipios.png', {
      es: 'Datos maestros: municipios de origen',
      en: 'Master data: municipalities of origin',
    }),
    shot('nian-admin/05-usuarios-grupos.png', {
      es: 'Usuarios con permisos por grupos',
      en: 'Users with group-based permissions',
    }),
  ],
};

export function getShots(slug: string): Shot[] {
  return shots[slug] ?? [];
}

/** Capturas de un grupo concreto (el grupo se compara por su texto en español). */
export function getShotsByGroup(slug: string, group: { es: string }): Shot[] {
  return (shots[slug] ?? []).filter((item) => item.group?.es === group.es);
}

/** La primera captura de cada proyecto hace de portada. */
export function getCover(slug: string): ImageMetadata | undefined {
  return shots[slug]?.[0]?.src;
}

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/** Proyectos del laboratorio de IA, en su propio bloque destacado. */
export const labProjects = projects.filter((p) => p.category === 'lab');

/** Proyectos de la grilla principal. */
export const gridProjects = projects.filter((p) => p.category !== 'lab');

export function projectPath(slug: string): string {
  return `proyectos/${slug}`;
}

export function translated<T extends Bilingual>(value: T, lang: Lang): string {
  return value[lang];
}
