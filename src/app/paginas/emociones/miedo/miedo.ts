import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-miedo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './miedo.html',
  styleUrls: ['./miedo.css']
})
export class Miedo {

  caracteristicas = [
    { icono: '⚡', titulo: 'Respuesta inmediata',       texto: 'El miedo activa la amígdala en milisegundos, desencadenando una respuesta de lucha, huida o parálisis antes de que la mente racional intervenga.' },
    { icono: '🧬', titulo: 'Origen evolutivo',           texto: 'El miedo existe porque nos ha mantenido vivos por millones de años. Es la alarma más antigua del sistema emocional humano.' },
    { icono: '🌫️', titulo: 'Distorsión perceptiva',     texto: 'Bajo el miedo, tendemos a sobredimensionar la amenaza y subestimar nuestra capacidad de hacerle frente.' },
    { icono: '🔒', titulo: 'Parálisis o acción',         texto: 'El miedo puede bloquearnos o impulsarnos. La diferencia está en cómo lo interpretamos y qué decidimos hacer con él.' },
    { icono: '📡', titulo: 'Señal de valores',           texto: 'Aquello que tememos suele revelar lo que más nos importa. El miedo apunta directamente a lo que consideramos valioso.' },
    { icono: '🌀', titulo: 'Contagio emocional',         texto: 'El miedo se propaga entre personas. Un entorno de miedo colectivo amplifica la percepción individual del peligro.' },
  ];

  pasos = [
    { titulo: 'Nómbralo sin juzgarlo',          texto: 'El primer paso es reconocer el miedo sin catalogarlo como debilidad. Decir "siento miedo" sin vergüenza reduce su intensidad.' },
    { titulo: 'Identifica qué lo dispara',      texto: 'Pregúntate: ¿qué situación específica activa este miedo? Conocer el detonante te devuelve el control sobre la situación.' },
    { titulo: 'Separa el peligro real del imaginario', texto: 'Pregúntate: ¿existe una amenaza real ahora mismo? Muchos miedos son anticipaciones de algo que quizás nunca ocurrirá.' },
    { titulo: 'Respira para calmar el sistema', texto: 'La respiración lenta y profunda activa el sistema nervioso parasimpático, reduciendo la activación fisiológica del miedo.' },
    { titulo: 'Actúa a pesar del miedo',        texto: 'El coraje no es la ausencia de miedo, es actuar con miedo. La acción pequeña y consistente reduce el poder del miedo con el tiempo.' },
    { titulo: 'Busca apoyo cuando lo necesites', texto: 'Compartir el miedo con alguien de confianza o con un profesional lo hace más manejable. No tienes que enfrentarlo solo.' },
  ];

  beneficios = [
    { icono: '🛡️', titulo: 'Nos protege',          texto: 'El miedo adaptativo es nuestro sistema de alarma natural: nos alerta ante peligros reales y nos impulsa a protegernos.' },
    { icono: '🎯', titulo: 'Agudiza los sentidos',  texto: 'Ante el miedo, el cuerpo libera adrenalina que aumenta la atención, la velocidad de reacción y la percepción sensorial.' },
    { icono: '💡', titulo: 'Revela prioridades',    texto: 'Lo que tememos perder nos dice qué valoramos de verdad: relaciones, salud, libertad, propósito.' },
    { icono: '🌱', titulo: 'Impulsa el crecimiento', texto: 'Enfrentar y superar miedos construye resiliencia, autoconfianza y una visión más amplia de nuestras propias capacidades.' },
  ];

