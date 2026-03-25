import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-confianza',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './confianza.html',
  styleUrls: ['./confianza.css']
})
export class Confianza {

  caracteristicas = [
    { icono: '🪨', titulo: 'Estabilidad emocional',     texto: 'La confianza genera una base sólida desde la cual enfrentar los desafíos sin desmoronarse ante la incertidumbre.' },
    { icono: '🤲', titulo: 'Apertura a los demás',       texto: 'Cuando confiamos, nos volvemos más vulnerables y auténticos, lo que fortalece los vínculos genuinos.' },
    { icono: '🎯', titulo: 'Decisión sin miedo',         texto: 'La confianza reduce la parálisis por análisis y nos permite actuar con determinación incluso sin certezas absolutas.' },
    { icono: '🔗', titulo: 'Compromiso real',            texto: 'La confianza es la base del compromiso profundo: nos permite apostar por personas, proyectos e ideas a largo plazo.' },
    { icono: '🧭', titulo: 'Orientación al crecimiento', texto: 'Quien confía en sí mismo ve los errores como aprendizaje, no como fracasos definitivos.' },
    { icono: '🛡️', titulo: 'Resiliencia emocional',      texto: 'La confianza actúa como un escudo interno que amortigua los golpes y acelera la recuperación.' },
  ];

  pasos = [
    { titulo: 'Cumple tus promesas',           texto: 'La confianza empieza con uno mismo. Haz pequeños compromisos contigo y cúmplelos. Cada promesa cumplida es un ladrillo en tu autoconfianza.' },
    { titulo: 'Acepta la imperfección',        texto: 'Confiar no significa tener todas las respuestas. Acepta que puedes equivocarte y que eso no disminuye tu valor.' },
    { titulo: 'Expónte gradualmente',          texto: 'La confianza crece enfrentando lo que temes en dosis manejables. Empieza con pequeños riesgos y expande tu zona de confort.' },
    { titulo: 'Reconoce tus logros',           texto: 'Lleva un registro de tus victorias, por pequeñas que sean. Tu cerebro necesita evidencia tangible de tu capacidad.' },
    { titulo: 'Rodéate de personas que creen en ti', texto: 'La confianza es contagiosa. Busca personas que te desafíen con cariño y te recuerden quién eres cuando lo olvidas.' },
    { titulo: 'Practica la autocompasión',     texto: 'Confiar también es tratarte con amabilidad cuando fallas. La autocrítica feroz destruye la confianza; la compasión la reconstruye.' },
  ];

  beneficios = [
    { icono: '🧠', titulo: 'Menos estrés',          texto: 'La confianza reduce la ansiedad anticipatoria y los niveles de cortisol, permitiéndote enfrentar desafíos con mayor calma.' },
    { icono: '💪', titulo: 'Mayor resiliencia',     texto: 'Las personas con alta confianza se recuperan más rápido de los fracasos y ven los obstáculos como oportunidades.' },
    { icono: '🤝', titulo: 'Relaciones más profundas', texto: 'La confianza te permite ser auténtico, lo que atrae relaciones genuinas y duraderas basadas en el respeto mutuo.' },
    { icono: '🚀', titulo: 'Acción decisiva',       texto: 'Confiar en tus habilidades te lleva a tomar acción sin esperar certezas absolutas, acelerando tu crecimiento personal.' },
  ];

  citas = [
    { frase: 'La confianza no es "no tener miedo", es saber que puedes caminar a pesar de él.' },
    { frase: 'La mejor forma de construir confianza en ti mismo es hacer lo que dices que harás, una y otra vez.' },
    { frase: 'Confiar en otros no es debilidad; es reconocer que no necesitas cargar con todo solo.' },
    { frase: 'La autoconfianza se cultiva honrando tus propios límites y celebrando tus avances, por pequeños que sean.' },
    { frase: 'No necesitas tener todas las respuestas para confiar en que encontrarás el camino.' },
    { frase: 'La confianza es el puente entre donde estás y donde quieres estar.' },
    { frase: 'Quien confía en sí mismo inspira confianza en los demás.' },
    { frase: 'La confianza no es un destino, es una práctica diaria de elegirte a ti mismo.' },
    { frase: 'Cuando confías en tu capacidad de adaptarte, el miedo a lo desconocido pierde poder.' },
    { frase: 'La confianza más profunda no viene de nunca fallar, sino de saber que sobrevivirás a tus caídas.' },
    { frase: 'Confiar es soltar el control y abrazar la certeza de que estás preparado para lo que venga.' },
    { frase: 'La confianza genuina no necesita gritar; se muestra en la calma con la que enfrentas las tormentas.' },
  ];

  actividades = [
    { icono: '📝', titulo: 'Diario de logros',           texto: 'Cada noche anota 3 cosas que hiciste bien. Pueden ser pequeñas: una conversación difícil, cumplir un compromiso, pedir ayuda. Revísalo cuando dudes de ti.' },
    { icono: '🎯', titulo: 'El desafío de los 5 segundos', texto: 'Cuando sientas dudas antes de actuar, cuenta 5-4-3-2-1 y muévete. Rompe el ciclo de la parálisis y entrena la acción decidida.' },
    { icono: '🗣️', titulo: 'Pide retroalimentación honesta', texto: 'Pregúntale a alguien de confianza: "¿Qué fortalezas ves en mí?" Acepta lo bueno sin minimizarlo. Deja que sus palabras anclen en ti.' },
    { icono: '🧘', titulo: 'Visualización preparatoria',  texto: 'Antes de un reto, cierra los ojos y visualiza cada paso con éxito. Tu cerebro no distingue bien lo real de lo imaginado: ensaya la confianza.' },
    { icono: '🤲', titulo: 'Delega algo importante',     texto: 'Confía una tarea que normalmente harías solo. Permitir que otros te ayuden fortalece la confianza mutua y te alivia la carga.' },
    { icono: '💬', titulo: 'Háblate como a un amigo',    texto: 'Cuando surja la autocrítica, pregúntate: "¿Le diría esto a alguien que quiero?" Ajusta tu diálogo interno hacia la compasión.' },
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