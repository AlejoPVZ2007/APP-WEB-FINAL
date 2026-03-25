import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tristeza',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tristeza.html',
  styleUrls: ['./tristeza.css'],
})
export class Tristeza implements AfterViewInit, OnDestroy {
  comments: string[] = [];

  @ViewChild('canvasLluvia') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('audioLluvia') audioRef!: ElementRef<HTMLAudioElement>;

  elementos: any[] = [];
  numElementos = 40;

  // Audio
  volumen: number = 0.3;

  // Handlers para listeners
  private clickHandler!: () => void;
  private visibilityHandler!: () => void;
  private resizeHandler!: () => void;

  // ID de animación para cancelarla
  private animFrameId!: number;

  ngAfterViewInit(): void {
    this.iniciarAudio();
    this.iniciarCanvas();
  }

  /** Inicializa el audio */
  iniciarAudio() {
    const audio = this.audioRef.nativeElement;
    audio.volume = this.volumen;

    this.clickHandler = () => {
      audio.play().catch(() => {});
    };

    document.addEventListener('click', this.clickHandler, { once: true });
  }

  /** Cambiar volumen desde el input */
  cambiarVolumen(event: any) {
    const nuevoVolumen = parseFloat(event.target.value);
    this.volumen = nuevoVolumen;

    if (this.audioRef) {
      this.audioRef.nativeElement.volume = nuevoVolumen;
    }
  }

  /** Inicializa el canvas con gotas */
  iniciarCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Crear gotas iniciales
    for (let i = 0; i < this.numElementos; i++) {
      this.elementos.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 15,
        speed: Math.random() * 1 + 0.5,
      });
    }

    let ultimoTiempo = 0;

    const animar = (tiempoActual: number) => {
      const delta = tiempoActual - ultimoTiempo;

      if (delta > 16) {
        ultimoTiempo = tiempoActual;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.elementos.forEach((e) => {
          ctx.font = `${e.size}px Arial`;
          ctx.fillText('💧', e.x, e.y);
          e.y += e.speed;

          if (e.y > canvas.height) {
            e.y = -20;
            e.x = Math.random() * canvas.width;
          }
        });
      }

      this.animFrameId = requestAnimationFrame(animar);
    };

    // Iniciar animación
    this.animFrameId = requestAnimationFrame(animar);

    // Handlers de resize y visibilidad
    this.resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    this.visibilityHandler = () => {
      if (document.visibilityState === 'visible') {
        ultimoTiempo = 0;
        requestAnimationFrame(animar);
      }
    };

    window.addEventListener('resize', this.resizeHandler);
    document.addEventListener('visibilitychange', this.visibilityHandler);
  }

  /** Limpiar todo al salir */
  ngOnDestroy(): void {
    // Detener audio
    const audio = this.audioRef?.nativeElement;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Eliminar listeners
    document.removeEventListener('click', this.clickHandler);
    document.removeEventListener('visibilitychange', this.visibilityHandler);
    window.removeEventListener('resize', this.resizeHandler);

    // Cancelar animación
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }

    // Limpiar elementos para liberar memoria
    this.elementos = [];
  }
}