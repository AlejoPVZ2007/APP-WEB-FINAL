import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alegria',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './alegria.html',
  styleUrls: ['./alegria.css']
})
export class Alegria {

  caracteristicas = [
    { icono: '✨', titulo: 'Ligereza interior',        texto: 'La alegría genera una sensación de ligereza que nos libera del peso de las preocupaciones y nos abre al presente.' },
    { icono: '🤸', titulo: 'Energía expansiva',        texto: 'Cuando sentimos alegría, nuestra energía se expande de forma natural hacia quienes nos rodean.' },
    { icono: '🌈', titulo: 'Visión optimista',         texto: 'La alegría amplía nuestra perspectiva: vemos más posibilidades, más soluciones y más razones para seguir adelante.' },
    { icono: '🎉', titulo: 'Contagio positivo',        texto: 'La alegría es viral en el mejor sentido: una persona alegre eleva el estado emocional de todos a su alrededor.' },
    { icono: '🔓', titulo: 'Apertura y curiosidad',   texto: 'La alegría nos hace más abiertos a nuevas experiencias, ideas y personas que de otro modo pasaríamos por alto.' },
    { icono: '💛', titulo: 'Gratitud natural',         texto: 'La alegría y la gratitud se alimentan mutuamente: quien siente alegría tiende a agradecer, y viceversa.' },
  ];

  pasos = [
    { titulo: 'Busca lo pequeño',              texto: 'La alegría no siempre llega en grandes momentos. Entrena tu atención para notar los pequeños placeres cotidianos.' },
    { titulo: 'Rodéate de personas que suman', texto: 'Las emociones son contagiosas. Elige pasar tiempo con personas cuya energía positiva te nutre y te eleva.' },
    { titulo: 'Mueve tu cuerpo',               texto: 'El ejercicio libera endorfinas de forma natural. Bailar, caminar o cualquier movimiento puede despertar la alegría.' },
    { titulo: 'Practica la gratitud diaria',   texto: 'Escribir tres cosas por las que estás agradecido cada día entrena tu cerebro para notar lo positivo.' },
    { titulo: 'Date permiso de jugar',         texto: 'El juego no es solo para niños. Hacer algo sin propósito, solo por diversión, reactiva la alegría genuina.' },
    { titulo: 'Celebra tus logros',            texto: 'No esperes los grandes hitos. Celebra cada pequeño avance: tu cerebro aprende a asociar esfuerzo con satisfacción.' },
  ];

  beneficios = [
    { icono: '🧠', titulo: 'Más claridad mental',   texto: 'La alegría mejora la concentración, la memoria y la toma de decisiones al reducir el cortisol cerebral.' },
    { icono: '💪', titulo: 'Sistema inmune fuerte', texto: 'Las personas que experimentan alegría con frecuencia tienen un sistema inmunológico más resistente.' },
    { icono: '🌟', titulo: 'Mayor productividad',   texto: 'Estudios muestran que la alegría incrementa la productividad hasta en un 20% en entornos laborales.' },
    { icono: '🤝', titulo: 'Relaciones más ricas',  texto: 'La alegría fortalece los vínculos sociales, haciéndonos más empáticos, generosos y atractivos para otros.' },
  ];

  citas = [
    { frase: 'La alegría no es algo que encuentras, es algo que creas con las decisiones que tomas cada día.' },
    { frase: 'Ser feliz no significa que todo sea perfecto, significa que decidiste ver más allá de lo imperfecto.' },
    { frase: 'La alegría más pura viene de las cosas simples que el corazón reconoce aunque la mente las ignore.' },
    { frase: 'No esperes a tener todo resuelto para ser feliz. La alegría también vive en el camino.' },
    { frase: 'Una persona alegre no es la que tiene menos problemas, sino la que no deja que los problemas la definan.' },
    { frase: 'La alegría compartida se multiplica; la tristeza compartida se divide.' },
    { frase: 'Hay una alegría silenciosa que no hace ruido, pero que lo transforma todo desde adentro.' },
    { frase: 'Ríete de lo que puedas, llora lo que necesites y agradece lo que tienes. Eso es vivir.' },
    { frase: 'La alegría es el lenguaje que el alma habla cuando está en paz consigo misma.' },
    { frase: 'No busques la alegría en los grandes momentos. Está escondida en los detalles de cada día.' },
    { frase: 'Cuando eliges ver lo bueno, el mundo no cambia, pero tú sí.' },
    { frase: 'La alegría genuina no depende de las circunstancias; nace de quien decides ser.' },
  ];

  actividades = [
    { icono: '📝', titulo: 'Diario de tres alegrías',      texto: 'Cada noche anota tres momentos del día que te generaron alegría, por pequeños que sean. En 21 días verás el mundo diferente.' },
    { icono: '💃', titulo: 'Baila sin razón',               texto: 'Pon tu canción favorita y baila solo por 5 minutos. Sin coreografía, sin audiencia. El cuerpo sabe cómo despertar la alegría.' },
    { icono: '☎️', titulo: 'Llama a alguien que extrañas',  texto: 'Elige a una persona que te alegra el día y llámala sin motivo. Ese reconectar es una fuente de alegría inmediata y mutua.' },
    { icono: '🌳', titulo: 'Sal al aire libre',              texto: 'Un paseo de 20 minutos en la naturaleza reduce el estrés y eleva el estado de ánimo de forma comprobada.' },
    { icono: '🎨', titulo: 'Crea algo con tus manos',       texto: 'Dibujar, cocinar, armar algo: cualquier acto creativo activa el circuito de recompensa y genera satisfacción genuina.' },
    { icono: '😂', titulo: 'Comparte algo que te dio risa',  texto: 'Envía un meme, un recuerdo gracioso o cuenta un chiste. La risa compartida es uno de los aceleradores de alegría más poderosos.' },
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