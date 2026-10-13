#!/usr/bin/env bash
#
# Publica el sitio en la rama `gh-pages`, que es la que sirve GitHub Pages.
#
#   npm run deploy
#
# Crea una rama huérfana nueva con el contenido de `dist/` y la fuerza al
# remoto, así la rama siempre queda idéntica al resultado de la compilación,
# sin arrastrar archivos de publicaciones anteriores.
#
# `.nojekyll` es obligatorio: sin él GitHub pasa el contenido por Jekyll y
# borra la carpeta `_astro/`, donde van el CSS y todas las imágenes.

set -euo pipefail

cd "$(dirname "$0")/.."

BRANCH="${DEPLOY_BRANCH:-gh-pages}"
REMOTE="${DEPLOY_REMOTE:-origin}"

# Se leen antes de entrar en dist/, porque allí ya no hay repositorio.
REMOTE_URL="$(git remote get-url "$REMOTE")"
GIT_NAME="$(git config user.name)"
GIT_EMAIL="$(git config user.email)"

echo "→ Compilando"
npm run build

if [[ ! -f dist/index.html ]]; then
  echo "La compilación no generó dist/index.html. Abortando." >&2
  exit 1
fi

if [[ ! -f dist/.nojekyll ]]; then
  echo "Falta dist/.nojekyll: GitHub borraría la carpeta _astro/." >&2
  exit 1
fi

echo "→ Publicando en la rama $BRANCH"

cd dist

# Repositorio de una publicación anterior, si quedó alguno.
rm -rf .git

git init -q
git checkout -q -b "$BRANCH"
git add -A
git -c "user.name=$GIT_NAME" -c "user.email=$GIT_EMAIL" \
    commit -q -m "Publicar sitio ($(date '+%Y-%m-%d %H:%M'))"
git push -q -f "$REMOTE_URL" "$BRANCH"

rm -rf .git

echo "→ Listo. GitHub Pages lo publica en un minuto:"
echo "  https://palagunat.github.io/portafolio/"
