import type { Lang } from './site';

/**
 * Todo el texto de la interfaz, en español e inglés.
 * El tipo `Dict` se deduce del español, así que el inglés tiene que tener
 * exactamente la misma forma: si agregas una frase en uno, TypeScript te
 * avisa si falta en el otro.
 */

const es = {
  meta: {
    title: 'Paulo Laguna — Desarrollador Full-Stack | Go · Flutter',
    description:
      'Desarrollador full-stack con más de 10 años llevando productos a producción: backend en Go, apps en Flutter e infraestructura. Disponible para trabajo remoto.',
    ogAlt: 'Paulo Laguna — Desarrollador Full-Stack',
  },

  nav: {
    label: 'Navegación principal',
    about: 'Sobre mí',
    projects: 'Proyectos',
    lab: 'IA',
    experience: 'Experiencia',
    skills: 'Habilidades',
    contact: 'Contacto',
    langOther: 'EN',
    switchLang: 'Ver el sitio en inglés',
    cv: 'CV',
    menu: 'Abrir o cerrar el menú',
  },

  hero: {
    status: 'Disponible para trabajo remoto',
    role: 'Desarrollador Full-Stack',
    stack: 'Go · Flutter · Python',
    titleLines: ['Desarrollo productos completos,'],
    titleAccent: 'del backend a producción.',
    lead: 'Más de 10 años construyendo software de punta a punta: APIs en Go, apps móviles y de escritorio en Flutter, sistemas que operan sin internet e infraestructura en producción. Diseñé y operé la plataforma tecnológica de una comercializadora de oro, y reduje cerca de un 60 % sus costos de servidor al migrar el backend de Python a Go.',
    ctaCv: 'Descargar CV',
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Hablemos',
    stats: [
      { value: '10+', label: 'años de experiencia' },
      { value: '3.800+', label: 'lingotes con trazabilidad completa' },
      { value: '500–1.000', label: 'mineros registrados en el pico de uso' },
      { value: '−60 %', label: 'en costos de servidor tras migrar a Go' },
    ],
  },

  about: {
    eyebrow: 'Sobre mí',
    title: 'Diez años llevando software a producción.',
    paragraphs: [
      'Empecé hace más de una década con PHP, Laravel y Angular. Desde hace seis años trabajo con Flutter y Django como stack principal, y hace tres incorporé Go para backends de alto rendimiento.',
      'Mi proyecto más grande fue una plataforma de trazabilidad de oro para minería de subsistencia en el Tolima. Conectaba a cientos de mineros de la asociación ANMAUCOL con la comercializadora y permitía consultar por código QR el origen de cada lingote. Incluía un sistema de escritorio integrado con lector de huellas, tableta de firma e impresoras POS, apps móviles para teléfonos de gama baja y un backend que migré de Python a Go.',
      'Como único desarrollador de mis propias empresas cubrí el ciclo completo: arquitectura, modelado de datos, interfaces, despliegue y soporte. Hoy busco aportar esa experiencia en un equipo. Vengo de trabajar directamente con el cliente, así que documentar y comunicar con claridad ya es parte de mi forma de trabajar.',
    ],
    factsTitle: 'De un vistazo',
    facts: [
      { label: 'Ubicación', value: 'Ibagué, Tolima, Colombia' },
      { label: 'Modalidad', value: 'Remoto · Híbrido' },
      { label: 'Idiomas', value: 'Español nativo · Inglés profesional (B2)' },
      { label: 'Enfoque', value: 'Backend Go · Full-stack · Móvil Flutter' },
      { label: 'Formación', value: 'Ingeniería de Sistemas (ITFIP) · Negocios Internacionales (UT)' },
    ],
    focusTitle: 'Lo que busco',
    focus:
      'Un rol remoto de backend (Go), full-stack o móvil (Flutter), en un equipo con revisión de código y buenas prácticas de ingeniería.',
  },

  projects: {
    eyebrow: 'Trabajo',
    title: 'Proyectos',
    lead: 'Sistemas en operación, entregas a clientes y proyectos propios. El código es privado o pertenece a los clientes, por lo que publico capturas y notas técnicas en lugar de repositorios.',
    filters: {
      all: 'Todos',
      production: 'En operación',
      own: 'Proyecto propio',
      freelance: 'Clientes',
      lab: 'Laboratorio',
    },
    viewProject: 'Ver el detalle',
    viewDemo: 'Probar el demo',
    viewSite: 'Ver el sitio',
    openImage: 'Ampliar imagen',
    highlights: 'Puntos clave',
    stack: 'Stack',
    gallery: 'Pantallas',
    backToProjects: 'Volver a proyectos',
    nextProject: 'Siguiente proyecto',
    contextTitle: 'Contexto',
    roleLabel: 'Rol',
    yearLabel: 'Año',
    privateNote:
      'El código de este proyecto es privado o pertenece al cliente. Las pantallas se publican con fines de portafolio.',
  },

  lab: {
    eyebrow: 'Laboratorio',
    title: 'Experimentos con IA',
    lead: 'Dos experimentos sobre una misma pregunta: cómo integrar un asistente de IA en un sistema de gestión real. No es un chatbot aparte: el asistente usa herramientas para consultar y registrar datos, explica procesos y abre ventanas, y siempre pide confirmación antes de escribir.',
    liveLabel: 'en línea',
    liveText: 'Es el mismo cliente de escritorio, compilado a web.',
    liveCta: 'Abrir el demo en vivo',
    liveNote: 'El ingreso al sistema requiere las credenciales de la demostración.',
    howItWorks: 'Arquitectura compartida',
    experiments: [
      {
        title: 'Asistente con herramientas',
        text: 'Cada módulo expone acciones al asistente. Este elige cuál usar y, antes de escribir en la base de datos, muestra una tarjeta de confirmación con los datos exactos.',
      },
      {
        title: 'Aislamiento por empresa',
        text: 'PostgreSQL con seguridad a nivel de fila: cada consulta queda acotada a su empresa, incluso cuando el SQL lo genera el modelo.',
      },
      {
        title: 'Bases de código independientes',
        text: 'Cada experimento tiene su propio módulo de Go, esquema, migraciones y cliente. Comparten el enfoque, no el código.',
      },
    ],
  },

  experience: {
    eyebrow: 'Trayectoria',
    title: 'Experiencia',
    lead: 'Cinco años a cargo de toda la tecnología de una empresa, precedidos por años de software para clientes propios.',
    mainLabel: 'Experiencia principal',
    present: 'actualidad',
    techLabel: 'Tecnologías',
  },

  skills: {
    eyebrow: 'Herramientas',
    title: 'Habilidades',
    lead: 'Tecnologías que he usado en proyectos reales.',
    groups: [
      { title: 'Backend', items: ['Go (Echo, Ent, GORM)', 'Python (Django, DRF)', 'PHP (Laravel)', 'Node.js', 'APIs REST', 'JWT'] },
      { title: 'Móvil y escritorio', items: ['Flutter / Dart', 'React Native', 'Electron', 'Flutter Web'] },
      { title: 'Frontend', items: ['JavaScript / TypeScript', 'Astro', 'Angular', 'HTML / CSS'] },
      { title: 'Bases de datos', items: ['PostgreSQL', 'SQLite', 'MySQL', 'MariaDB', 'Firebase (Firestore)'] },
      { title: 'Infraestructura', items: ['Linux', 'Docker', 'Kubernetes', 'systemd', 'DigitalOcean', 'AWS', 'Azure', 'Redes locales offline'] },
      { title: 'Hardware e integración', items: ['Lectores de huella', 'Tabletas de firma', 'Impresoras POS', 'Cámaras', 'Java para SDKs'] },
    ],
    otherTitle: 'También',
    other: 'Java y C# para integrar SDK de hardware. GDScript y C# en desarrollo de videojuegos, la afición de la que vienen mis bases en programación de bajo nivel.',
  },

  education: {
    eyebrow: 'Formación',
    title: 'Formación',
    studies: [
      {
        title: 'Ingeniería de Sistemas',
        place: 'ITFIP — El Espinal, Tolima',
        period: '2017 – 2021',
        note: 'Siete semestres cursados en el programa por ciclos. Título obtenido: Técnico Profesional en Sistemas.',
      },
      {
        title: 'Negocios Internacionales',
        place: 'Universidad del Tolima',
        period: '2013 – 2017',
        note: 'Siete semestres cursados. De aquí vienen mi inglés profesional y el hábito de entender el negocio antes que el requerimiento.',
      },
    ],
    languagesTitle: 'Idiomas',
    languages: [
      { name: 'Español', level: 'Nativo' },
      { name: 'Inglés', level: 'Profesional (B2)' },
    ],
    languagesNote:
      'He traducido contratos comerciales y trabajado con clientes y socios internacionales.',
  },

  contact: {
    eyebrow: 'Contacto',
    title: 'Hablemos.',
    lead: 'Busco un rol remoto de backend, full-stack o móvil. Cuéntame sobre el proyecto o el equipo; respondo el mismo día.',
    email: 'Escríbeme',
    github: 'Ver GitHub',
    cv: 'Descargar CV',
    availability: 'Disponibilidad inmediata · Remoto · UTC−5',
  },

  footer: {
    rights: 'Paulo Andrés Laguna Tovar',
    builtWith: 'Hecho con Astro. Sin rastreadores ni cookies.',
    legal:
      'Las capturas se publican con fines de portafolio. Las marcas, el código y los datos de cada aplicación pertenecen a sus respectivos propietarios.',
    top: 'Volver arriba',
  },

  a11y: {
    skip: 'Saltar al contenido',
    external: '(se abre en una pestaña nueva)',
    close: 'Cerrar',
    previous: 'Imagen anterior',
    next: 'Imagen siguiente',
  },
};

