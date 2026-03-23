
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

declare var bootstrap: any;

interface Emocion {
  id: number;
  titulo: string;
  emoji: string;
  imagen: string;
  alt: string;
  texto: string;
  detalle: string;
  tags?: string[];
  ruta: string;
}

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './principal.html',
  styleUrls: ['./principal.css']
})
export class Principal implements OnInit {

  /* ── Datos ── */
  emociones: Emocion[] = [
    {
      id: 1,
      titulo: 'Alegría',
      emoji: '😄',
      imagen: 'assets/images/Alegria.jpg',
      alt: 'Emoción Alegría',
      texto: 'Una chispa que nos impulsa a compartir y celebrar.',
      detalle: 'La alegría es una emoción positiva que surge cuando algo va bien o supera nuestras expectativas. Nos motiva a conectarnos con otros y refuerza conductas beneficiosas.',
      tags: ['Positiva', 'Social', 'Energía'],
      ruta: 'alegria'
    },
    {
      id: 2,
      titulo: 'Tristeza',
      emoji: '😢',
      imagen: 'assets/images/Tristeza.jpg',
      alt: 'Emoción Tristeza',
      texto: 'Un espacio para reconocer lo que duele.',
      detalle: 'La tristeza nos invita a reflexionar sobre lo que valoramos. Es una emoción necesaria que permite procesar pérdidas y encontrar nuevos significados.',
      tags: ['Reflexiva', 'Introspectiva', 'Natural'],
      ruta: 'tristeza'
    },
    {
      id: 3,
      titulo: 'Nostalgia',
      emoji: '🌅',
      imagen: 'assets/images/Nostalgia.jpg',
      alt: 'Emoción Nostalgia',
      texto: 'Un viaje al pasado que nos conecta con recuerdos.',
      detalle: 'La nostalgia es un sentimiento agridulce que mezcla la alegría del recuerdo con la melancolía de lo que ya no está. Fortalece nuestra identidad.',
      tags: ['Agridulce', 'Memoria', 'Identidad'],
      ruta: 'nostalgia'
    },
    {
      id: 4,
      titulo: 'Miedo',
      emoji: '😨',
      imagen: 'assets/images/Miedo1.jpg',
      alt: 'Emoción Miedo',
      texto: 'Una señal que nos protege y prepara.',
      detalle: 'El miedo tiene una función evolutiva de protección. Nos alerta ante peligros reales o percibidos y activa nuestra respuesta de lucha o huida.',
      tags: ['Protectora', 'Instintiva', 'Alerta'],
      ruta: 'miedo'
    },
    {
      id: 5,
      titulo: 'Ira',
      emoji: '😠',
      imagen: 'assets/images/Ira.jpg',
      alt: 'Emoción Ira',
      texto: 'Energía intensa que nos impulsa a cuestionar.',
      detalle: 'La ira surge ante situaciones que percibimos como injustas o amenazantes. Bien canalizada puede ser un motor de cambio y establecimiento de límites.',
      tags: ['Intensa', 'Límites', 'Cambio'],
      ruta: 'ira'
    },
    {
      id: 6,
      titulo: 'Sorpresa',
      emoji: '😲',
      imagen: 'assets/images/Sorpresa.jpg',
      alt: 'Emoción Sorpresa',
      texto: 'Un momento inesperado que despierta curiosidad.',
      detalle: 'La sorpresa es una emoción neutral y breve que orienta nuestra atención hacia algo inesperado. Puede derivar en alegría, miedo u otras emociones según el contexto.',
      tags: ['Neutra', 'Curiosidad', 'Atención'],
      ruta: 'sorpresa'
    },
    {
      id: 7,
      titulo: 'Calma',
      emoji: '😌',
      imagen: 'assets/images/Calma.jpg',
      alt: 'Emoción Calma',
      texto: 'Un respiro que ayuda a ordenar pensamientos.',
      detalle: 'La calma permite claridad mental y toma de decisiones conscientes. Es el estado ideal para reflexionar, crear y conectar con uno mismo.',
      tags: ['Equilibrio', 'Claridad', 'Bienestar'],
      ruta: 'calma'
    },
    {
      id: 8,
      titulo: 'Amor',
      emoji: '🥰',
      imagen: 'assets/images/Amor.jpeg',
      alt: 'Emoción Amor',
      texto: 'La fuerza que nos conecta y nos invita a cuidar.',
      detalle: 'El amor fortalece vínculos y nos motiva a cuidar a otros y a nosotros mismos. Es una de las emociones más complejas y transformadoras.',
      tags: ['Vínculo', 'Cuidado', 'Conexión'],
      ruta: 'amor'
    },
    {
      id: 9,
      titulo: 'Confianza',
      emoji: '🦁',
      imagen: 'assets/images/Confianza.png',
      alt: 'Emoción Confianza',
      texto: 'Seguridad interior que permite avanzar.',
      detalle: 'La confianza nace del autoconocimiento y las experiencias pasadas exitosas. Nos permite enfrentar desafíos con mayor resiliencia y apertura.',
      tags: ['Seguridad', 'Resiliencia', 'Crecimiento'],
      ruta: 'confianza'
    },
  ];

  /* ── Búsqueda ── */
  textoBusqueda = '';
  emocionesFiltradas: Emocion[] = [];

  /* ── Paginación ── */
  paginaActual = 1;
  readonly cardsPorPagina = 3;

  /* ── Modal ── */
  emocionSeleccionada: Emocion | null = null;
  private modalRef: any = null;

  /* ── Ciclo de vida ── */
  ngOnInit(): void {
    this.emocionesFiltradas = [...this.emociones];
    this._bindModal();
  }

  /* ── Getters ── */
  get totalPaginas(): number {
    return Math.ceil(this.emocionesFiltradas.length / this.cardsPorPagina);
  }
  get emocionesPaginadas(): Emocion[] {
    const s = (this.paginaActual - 1) * this.cardsPorPagina;
    return this.emocionesFiltradas.slice(s, s + this.cardsPorPagina);
  }
  get paginasArray(): unknown[] { return Array(this.totalPaginas); }

  /* ── Búsqueda ── */
  filtrarEmociones(): void {
    const q = this.textoBusqueda.toLowerCase().trim();
    this.emocionesFiltradas = q
      ? this.emociones.filter(e =>
          e.titulo.toLowerCase().includes(q) ||
          e.texto.toLowerCase().includes(q) ||
          e.tags?.some(t => t.toLowerCase().includes(q)))
      : [...this.emociones];
    this.paginaActual = 1;
  }

  /* ── Paginación ── */
  cambiarPagina(n: number): void {
    if (n < 1 || n > this.totalPaginas) return;
    this.paginaActual = n;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ── Modal ── */
  abrirModal(em: Emocion): void {
    this.emocionSeleccionada = em;

    const el = document.getElementById('emocionModal');
    if (!el) return;

    if (this.modalRef) {
      this.modalRef.dispose();
      this.modalRef = null;
    }

    setTimeout(() => {
      this.modalRef = new bootstrap.Modal(el, {
        backdrop: true,
        keyboard: true
      });
      this.modalRef.show();
    }, 0);
  }

  private _bindModal(): void {
    document.getElementById('emocionModal')
      ?.addEventListener('hidden.bs.modal', () => {
        this.emocionSeleccionada = null;
        if (this.modalRef) {
          this.modalRef.dispose();
          this.modalRef = null;
        }
      });
  }
}