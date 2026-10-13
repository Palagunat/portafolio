// Configuración de Astro.
//
// El sitio se puede publicar en dos destinos sin cambiar código:
//
//   1) GitHub Pages (por defecto)
//        https://palagunat.github.io/portafolio
//
//   2) Dominio propio (por ejemplo https://portafolio.anmaucol.org)
//        SITE_URL=https://portafolio.anmaucol.org BASE_PATH=/ npm run build
//
// Los valores por defecto se pueden escribir en un archivo .env
// (mira .env.example).

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const site = process.env.SITE_URL || 'https://palagunat.github.io';

// Astro normaliza `base` para que termine en "/" (o sea "/" cuando es la raíz).
const base = process.env.BASE_PATH || '/portafolio';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: {
    // El CSS completo pesa ~45 KB: incrustado evita una petición que
    // bloquea el primer pintado (≈1 s en móvil según Lighthouse).
    inlineStylesheets: 'always',
  },
  image: {
    // Las capturas vienen de apps de escritorio con fondo oscuro plano.
    // Un quality alto evita banding en los degradados.
    quality: 88,
  },
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      // El español vive en la raíz (`/`), el inglés en `/en/`.
      prefixDefaultLocale: false,
    },
  },
});