  citas = [
    { frase: 'El miedo no es el enemigo. El enemigo es no saber qué hacer con él.' },
    { frase: 'Todo lo que siempre quisiste está al otro lado del miedo.' },
    { frase: 'El valiente no es el que no siente miedo, sino el que actúa a pesar de sentirlo.' },
    { frase: 'El miedo tiene dos significados: olvidarlo todo y correr, o enfrentarlo todo y crecer. Tú eliges.' },
    { frase: 'Lo que evitas por miedo se vuelve más grande. Lo que enfrentas se vuelve más pequeño.' },
    { frase: 'Cuando el miedo llama a tu puerta y abres, no hay nadie. Solo eras tú anticipando.' },
    { frase: 'El miedo es solo un sentimiento, no una verdad sobre lo que eres capaz de hacer.' },
    { frase: 'Nombra tu miedo. Los monstruos sin nombre son siempre más aterradores.' },
    { frase: 'El miedo ocupa el espacio que la confianza aún no ha llenado.' },
    { frase: 'No tienes que eliminar el miedo para avanzar. Solo tienes que dar un paso más grande que él.' },
    { frase: 'El miedo más grande no es al fracaso, sino a no haberlo intentado.' },
    { frase: 'El miedo bien gestionado se convierte en la brújula que señala hacia donde debes crecer.' },
  ];

  actividades = [
    { icono: '📓', titulo: 'Diario del miedo',              texto: 'Escribe el miedo que sientes, qué lo desencadena, qué tan probable es que ocurra y qué harías si ocurriera. Sacarlo del pensamiento al papel lo hace más manejable.' },
    { icono: '🫁', titulo: 'Respiración 4-7-8',             texto: 'Inhala 4 segundos, retén 7 y exhala 8. Repite 4 veces. Esta técnica activa el sistema nervioso parasimpático y reduce la ansiedad del miedo en minutos.' },
    { icono: '🪜', titulo: 'Exposición gradual',            texto: 'Identifica algo que evitas por miedo y divídelo en pasos pequeños. Enfréntalo de menor a mayor intensidad. Cada paso vencido reduce el miedo del siguiente.' },
    { icono: '🤝', titulo: 'Cuéntale tu miedo a alguien',  texto: 'Compartir un miedo con una persona de confianza lo reduce significativamente. La vulnerabilidad compartida no es debilidad, es valentía.' },
    { icono: '🧘', titulo: 'Meditación de observación',    texto: 'Cierra los ojos y observa el miedo como si fuera una nube que pasa. No lo combatas, solo obsérvalo. La aceptación sin lucha reduce su intensidad.' },
    { icono: '✍️', titulo: 'Carta a tu miedo',              texto: 'Escríbele directamente a tu miedo. Pregúntale qué quiere protegerte, agradécele su intención y luego dile que ya puedes hacerte cargo tú.' },
  ];

  /* ── Comentarios ── */
  comentarios: { nombre: string; avatar: string; fecha: string; texto: string; estrellas: number }[] = [];

  nuevoComentario = { nombre: '', texto: '', estrellas: 5 };
  estrellasHover  = 0;
  enviandoCom     = false;
  comEnviado      = false;

  get promedioEstrellas(): number {
    if (!this.comentarios.length) return 0;
    const total = this.comentarios.reduce((s, c) => s + c.estrellas, 0);
    return Math.round((total / this.comentarios.length) * 10) / 10;
  }

  get estrellasArray(): number[] { return [1, 2, 3, 4, 5]; }

  agregarComentario(): void {
    if (!this.nuevoComentario.nombre.trim() || !this.nuevoComentario.texto.trim()) return;
    this.enviandoCom = true;
    setTimeout(() => {
      this.comentarios.unshift({
        nombre:    this.nuevoComentario.nombre.trim(),
        avatar:    this.nuevoComentario.nombre.trim().charAt(0).toUpperCase(),
        fecha:     new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric' }),
        texto:     this.nuevoComentario.texto.trim(),
        estrellas: this.nuevoComentario.estrellas
      });
      this.nuevoComentario = { nombre: '', texto: '', estrellas: 5 };
      this.enviandoCom = false;
      this.comEnviado  = true;
      setTimeout(() => this.comEnviado = false, 3000);
    }, 800);
  }

  setEstrellas(n: number): void { this.nuevoComentario.estrellas = n; }
}