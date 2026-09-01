# Landing RIU

Maquetación de una landing de RIU a partir de un wireframe de Figma, en tres
secciones: un hero, una grilla de destinos y una de experiencias que en
pantallas chicas es un carrusel.

## Stack

- Angular 22, componentes standalone, sin zone.js
- SSR con prerenderizado, sobre Express
- Tailwind 4
- TypeScript 6

## Requisitos

Node `^22.22.3 || ^24.15.0 || >=26.0.0`.

## Cómo levantarlo

```
npm install
npm start
```

Queda en http://localhost:4200.

## Build

```
npm run build
```

La salida va a `dist/riu-landing`. Para servirla con el server de SSR:

```
npm run serve:ssr:riu-landing
```

El despliegue en Netlify sale del `netlify.toml`: comando, directorio a
publicar, versión de Node y el runtime de Angular.

## Estructura

```
src/app/layout/      header y footer
src/app/sections/    hero, destinations, experiences
src/app/ui/          button, las cards y los iconos
src/app/data/        el contenido de las cards, en json
```

## Decisiones

**Breakpoints.** Se usan los de Tailwind y no los anchos de los frames del
Figma: de 1809, 768 y 460, solo 768 es un breakpoint real, los otros dos son
tamaños de lienzo. El layout da las medidas del diseño en los tres anchos.

**Imágenes.** Cada foto se sirve en WebP, en tres anchos las apaisadas y dos
las verticales, con `srcset` y un `sizes` calculado sobre el ancho real que
ocupa cada hueco en cada breakpoint.

**Accesibilidad.** Un solo `h1`, secciones con nombre accesible, las grillas de
cards como listas, iconos con `aria-hidden`, foco visible en todo lo
interactivo y las animaciones apagadas con `prefers-reduced-motion`.
