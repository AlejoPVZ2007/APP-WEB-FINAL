import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';  // Importa Router

// Declaramos Bootstrap JS global para usar modales
declare var bootstrap: any;

interface Emocion {
  id: number;
  titulo: string;
  emoji: string;
  imagen: string;
  alt: string;
  texto: string;
  detalle: string;
}

@Component({
  selector: 'app-principal',
  standalone: true,                 // Componente standalone
  imports: [CommonModule, RouterModule], // Necesario para *ngFor y routerLink
  templateUrl: './principal.html',
  styleUrls: ['./principal.css']
})
export class Principal {
  emociones: Emocion[] = [
    { id: 1, titulo: 'Alegria', emoji: '😄', imagen: 'assets/images/Foto1.jpg', alt: 'Emoción Alegría', texto: 'Una chispa que nos impulsa a compartir y celebrar.', detalle: 'La alegría es positiva...' },
    { id: 2, titulo: 'Tristeza', emoji: '😢', imagen: 'assets/images/Nostalgia1.jpeg', alt: 'Emoción Tristeza', texto: 'Un espacio para reconocer lo que duele.', detalle: 'La tristeza invita a reflexionar...' },
    { id: 3, titulo: 'Nostalgia', emoji: '🌅', imagen: 'assets/images/Miedo1.jpg', alt: 'Emoción Nostalgia', texto: 'Un viaje al pasado que nos conecta con recuerdos.', detalle: 'La nostalgia es un sentimiento agridulce...' },
    { id: 4, titulo: 'Miedo', emoji: '😨', imagen: 'assets/images/Foto1.jpg', alt: 'Emoción Miedo', texto: 'Una señal que nos protege y prepara.', detalle: 'El miedo es de protección evolutiva...' },
    { id: 5, titulo: 'Ira', emoji: '😠', imagen: 'assets/images/Miedo1.jpg', alt: 'Emoción Ira', texto: 'Energía intensa que nos impulsa a cuestionar.', detalle: 'La ira surge ante injusticias...' },
    { id: 6, titulo: 'Sorpresa', emoji: '😲', imagen: 'assets/images/Nostalgia1.jpeg', alt: 'Emoción Sorpresa', texto: 'Un momento inesperado que despierta curiosidad.', detalle: 'La sorpresa es neutral...' },
    { id: 7, titulo: 'Calma', emoji: '😌', imagen: 'assets/images/Foto1.jpg', alt: 'Emoción Calma', texto: 'Un respiro que ayuda a ordenar pensamientos.', detalle: 'La calma permite claridad...' },
    { id: 8, titulo: 'Amor', emoji: '🥰', imagen: 'assets/images/Nostalgia1.jpeg', alt: 'Emoción Amor', texto: 'La fuerza que nos conecta y nos invita a cuidar.', detalle: 'El amor fortalece vínculos...' },
    { id: 9, titulo: 'Confianza', emoji: '🦁', imagen: 'assets/images/Miedo1.jpg', alt: 'Emoción Confianza', texto: 'Seguridad interior que permite avanzar.', detalle: 'La confianza nace del autoconocimiento...' }
  ];

  // Paginación
  paginaActual = 1;
  cardsPorPagina = 3;

  get totalPaginas() {
    return Math.ceil(this.emociones.length / this.cardsPorPagina);
  }

  get emocionesPaginadas() {
    const start = (this.paginaActual - 1) * this.cardsPorPagina;
    return this.emociones.slice(start, start + this.cardsPorPagina);
  }

  cambiarPagina(nueva: number) {
    if (nueva < 1 || nueva > this.totalPaginas) return;
    this.paginaActual = nueva;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Modal
  emocionSeleccionada: Emocion | null = null;

  constructor(private router: Router) {}  // Inyecta Router

  abrirModal(em: Emocion) {
    this.emocionSeleccionada = em;

    const modalEl = document.getElementById('emocionModal');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }
  redirigirPagina() {
    // Cerrar el modal antes de redirigir
    const modalEl = document.getElementById('emocionModal');
    if (modalEl) {
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();  // Cierra el modal
    }
    if (this.emocionSeleccionada) {
      const emocionTitulo = this.emocionSeleccionada.titulo.toLowerCase();
      this.router.navigate([`/emociones/${emocionTitulo}`]);
    } else {
      console.log('No se ha seleccionado ninguna emoción');
    }
  }
}