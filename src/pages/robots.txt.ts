import type { APIRoute } from 'astro';

/**
 * robots.txt generado en tiempo de compilación para que el sitemap siempre
 * apunte al dominio correcto, sea GitHub Pages o un dominio propio.
 */
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(`${base}/sitemap-index.xml`, site).href;

  const body = `User-agent: *
Allow: /

Sitemap: ${sitemap}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