export type Dict = typeof es;

const en: Dict = {
  meta: {
    title: 'Paulo Laguna — Full-Stack Engineer | Go · Flutter',
    description:
      'Full-stack engineer with 10+ years shipping products to production: Go backends, Flutter apps and infrastructure. Available for remote work.',
    ogAlt: 'Paulo Laguna — Full-Stack Engineer',
  },

  nav: {
    label: 'Main navigation',
    about: 'About',
    projects: 'Projects',
    lab: 'AI',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    langOther: 'ES',
    switchLang: 'View the site in Spanish',
    cv: 'Résumé',
    menu: 'Toggle menu',
  },

  hero: {
    status: 'Available for remote work',
    role: 'Full-Stack Engineer',
    stack: 'Go · Flutter · Python',
    titleLines: ['I build complete products,'],
    titleAccent: 'from backend to production.',
    lead: 'Over 10 years building software end to end: Go APIs, Flutter apps for mobile and desktop, systems that run offline, and production infrastructure. I designed and ran the technology platform of a gold trading company, and cut its server costs by nearly 60% by migrating the backend from Python to Go.',
    ctaCv: 'Download résumé',
    ctaProjects: 'See projects',
    ctaContact: 'Let\u2019s talk',
    stats: [
      { value: '10+', label: 'years of experience' },
      { value: '3,800+', label: 'gold bars with full traceability' },
      { value: '500–1,000', label: 'miners registered at peak usage' },
      { value: '−60%', label: 'server costs after migrating to Go' },
    ],
  },

  about: {
    eyebrow: 'About',
    title: 'Ten years shipping software to production.',
    paragraphs: [
      'I started over a decade ago with PHP, Laravel and Angular. For the past six years Flutter and Django have been my main stack, and three years ago I added Go for high-performance backends.',
      'My largest project was a gold traceability platform for small-scale mining in Tolima, Colombia. It connected hundreds of miners from the ANMAUCOL association with the trading company, and let buyers look up the origin of each bar through a QR code. It included a desktop system integrated with a fingerprint reader, signature pad and POS printers, mobile apps for low-end phones, and a backend I migrated from Python to Go.',
      'As the only developer at my own companies, I covered the full cycle: architecture, data modelling, interfaces, deployment and support. I now want to bring that experience to a team. I come from working directly with clients, so clear documentation and communication are already part of how I work.',
    ],
    factsTitle: 'At a glance',
    facts: [
      { label: 'Location', value: 'Ibagué, Tolima, Colombia' },
      { label: 'Work setup', value: 'Remote · Hybrid' },
      { label: 'Languages', value: 'Spanish native · English professional (B2)' },
      { label: 'Focus', value: 'Go backend · Full-stack · Flutter mobile' },
      { label: 'Education', value: 'Systems Engineering (ITFIP) · International Business (UT)' },
    ],
    focusTitle: 'What I am looking for',
    focus:
      'A remote backend (Go), full-stack or mobile (Flutter) role, on a team with code review and sound engineering practices.',
  },

  projects: {
    eyebrow: 'Work',
    title: 'Projects',
    lead: 'Systems in production, client deliveries and personal projects. The code is private or belongs to clients, so I publish screenshots and technical notes instead of repositories.',
    filters: {
      all: 'All',
      production: 'In production',
      own: 'Personal project',
      freelance: 'Clients',
      lab: 'Lab',
    },
    viewProject: 'View details',
    viewDemo: 'Try the demo',
    viewSite: 'Visit the site',
    openImage: 'Enlarge image',
    highlights: 'Key points',
    stack: 'Stack',
    gallery: 'Screens',
    backToProjects: 'Back to projects',
    nextProject: 'Next project',
    contextTitle: 'Context',
    roleLabel: 'Role',
    yearLabel: 'Year',
    privateNote:
      'This project\u2019s source code is private or owned by the client. Screenshots are published for portfolio purposes.',
  },

  lab: {
    eyebrow: 'Lab',
    title: 'AI experiments',
    lead: 'Two experiments on one question: how to integrate an AI assistant into a real business system. Not a separate chatbot: the assistant uses tools to query and record data, explains workflows and opens windows, and always asks for confirmation before it writes.',
    liveLabel: 'online',
    liveText: 'The same desktop client, compiled to web.',
    liveCta: 'Open the live demo',
    liveNote: 'Signing in requires the demo credentials.',
    howItWorks: 'Shared architecture',
    experiments: [
      {
        title: 'An assistant with tools',
        text: 'Every module exposes actions to the assistant. It picks which one to use and, before writing to the database, shows a confirmation card with the exact data.',
      },
      {
        title: 'Multi-tenant isolation',
        text: 'PostgreSQL with row-level security: every query stays scoped to its tenant, even when the model generates the SQL.',
      },
      {
        title: 'Independent codebases',
        text: 'Each experiment has its own Go module, schema, migrations and client. They share the approach, not the code.',
      },
    ],
  },

  experience: {
    eyebrow: 'Track record',
    title: 'Experience',
    lead: 'Five years in charge of all technology at one company, preceded by years of building software for my own clients.',
    mainLabel: 'Main role',
    present: 'present',
    techLabel: 'Technologies',
  },

  skills: {
    eyebrow: 'Toolkit',
    title: 'Skills',
    lead: 'Technologies I have used on real projects.',
    groups: [
      { title: 'Backend', items: ['Go (Echo, Ent, GORM)', 'Python (Django, DRF)', 'PHP (Laravel)', 'Node.js', 'REST APIs', 'JWT'] },
      { title: 'Mobile & desktop', items: ['Flutter / Dart', 'React Native', 'Electron', 'Flutter Web'] },
      { title: 'Frontend', items: ['JavaScript / TypeScript', 'Astro', 'Angular', 'HTML / CSS'] },
      { title: 'Databases', items: ['PostgreSQL', 'SQLite', 'MySQL', 'MariaDB', 'Firebase (Firestore)'] },
      { title: 'Infrastructure', items: ['Linux', 'Docker', 'Kubernetes', 'systemd', 'DigitalOcean', 'AWS', 'Azure', 'Offline local networks'] },
      { title: 'Hardware & integration', items: ['Fingerprint readers', 'Signature pads', 'POS printers', 'Cameras', 'Java for SDKs'] },
    ],
    otherTitle: 'Also',
    other: 'Java and C# for hardware SDK integrations. GDScript and C# for game development, the hobby my low-level programming foundations come from.',
  },

  education: {
    eyebrow: 'Education',
    title: 'Education',
    studies: [
      {
        title: 'Systems Engineering',
        place: 'ITFIP — El Espinal, Tolima, Colombia',
        period: '2017 – 2021',
        note: 'Seven semesters completed in the cycle-based programme. Degree earned: Professional Technician in Systems.',
      },
      {
        title: 'International Business',
        place: 'Universidad del Tolima',
        period: '2013 – 2017',
        note: 'Seven semesters completed. The source of my professional English and the habit of understanding the business before the requirement.',
      },
    ],
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'Professional (B2)' },
    ],
    languagesNote:
      'I have translated commercial contracts and worked with international clients and partners.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Let\u2019s talk.',
    lead: 'I am looking for a remote backend, full-stack or mobile role. Tell me about the project or the team; I reply the same day.',
    email: 'Email me',
    github: 'View GitHub',
    cv: 'Download résumé',
    availability: 'Available immediately · Remote · UTC−5',
  },

  footer: {
    rights: 'Paulo Andrés Laguna Tovar',
    builtWith: 'Built with Astro. No trackers, no cookies.',
    legal:
      'Screenshots are published for portfolio purposes. The trademarks, source code and data of each application belong to their respective owners.',
    top: 'Back to top',
  },

  a11y: {
    skip: 'Skip to content',
    external: '(opens in a new tab)',
    close: 'Close',
    previous: 'Previous image',
    next: 'Next image',
  },
};

export const ui: Record<Lang, Dict> = { es, en };
