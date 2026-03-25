import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-enojo',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './enojo.html',
  styleUrls: ['./enojo.css'],
})
export class Enojo implements AfterViewInit, OnDestroy {
  comments: string[] = [];

  @ViewChild('canvasFuego') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('audioFuego') audioRef!: ElementRef<HTMLAudioElement>;

  elementos: any[] = [];
  numElementos = 40;

  private clickHandler!: () => void;
  private visibilityHandler!: () => void;
  private resizeHandler!: () => void;

  ngAfterViewInit(): void {
    this.iniciarCanvas();
    this.iniciarAudio();
  }

  iniciarAudio() {
    const audio = this.audioRef.nativeElement;
    audio.volume = this.volumen;

    this.clickHandler = () => {
      audio.play().catch(() => {});
    };

    document.addEventListener('click', this.clickHandler, { once: true });
  }
  volumen: number = 0.3;

  cambiarVolumen(event: any) {
    const nuevoVolumen = parseFloat(event.target.value);
    this.volumen = nuevoVolumen;

    if (this.audioRef) {
      this.audioRef.nativeElement.volume = nuevoVolumen;
    }
  }

  iniciarCanvas() {
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    for (let i = 0; i < this.numElementos; i++) {
      this.elementos.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 20 + 15,
        speed: Math.random() * 2 + 1,
      });
    }

    let ultimoTiempo = 0;

    const animar = (tiempoActual: number) => {
      const delta = tiempoActual - ultimoTiempo;

      if (delta > 16) {
        ultimoTiempo = tiempoActual;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.elementos.forEach((e) => {
          ctx.font = e.size + 'px Arial';
          ctx.fillText('🔥', e.x, e.y);
          e.y += e.speed;
          if (e.y > canvas.height) {
            e.y = -20;
            e.x = Math.random() * canvas.width;
          }
        });
      }

      requestAnimationFrame(animar);
    };

    requestAnimationFrame(animar);

    this.visibilityHandler = () => {
      if (document.visibilityState === 'visible') {
        ultimoTiempo = 0;
        requestAnimationFrame(animar);
      }
    };

    this.resizeHandler = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    document.addEventListener('visibilitychange', this.visibilityHandler);
    window.addEventListener('resize', this.resizeHandler);
  }

  ngOnDestroy(): void {
    const audio = this.audioRef?.nativeElement;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    document.removeEventListener('click', this.clickHandler);
    document.removeEventListener('visibilitychange', this.visibilityHandler);
    window.removeEventListener('resize', this.resizeHandler);
  }
}
