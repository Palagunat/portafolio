# Portafolio — Paulo Andrés Laguna Tovar

Sitio de portafolio para búsqueda de empleo. Construido con **Astro**, en
español e inglés, y publicado como sitio estático.

**En línea:** https://palagunat.github.io/portafolio

---

## Qué hay aquí

| Carpeta | Qué es |
|---|---|
| `src/data/` | **Todo el contenido editable**: datos personales, proyectos, experiencia, textos en los dos idiomas. |
| `src/components/` | Las secciones del sitio (hero, proyectos, laboratorio, etc.). |
| `src/layouts/` | El armazón HTML: metadatos, SEO, navegación y pie. |
| `src/pages/` | Las rutas: `/` (español) y `/en/` (inglés), más el detalle de cada proyecto. |
| `src/styles/global.css` | El sistema de diseño: colores, tipografía, espaciados, animaciones. |
| `src/utils/url.ts` | Ayudas para construir rutas (respeta el `base` y el idioma). |
| `capturas/` | Las capturas de pantalla. **Es la única copia**: la usan el sitio y este README. |
| `public/` | Archivos servidos tal cual: CV en PDF, favicon, imagen para redes sociales. |

---

## Cómo editar el contenido

Casi todo se cambia en `src/data/`, sin tocar los componentes.

### `src/data/site.ts` — tus datos
Correo, ciudad, GitHub, LinkedIn, enlaces al CV y al demo en vivo.
Si dejas `linkedin` vacío, el enlace simplemente no se dibuja.

### `src/data/projects.ts` — los proyectos
Cada proyecto es un objeto con su resumen, sus párrafos, sus puntos clave y su
stack. La categoría (`production`, `own`, `freelance` o `lab`) decide dónde se
dibuja: en la grilla principal o en el laboratorio de IA, que tiene dos
experimentos independientes con servidor propio cada uno. Abajo está `shots`, el
catálogo de capturas: la primera de cada lista se usa como portada.

Para agregar una captura:
1. Copia el PNG a `capturas/<proyecto>/`.
2. Añádela a `shots` con su texto alternativo (obligatorio) y su pie de foto.
3. Si quieres agruparla en la galería, pásale uno de los grupos de `GROUP`.

Si la ruta de una imagen no existe, la compilación falla con un mensaje claro
en vez de publicar un hueco.

### `src/data/experience.ts` — la trayectoria
Los puestos, en el orden en que quieres que aparezcan. El que tenga
`featured: true` se dibuja con el tratamiento dorado y la etiqueta
«Experiencia principal».

### `src/data/i18n.ts` — los textos de la interfaz
Todo lo que se lee en pantalla: títulos de sección, botones, navegación.
El tipo del español define la forma del inglés, así que si agregas una frase en
uno y te olvidas del otro, `npm run check` te avisa.

---

## Trabajar en local

```bash
npm install
npm run dev      # http://localhost:4321/portafolio
```

Otros comandos:

```bash
npm run build    # compila a dist/
npm run preview  # sirve dist/ para revisarlo
npm run check    # revisa tipos y errores en los .astro
```

---

## Publicar

El sitio se publica en la rama `gh-pages`, que GitHub Pages sirve directamente.

```bash
npm run deploy     # compila y sube dist/ a la rama gh-pages
```

Eso es todo. Cada vez que cambies algo, `npm run deploy` y en un minuto está en
línea. Queda en `https://palagunat.github.io/portafolio`.

### Publicación automática (opcional)

El repositorio incluye un flujo de GitHub Actions listo en
`.github/deploy-workflow.yml`, pero está **fuera** de `.github/workflows/` a
propósito: GitHub exige el permiso `workflow` en el token para poder subir
archivos a esa carpeta. Para activarlo, una sola vez:

```bash
gh auth refresh -s workflow
mkdir -p .github/workflows
git mv .github/deploy-workflow.yml .github/workflows/deploy.yml
git commit -m "Activar publicación automática" && git push
```

Y después, en el repositorio: **Settings → Pages → Build and deployment →
Source: GitHub Actions**. Desde ahí, cada push a `main` publica solo.

### Dominio propio

Por ejemplo `https://portafolio.anmaucol.org`.

1. En el repositorio: **Settings → Secrets and variables → Actions → Variables**
   y crea dos variables:
   - `SITE_URL` = `https://portafolio.anmaucol.org`
   - `BASE_PATH` = `/`
2. En el DNS, un registro `CNAME` que apunte `portafolio` a `palagunat.github.io`.
3. Escribe el dominio en **Settings → Pages → Custom domain** (esto crea el
   archivo `CNAME` automáticamente para que el dominio no se pierda).

Para compilar con dominio propio sin usar GitHub Actions:

```bash
SITE_URL=https://portafolio.anmaucol.org BASE_PATH=/ npm run build
```

El `canonical`, el sitemap y `robots.txt` se generan solos con el dominio
correcto, así que no hay que editar ningún archivo.

---

## Decisiones que conviene conocer

- **Sin rastreadores ni cookies.** El sitio no carga scripts de terceros; las
  tipografías (Fraunces, Inter y JetBrains Mono) se sirven desde el propio
  dominio, no desde Google Fonts.
- **Oscuro y dorado.** El sitio usa la misma paleta que las capturas, para que
  se lean como una sola obra.
- **Las capturas se optimizan al compilar.** Los PNG originales de `capturas/`
  se convierten a WebP en varios tamaños. Nunca se publican los originales.
- **El CV descargable son los PDF que ya usas** (`public/cv/`). Son los mismos
  que envías a los reclutadores, así que el sitio y las postulaciones siempre
  dicen lo mismo. Si actualizas un CV, reemplaza el PDF en esa carpeta.
- **Los idiomas son simétricos.** El español vive en `/` y el inglés en `/en/`.
  El selector calcula la ruta equivalente solo.

---

## Aviso legal

Las capturas se publican con fines de portafolio y contienen datos de prueba.
Las marcas, el código fuente y los datos de cada aplicación pertenecen a sus
respectivos propietarios. El código de los proyectos **no** se publica.
