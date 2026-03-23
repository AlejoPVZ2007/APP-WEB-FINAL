import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   // 👈 para *ngFor
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confianza',
  standalone: true,  // 👈 IMPORTANTE
  imports: [CommonModule, FormsModule], // 👈 AQUÍ VA LA SOLUCIÓN
  templateUrl: './confianza.html',
  styleUrls: ['./confianza.css']
})
export class Confianza implements OnInit {

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