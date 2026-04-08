import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar implements OnInit {

  navScrolled   = false;
  menuAbierto   = false;
  searchFocus   = false;
  scrollPct     = 0;
  perfilAbierto = false;
  userEmail     = '';

  private readonly mapaEmociones: { palabras: string[], ruta: string }[] = [
    { palabras: ['alegria', 'alegría', 'alegre', 'feliz', 'felicidad', 'contento', 'contenta'], ruta: 'alegria' },
    { palabras: ['tristeza', 'triste', 'llorando', 'llorar', 'melancolía', 'melancolia'], ruta: 'tristeza' },
    { palabras: ['nostalgia', 'nostálgico', 'nostalgico', 'recuerdo', 'pasado', 'añoranza'], ruta: 'nostalgia' },
    { palabras: ['miedo', 'asustado', 'asustada', 'terror', 'pánico', 'panico', 'temor'], ruta: 'miedo' },
    { palabras: ['ira', 'enojo', 'enojado', 'enojada', 'rabia', 'furia', 'furioso', 'molesto'], ruta: 'ira' },
    { palabras: ['sorpresa', 'sorprendido', 'sorprendida', 'inesperado', 'asombro'], ruta: 'sorpresa' },
    { palabras: ['calma', 'calmado', 'tranquilo', 'tranquila', 'paz', 'sereno', 'serena'], ruta: 'calma' },
    { palabras: ['amor', 'amoroso', 'enamorado', 'enamorada', 'querer', 'cariño'], ruta: 'amor' },
    { palabras: ['confianza', 'confiado', 'seguro', 'segura', 'valiente', 'seguridad'], ruta: 'confianza' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.calcular();
  }

  @HostListener('window:scroll')
  onScroll(): void { this.calcular(); }

  @HostListener('document:click', ['$event'])
  onClickFuera(e: Event): void {
    const target = e.target as HTMLElement;
    if (!target.closest('.perfil-wrap')) {
      this.perfilAbierto = false;
    }
  }

  private calcular(): void {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    this.navScrolled = y > 40;
    this.scrollPct   = h > 0 ? Math.round((y / h) * 100) : 0;
  }

  toggleMenu(): void { this.menuAbierto = !this.menuAbierto; }

  togglePerfil(): void {
    this.perfilAbierto = !this.perfilAbierto;
    if (this.perfilAbierto) {
      this.userEmail = localStorage.getItem('userEmail') || 'usuario@gmail.com';
    }
  }

  cerrarSesion(): void {
    localStorage.removeItem('userEmail');
    this.perfilAbierto = false;
    this.router.navigate(['/']);
  }

  buscar(e: Event): void {
    e.preventDefault();
    const input = document.getElementById('navSearch') as HTMLInputElement;
    const q = input?.value?.trim().toLowerCase() ?? '';
    if (!q) return;

    const normalizar = (txt: string) =>
      txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    const qNorm = normalizar(q);

    const encontrado = this.mapaEmociones.find(em =>
      em.palabras.some(p => normalizar(p).includes(qNorm) || qNorm.includes(normalizar(p)))
    );

    if (encontrado) {
      input.value = '';
      this.router.navigate(['/emociones', encontrado.ruta]);
    } else {
      const parcial = this.mapaEmociones.find(em =>
        em.ruta.includes(qNorm) || qNorm.includes(em.ruta)
      );
      if (parcial) {
        input.value = '';
        this.router.navigate(['/emociones', parcial.ruta]);
      } else {
        input.style.borderColor = '#c9922a';
        setTimeout(() => input.style.borderColor = '', 1500);
      }
    }
  }
}