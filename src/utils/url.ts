import type { Lang } from '../data/site';

/**
 * El `base` configurado en astro.config.mjs, normalizado para que siempre
 * termine en "/". Astro no lo garantiza (con base `/portafolio` puede venir
 * sin la barra final) y sin ella se generan rutas rotas del tipo
 * `/portafoliocv/archivo.pdf`.
 */
function baseUrl(): string {
  const raw = import.meta.env.BASE_URL;
  return raw.endsWith('/') ? raw : `${raw}/`;
}

/** Envuelve una ruta con el `base` configurado. */
export function withBase(path = ''): string {
  return `${baseUrl()}${path.replace(/^\/+/, '')}`;
}

/** Ruta de una página teniendo en cuenta el idioma (es en la raíz, en en /en/). */
export function localePath(lang: Lang, path = ''): string {
  const clean = path.replace(/^\/+/, '');
  return lang === 'es' ? withBase(clean) : withBase(`en/${clean}`);
}

/**
 * Dada la ruta actual, devuelve la misma página en el otro idioma.
 * Los dos árboles son simétricos: /proyectos/x  <->  /en/proyectos/x
 */
export function alternatePath(currentPath: string, currentLang: Lang): string {
  const base = baseUrl();

  // Quita el base para trabajar con una ruta relativa.
  let path = currentPath;
  if (base !== '/' && path.startsWith(base)) {
    path = path.slice(base.length);
  }
  path = path.replace(/^\/+/, '');

  if (currentLang === 'es') {
    return withBase(`en/${path}`);
  }
  return withBase(path.replace(/^en\/?/, ''));
}
