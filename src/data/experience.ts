import type { Bilingual, BilingualList } from './projects';

export interface Job {
  company: string;
  role: Bilingual;
  period: Bilingual;
  place: Bilingual;
  summary: Bilingual;
  bullets: BilingualList;
  stack: string[];
  /** El rol que más peso tiene: se dibuja con tratamiento dorado. */
  featured?: boolean;
}

/**
 * Van primero los roles con más peso y luego el resto en orden cronológico
 * inverso. Las fechas están a la vista de cada entrada, así que la línea de
 * tiempo se lee igual.
 */
export const jobs: Job[] = [
  {
    company: 'Infinity Tolima Resources S.A.S.',
    featured: true,
    role: {
      es: 'Cofundador y Desarrollador Full-Stack Líder',
      en: 'Co-founder and Lead Full-Stack Engineer',
    },
    period: { es: '2021 – 2026', en: '2021 – 2026' },
    place: { es: 'Tolima, Colombia', en: 'Tolima, Colombia' },
    summary: {
      es: 'Plataforma de trazabilidad para oro de minería de subsistencia: conecta a los mineros de la asociación ANMAUCOL con la comercializadora, y permite a quien compra un lingote de inversión consultar su origen completo por código QR.',
      en: 'Traceability platform for gold from small-scale mining: it connects the miners of the ANMAUCOL association with the trading company, and lets anyone who buys an investment bar look up its full origin through a QR code.',
    },
    bullets: {
      es: [
        'Fui el único desarrollador de todo el ecosistema: arquitectura, backend, apps, web, servidores en producción y soporte.',
        'Migré el backend de Python (Django REST Framework) a Go y reduje los costos de servidor alrededor de un 60 %.',
        'Ajusté la infraestructura en DigitalOcean a la demanda: un clúster de Kubernetes en el pico de uso y después un servidor Ubuntu con Go bajo systemd.',
        'Construí GailagGold, el sistema de escritorio que sostiene la operación completa, con lectores de huella, tableta de firma e impresoras integradas.',
        'Desarrollé PriceLock e InfinityApp, las apps móviles que los mineros usan a diario, optimizadas para teléfonos de gama baja.',
        'Resultados: entre 500 y 1.000 mineros registrados de varios municipios en el punto más alto, y más de 3.800 lingotes con trazabilidad completa.',
      ],
      en: [
        'I was the sole developer of the whole ecosystem: architecture, backend, apps, web, production servers and support.',
        'I migrated the backend from Python (Django REST Framework) to Go and cut server costs by around 60%.',
        'I scaled the DigitalOcean infrastructure to demand: a Kubernetes cluster at peak usage, then a single Ubuntu server running Go under systemd.',
        'I built GailagGold, the desktop system running the entire operation, with integrated fingerprint readers, signature pad and printers.',
        'I developed PriceLock and InfinityApp, the mobile apps miners use daily, tuned for low-end phones.',
        'Results: 500–1,000 registered miners across several municipalities at peak, and 3,800+ fully traceable gold bars.',
      ],
    },
    stack: ['Go', 'Flutter', 'Python', 'Django', 'PostgreSQL', 'Kubernetes', 'Docker', 'Linux', 'DigitalOcean', 'Java'],
  },

  {
    company: 'Trabajo independiente',
    role: {
      es: 'Desarrollador Full-Stack y fundador',
      en: 'Full-Stack Developer and founder',
    },
    period: { es: '2026 – actualidad', en: '2026 – present' },
    place: { es: 'Remoto', en: 'Remote' },
    summary: {
      es: 'Etapa actual: proyectos propios y clientes directos, con foco en integrar asistentes de IA a sistemas de gestión reales.',
      en: 'The current chapter: my own projects and direct clients, focused on bringing AI assistants into real business systems.',
    },
    bullets: {
      es: [
        'Dos experimentos propios con asistente de IA integrado: un ERP contable con escritorio de ventanas y una consola de gestión para comercio. Cada uno con su servidor en Go y PostgreSQL aislado por empresa.',
        'Nian Admin: panel de lingotes para Nian Capital, con certificado de peso y pureza por lote y contabilidad.',
        'Llantas El Toro (Chile): sitio web corporativo en Astro con Strapi como CMS, entregado con manual de administración para el cliente.',
      ],
      en: [
        'Two personal experiments with a built-in AI assistant: an accounting ERP with a windowed desktop, and a retail management console. Each with its own Go server and PostgreSQL isolated per company.',
        'Nian Admin: gold-bar admin panel for Nian Capital, with weight and purity certificates per batch, plus accounting.',
        'Llantas El Toro (Chile): corporate website built with Astro and Strapi as the CMS, handed over with an admin manual for the client.',
      ],
    },
    stack: ['Go', 'PostgreSQL', 'RLS', 'Flutter', 'Astro', 'Strapi', 'LLM', 'Docker'],
  },

  {
    company: 'DBPoblacional',
    role: { es: 'Fundador y Desarrollador', en: 'Founder and Developer' },
    period: { es: '2014 – 2017', en: '2014 – 2017' },
    place: { es: 'Tolima, Colombia', en: 'Tolima, Colombia' },
    summary: {
      es: 'Software de caracterización de víctimas del conflicto armado, creado como alternativa al sistema oficial, que era lento e inestable.',
      en: 'Survey software to profile victims of Colombia\u2019s armed conflict, built as a faster alternative to the official system, which was slow and unstable.',
    },
    bullets: {
      es: [
        'Desarrollé en PHP un sistema online/offline que funcionaba en campo con un miniservidor y una red Wi-Fi local, sin depender de internet.',
        'Reduje la entrevista de más de 2 horas (175 preguntas del sistema oficial) a unos 30 minutos, con más de 350 preguntas.',
        'Lideré la ejecución de las caracterizaciones en campo usando el software; se hicieron 9 caracterizaciones oficiales.',
      ],
      en: [
        'I built an online/offline PHP system that ran in the field on a mini server and a local Wi-Fi network, with no internet needed.',
        'I cut interview time from over 2 hours (175 questions in the official system) to about 30 minutes, with 350+ questions.',
        'I led the field data collection using the software; 9 official surveys were completed with it.',
      ],
    },
    stack: ['PHP', 'Laravel', 'Angular', 'JavaScript', 'MySQL', 'Redes locales'],
  },
];
