import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';   // 👈 para *ngFor

import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-confianza',
  templateUrl: './confianza.html',
  styleUrls: ['./confianza.css'],
  standalone: true,  // 👈 IMPORTANTE
  imports: [CommonModule, FormsModule] // 👈 AQUÍ VA LA SOLUCIÓN
  
})
export class Confianza implements OnInit, OnDestroy {
  constructor() {
    document.body.classList.add('pagina-confianza'); // 👈 agrega clase al entrar
  }

  ngOnDestroy() {
    document.body.classList.remove('pagina-confianza'); // 👈 quita clase al salir
  }
  mensaje: string = '';

  comentarios = [
    {
      usuario: 'Usuario123',
      texto: 'Hoy me sentí más seguro de mí mismo 🌟',
      tiempo: 'Hace 2 minutos'
    },
    {
      usuario: 'Ana',
      texto: 'Me sentí apoyada por mi familia 🌿',
      tiempo: 'Hace 10 minutos'
    }
  ];

  frases = [
    'La confianza es la base de todas las relaciones saludables. Comienza por confiar en ti mismo, y verás cómo esa seguridad se refleja en tus conexiones con los demás.',
    'Celebrar los pequeños momentos es una forma de gratitud. La confianza no siempre llega en grandes eventos, vive en los detalles del día a día.',
    'La confianza compartida es doble confianza. Busca a alguien hoy y cuéntale algo que te haya hecho sentir seguro.',
    'La confianza es contagiosa, compártela sin miedo. Una sonrisa tuya puede cambiar el día de alguien que lo necesita.',
    'Hoy es un día para celebrar estar vivo. La confianza más pura nace de agradecer lo que tienes exactamente en este momento.'
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

  iniciarLluvia() {
    console.log("Animación de lluvia iniciada");
  }
}