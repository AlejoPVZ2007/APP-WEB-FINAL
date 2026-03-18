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