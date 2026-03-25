import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tristeza',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tristeza.html',
  styleUrls: ['./tristeza.css'],
})
export class Tristeza implements AfterViewInit {
  comments: string[] = [];

  @ViewChild('canvasLluvia') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('audioLluvia') audioRef!: ElementRef<HTMLAudioElement>; //audio

  elementos: any[] = [];
  numElementos = 40;
  // REFERENCIAS PARA ELIMINAR EL AUDIO EN OTRAS PAGINAS
  private clickHandler!: () => void;
  private visibilityHandler!: () => void;
  private resizeHandler!: () => void;

  ngAfterViewInit(): void {
    this.iniciarCanvas();
    this.iniciarAudio();
  }
  /*AUDIO */
  volumen: number = 0.3;

  cambiarVolumen(event: any) {
    const nuevoVolumen = parseFloat(event.target.value);
    this.volumen = nuevoVolumen;

    if (this.audioRef) {
      this.audioRef.nativeElement.volume = nuevoVolumen;
    }
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
          ctx.font = e.size + 'px Arial';
          ctx.fillText('💧', e.x, e.y);
          e.y += e.speed;
          if (e.y > canvas.height) {
            e.y = -20;
            e.x = Math.random() * canvas.width;
          }
        });
      }

      requestAnimationFrame(animar); // 👈 dentro de animar, una sola vez
    };

    requestAnimationFrame(animar); // 👈 arranca la animación

    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        ultimoTiempo = 0;
        requestAnimationFrame(animar);
      }
    });

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }
  // 👈 se ejecuta al salir de la página
  ngOnDestroy(): void {
    const audio = this.audioRef?.nativeElement;
    if (audio) {
      audio.pause();
      audio.currentTime = 0; // 👈 reinicia el audio
    }

    document.removeEventListener('click', this.clickHandler);
    document.removeEventListener('visibilitychange', this.visibilityHandler);
    window.removeEventListener('resize', this.resizeHandler);
  }
}
