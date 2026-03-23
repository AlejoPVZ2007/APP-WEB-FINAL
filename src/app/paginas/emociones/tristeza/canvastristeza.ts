import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tristeza',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tristeza.html',
  styleUrls: ['./tristeza.css', './canvasTristeza.css'],
})
export class Tristeza implements AfterViewInit {
  @ViewChild('canvasTristeza') canvasRef!: ElementRef<HTMLCanvasElement>;  // Usamos ViewChild para obtener la referencia al canvas

  ngAfterViewInit(): void {
    const canvas = this.canvasRef.nativeElement;  // Accedemos directamente al canvas usando @ViewChild
    this.loadImageOnCanvas(canvas);  // Pasamos la referencia al método de carga de imagen
  }

  loadImageOnCanvas(canvas: HTMLCanvasElement): void {
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const image = new Image();
      image.src = 'assets/images/tristeza1.jpg';  // Ruta de la imagen (asegúrate que sea correcta)
      
      image.onload = () => {
        // Cuando la imagen se carga, ajustamos el tamaño del canvas y dibujamos la imagen
        canvas.width = window.innerWidth;  // Ajusta el canvas al tamaño de la ventana
        canvas.height = window.innerHeight;  // Ajusta la altura del canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);  // Limpiar el canvas antes de dibujar la nueva imagen
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);  // Dibuja la imagen en el canvas
      };
      
      // Si la imagen no se carga correctamente, se muestra un error en consola
      image.onerror = () => {
        console.error("No se pudo cargar la imagen");
      };
    }
  }
}