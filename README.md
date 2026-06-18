# Mejoras realizadas sobre el proyecto Academia React

El proyecto original como base contaba con toda la logica y los componentes concentrados en un unico archivo App.jsx

Como mejora, se realizo una refactorizacion completa aplicando buenas practicas.

### Se separo la interfaz en componentes reutilizables:
- Header
- CursoCard

### Se crearon paginas independientes:
- Inicio
- Cursos
- MisInscripciones

### Se incorporo:

- Navegacion mediante rutas ('/' - '/cursos' - '/mis-inscripciones').

- Zustand (Se remplazo el manejo de estado local mediante 'UseState' por un store global utilizando Zustand).

- Persistencia de datos (incorporacion de middleware 'persist' de Zustand).

- Validacion de inscripciones (Se agregó una validación para evitar que un usuario pueda inscribirse varias veces al mismo curso).

- Buscador de cursos (Se implementó un buscador dinámico que permite filtrar cursos por nombre en tiempo real).

## Mejora de estructura

ACADEMIAREACT

├── public
│   ├── favicon.svg
│   └── icons.svg
│
├── src
│   ├── assets
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   │
│   ├── components
│   │   ├── CursoCard.jsx
│   │   └── Header.jsx
│   │
│   ├── pages
│   │   ├── Cursos.jsx
│   │   ├── Inicio.jsx
│   │   └── MisInscripciones.jsx
│   │
│   ├── store
│   │   └── useStore.js
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js

## Iniciar el servidor:
- Instalar las dependencias: npm install

- Iniciar el servidor de desarrollo: npm run dev
