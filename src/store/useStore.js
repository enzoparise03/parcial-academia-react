import { create } from "zustand";
import { persist } from 'zustand/middleware';

const cursosIniciales = [
  {
    id: 1,
    titulo: "React desde cero",
    categoria: "Frontend",
    precio: 18000,
    nivel: "Inicial",
    cupos: 80,
    descripcion: "Aprendé componentes, props, estado y eventos.",
  },
  {
    id: 2,
    titulo: "Node.js práctico",
    categoria: "Backend",
    precio: 22000,
    nivel: "Intermedio",
    cupos: 60,
    descripcion: "Creá APIs simples usando Express y JavaScript.",
  },
  {
    id: 3,
    titulo: "MongoDB para proyectos web",
    categoria: "Base de datos",
    precio: 20000,
    nivel: "Intermedio",
    cupos: 45,
    descripcion: "Modelá y consultá datos para aplicaciones reales.",
  },
  {
    id: 4,
    titulo: "Diseño web con Bootstrap",
    categoria: "Diseño UI",
    precio: 15000,
    nivel: "Inicial",
    cupos: 90,
    descripcion: "Armá interfaces modernas y responsive rápidamente.",
  },
];


export const useStore = create(
  persist(
    (set, get) => ({
      cursos: cursosIniciales,
      inscripciones: [],

      inscribirse: (curso) => {
        const { inscripciones } = get();
        const yaInscrito = inscripciones.some(item => item.id === curso.id);
        
        if (!yaInscrito) {
          set({ inscripciones: [...inscripciones, curso] });
        }
      },

      quitarInscripcion: (indexCurso) => {
        const { inscripciones } = get();
        const nuevasInscripciones = inscripciones.filter((_, index) => index !== indexCurso);
        set({ inscripciones: nuevasInscripciones });
      },

      limpiarInscripciones: () => {
        set({ inscripciones: [] });
      },

      get totalAPagar() {
        return get().inscripciones.reduce((acumulador, curso) => acumulador + curso.precio, 0);
      }
    }),
    {
      name: 'academia-storage', 
      partialize: (state) => ({ inscripciones: state.inscripciones }),
    }
  )
);