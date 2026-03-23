import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { FormsModule } from '@angular/forms'; // 👈 IMPORTANTE
import { CommonModule } from '@angular/common';   // 👈 AGREGAR
import { RouterModule } from '@angular/router';   // 👈 AGREGAR

@Component({
  selector: 'app-alegria',
  standalone: true, // 👈 AGREGA ESTO
  imports: [FormsModule, CommonModule, RouterModule], // 👈 AGREGA ESTO
  templateUrl: './alegria.html',
  styleUrls: ['./alegria.css']
})
export class Alegria implements AfterViewInit, OnDestroy {

    constructor() {
    document.body.classList.add('pagina-alegria'); // 👈 agrega clase al entrar
  }

  ngOnDestroy() {
    document.body.classList.remove('pagina-alegria'); // 👈 quita clase al salir
  }

  @ViewChild('canvasLluvia') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('audioFondo') audioRef!: ElementRef<HTMLAudioElement>;

  mensaje: string = '';

  comentarios = [
    { usuario: 'Usuario123', texto: 'Hoy tuve un día maravilloso! 🌟', tiempo: 'Hace 2 minutos' },
    { usuario: 'Ana', texto: 'Me encantó el evento de ayer! 🎉', tiempo: 'Hace 10 minutos' }
  ];

  frases = [
    "La alegría es una emoción, no una debilidad.",
    "Sentir alegría es humano, compartirlo es bondad.",
    "La alegría se multiplica cuando se comparte.",
    "La alegría es contagiosa, compártela.",
    "Hoy es un día para celebrar."
  ];

  elementos: any[] = [];
  numElementos = 40;

  ngAfterViewInit() {
    this.iniciarCanvas();
    this.iniciarAudio();
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
        size: Math.random() * 30 + 20,
        speed: Math.random() * 1 + 0.5
      });
    }

    const animar = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      this.elementos.forEach(e => {
        ctx.font = e.size + "px Arial";
        ctx.fillText("⭐", e.x, e.y);

        e.y += e.speed;

        if (e.y > canvas.height) {
          e.y = -20;
          e.x = Math.random() * canvas.width;
        }
      });

      requestAnimationFrame(animar);
    };

    animar();

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  iniciarAudio() {
    const audio = this.audioRef.nativeElement;
    audio.volume = 0.2;

    audio.play().catch(() => {
      console.log("Autoplay bloqueado");
    });
  }

  publicar(event: Event) {
    event.preventDefault();

    if (!this.mensaje.trim()) return;

    this.comentarios.unshift({
      usuario: 'Usuario',
      texto: this.mensaje,
      tiempo: 'Ahora'
    });

    this.mensaje = '';
  }
}