import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Hoja {
  x: number;
  y: number;
  size: number;
  speed: number;
  angle: number;
  swing: number;
}

@Component({
  selector: 'app-nostalgia',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './nostalgia.html',
  styleUrls: ['./nostalgia.css'],
})
export class Nostalgia implements AfterViewInit, OnDestroy {
  @ViewChild('audioNostalgia') audioRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('canvasNostalgia') canvasRef!: ElementRef<HTMLCanvasElement>;

  volumen: number = 0.3;
  hojas: Hoja[] = [];
  numHojas = 40;

  private clickHandler!: () => void;
  private resizeHandler!: () => void;

  ngAfterViewInit(): void {
    this.iniciarAudio();
    this.iniciarCanvas();
  }

  iniciarAudio() {
    const audio = this.audioRef.nativeElement;
    audio.volume = this.volumen;

    this.clickHandler = () => {
      audio.play().catch(() => {});
    };

    document.addEventListener('click', this.clickHandler, { once: true });
  }

  iniciarCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Crear hojas iniciales
    for (let i = 0; i < this.numHojas; i++) {
      this.hojas.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 25 + 20,
        speed: Math.random() * 1.5 + 0.5,
        angle: Math.random() * 2 * Math.PI,
        swing: Math.random() * 0.05 + 0.02,
      });
    }

    const animar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.hojas.forEach((hoja) => {
        // Oscilación horizontal
        hoja.angle += hoja.swing;
        const offsetX = Math.sin(hoja.angle) * 15;

        ctx.font = `${hoja.size}px Arial`;
        ctx.fillText('🍁', hoja.x + offsetX, hoja.y);

        hoja.y += hoja.speed;
        if (hoja.y > canvas.height + hoja.size) {
          hoja.y = -hoja.size;
          hoja.x = Math.random() * canvas.width;
          hoja.angle = Math.random() * 2 * Math.PI;
        }
      });

      this.animFrameId = requestAnimationFrame(animar); 
    };

    this.animFrameId = requestAnimationFrame(animar); 

    this.resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', this.resizeHandler);
  }

  cambiarVolumen(event: any) {
    const nuevoVolumen = parseFloat(event.target.value);
    this.volumen = nuevoVolumen;
    if (this.audioRef) {
      this.audioRef.nativeElement.volume = nuevoVolumen;
    }
  }
  private animFrameId!: number;
  ngOnDestroy(): void {
    // Detener audio
    const audio = this.audioRef?.nativeElement;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Eliminar listeners
    document.removeEventListener('click', this.clickHandler);
    window.removeEventListener('resize', this.resizeHandler);

    // Detener animación del canvas
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
    }

    // Limpiar hojas/partículas
    this.hojas = [];
  }
}
