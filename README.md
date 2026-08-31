# Landing RIU

Maquetación de una landing de RIU a partir de un wireframe de Figma.

Tiene un header con el logo, un hero y una grilla de destinos que se arma
desde `src/app/data/destinations.json`.

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
