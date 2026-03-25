import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // 👈 para *ngFor
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calma',
  standalone: true,  // 👈 IMPORTANTE
  imports: [CommonModule, FormsModule], // 👈 AQUÍ VA LA SOLUCIÓN
  templateUrl: './calma.html',
  styleUrls: ['./calma.css']
})
export class Calma implements OnInit {

  mensaje: string = '';

  comentarios = [
    {
      usuario: 'Usuario123',
      texto: 'Hoy escuché música tranquila y me relajé 🌟',
      tiempo: 'Hace 2 minutos'
    },
    {
      usuario: 'Ana',
      texto: 'Salir a caminar me dio mucha paz 🌿',
      tiempo: 'Hace 10 minutos'
    }
  ];

  frases = [
  'Respira profundo... este es tu momento de paz. Si lo deseas, presiona y deja que el sonido te acompañe.',
  'Todo puede esperar un instante. Dale play y regálate unos segundos de tranquilidad.',
  'Cierra los ojos un momento... el descanso está a solo un clic.',
  'Deja ir la tensión, poco a poco. Puedes escuchar algo que te ayude a relajarte.',
  'Un respiro, una pausa... y si quieres, un audio para calmar tu mente.',
  'Estás aquí, estás bien. Dale play y conecta con la calma.',
  'Silencio, calma y un pequeño descanso. Presiona y déjate llevar.',
  'Tu mente merece descansar. Este audio puede ser un buen comienzo.',
  'Inhala paz, exhala preocupaciones... el resto déjaselo al sonido.',
  'No tienes que hacer nada más... solo escuchar y relajarte.'
  ];

  fraseSeleccionada: string = '';

  abrirFrase(frase: string) {
    this.fraseSeleccionada = frase;
  }

  cerrarFrase() {
    this.fraseSeleccionada = '';
  }

  ngOnInit(): void {
    this.iniciarLluvia();
  }

  publicar() {
    if (this.mensaje.trim() !== '') {
      this.comentarios.unshift({
        usuario: 'Tú',
        texto: this.mensaje,
        tiempo: 'Ahora'
      });
      this.mensaje = '';
    }
  }

  iniciarLluvia() {
    console.log("Animación de lluvia iniciada");
  }
}