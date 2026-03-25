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

  navScrolled  = false;
  menuAbierto  = false;
  searchFocus  = false;
  scrollPct    = 0;

  /* ── Mapa de palabras clave → ruta ── */
  private readonly mapaEmociones: { palabras: string[], ruta: string }[] = [
    { palabras: ['alegria', 'alegría', 'alegre', 'feliz', 'felicidad', 'contento', 'contenta', 'felicidad'], ruta: 'alegria' },
    { palabras: ['tristeza', 'triste', 'tristé', 'llorando', 'llorar', 'melancolía', 'melancolia'], ruta: 'tristeza' },
    { palabras: ['nostalgia', 'nostálgico', 'nostalgico', 'recuerdo', 'pasado', 'añoranza'], ruta: 'nostalgia' },
    { palabras: ['miedo', 'miédos', 'asustado', 'asustada', 'terror', 'pánico', 'panico', 'temor'], ruta: 'miedo' },
    { palabras: ['ira', 'enojo', 'enojado', 'enojada', 'rabia', 'furia', 'furioso', 'molesto', 'molesta'], ruta: 'ira' },
    { palabras: ['sorpresa', 'sorprendido', 'sorprendida', 'inesperado', 'asombro', 'asombrado'], ruta: 'sorpresa' },
    { palabras: ['calma', 'calmado', 'calmada', 'tranquilo', 'tranquila', 'paz', 'sereno', 'serena'], ruta: 'calma' },
    { palabras: ['amor', 'amoroso', 'amorosa', 'enamorado', 'enamorada', 'querer', 'cariño'], ruta: 'amor' },
    { palabras: ['confianza', 'confiado', 'confiada', 'seguro', 'segura', 'valiente', 'seguridad'], ruta: 'confianza' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void { this.calcular(); }

  @HostListener('window:scroll')
  onScroll(): void { this.calcular(); }

  private calcular(): void {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    this.navScrolled = y > 40;
    this.scrollPct   = h > 0 ? Math.round((y / h) * 100) : 0;
  }

  toggleMenu(): void { this.menuAbierto = !this.menuAbierto; }

  buscar(e: Event): void {
    e.preventDefault();
    const input = document.getElementById('navSearch') as HTMLInputElement;
    const q = input?.value?.trim().toLowerCase() ?? '';
    if (!q) return;

    // Normalizar texto — quitar acentos para comparar
    const normalizar = (txt: string) =>
      txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

    const qNorm = normalizar(q);

    // Buscar coincidencia en el mapa
    const encontrado = this.mapaEmociones.find(em =>
      em.palabras.some(p => normalizar(p).includes(qNorm) || qNorm.includes(normalizar(p)))
    );

    if (encontrado) {
      input.value = '';
      this.router.navigate(['/emociones', encontrado.ruta]);
    } else {
      // Si no encuentra coincidencia exacta busca parcial en el nombre de la ruta
      const parcial = this.mapaEmociones.find(em =>
        em.ruta.includes(qNorm) || qNorm.includes(em.ruta)
      );
      if (parcial) {
        input.value = '';
        this.router.navigate(['/emociones', parcial.ruta]);
      } else {
        // No encontró nada — puedes mostrar un mensaje o redirigir al inicio
        input.style.borderColor = '#c9922a';
        setTimeout(() => input.style.borderColor = '', 1500);
      }
    }
  }
}