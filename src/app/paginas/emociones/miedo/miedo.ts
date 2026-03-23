import { Component, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-miedo',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './miedo.html',
  styleUrls: ['./miedo.css']
})
export class Miedo implements AfterViewInit, OnDestroy {

fraseSeleccionada: string = '';

  abrirFrase(frase: string) {
  this.fraseSeleccionada = frase;
  }

  cerrarFrase() {
  this.fraseSeleccionada = '';
  }


  constructor() {
    document.body.classList.add('pagina-miedo'); // 👈 agrega clase al entrar
  }

  ngOnDestroy() {
    document.body.classList.remove('pagina-miedo'); // 👈 quita clase al salir
  }

  @ViewChild('canvasLluvia') canvasRef!: ElementRef<HTMLCanvasElement>;
  @ViewChild('audioFondo') audioRef!: ElementRef<HTMLAudioElement>;

  mensaje: string = '';

  comentarios = [
    { usuario: 'Jimy', texto: 'Hoy alguien me siguió 😰', tiempo: 'Hace 2 minutos' },
    { usuario: 'Sven', texto: 'Tengo pesadillas no puedo dormir 😨', tiempo: 'Hace 10 minutos' }
  ];

 frases = [
    'El miedo es una emoción primitiva que nos ha acompañado desde el inicio de la humanidad. Aprender a reconocerlo es el primer paso para no dejar que nos paralice.',
    'Sentir miedo no te hace débil, te hace humano. La valentía no es la ausencia del miedo, sino la decisión de seguir adelante a pesar de él.',
    'No estás solo en tu miedo. Millones de personas sienten lo mismo que tú. Compartirlo con alguien de confianza puede aliviar una gran carga.',
    'Respira profundo y recuerda: el miedo vive en el futuro, pero tú vives en el presente. Trae tu mente al aquí y al ahora.',
    'Hablar de tu miedo es el primer paso para superarlo. Lo que no se nombra, no se puede enfrentar. Dale voz a lo que sientes.'
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
        ctx.fillText("👻", e.x, e.y);
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
    audio.play().catch(() => console.log("Autoplay bloqueado"));
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