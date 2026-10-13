/**
 * Datos de contacto y enlaces del sitio.
 * Es lo único que hay que tocar si cambia un correo o una URL.
 */

export type Lang = 'es' | 'en';

export const LANGUAGES: Lang[] = ['es', 'en'];

export const site = {
  name: 'Paulo Andrés Laguna Tovar',
  shortName: 'Paulo Laguna',
  initials: 'PL',

  role: 'Desarrollador Full-Stack',

  email: 'andres.laguna71@gmail.com',

  location: 'Ibagué, Tolima, Colombia',

  github: 'https://github.com/Palagunat',
  githubHandle: 'Palagunat',

  /** Déjalo vacío mientras la cuenta no esté lista y el enlace no se dibuja. */
  linkedin: '',

  /**
   * Demo en vivo de SysCafé IA (Flutter web). La aplicación se presenta con
   * la marca Nian Admin, su otra marca.
   */
  liveDemo: 'https://nianadmin.anmaucol.org/',

  /** Sitio entregado a cliente. */
  clientSite: 'https://llantaseltoro.cl',

  cv: {
    es: 'cv/paulo-laguna-cv-es.pdf',
    en: 'cv/paulo-laguna-cv-en.pdf',
  },
} as const;
