import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';   // 👈 para *ngFor
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calma',
  standalone: true,  // 👈 IMPORTANTE
  imports: [CommonModule, FormsModule], // 👈 AQUÍ VA LA SOLUCIÓN
  templateUrl: './calma.html',
  styleUrls: ['./calma.css']
})
export class Calma {

  caracteristicas = [
    { icono: '🌊', titulo: 'Tranquilidad interna', texto: 'La calma es esa sensación de paz que surge cuando nos sentimos seguros y en control, incluso frente a la adversidad.' },
    { icono: '🧘', titulo: 'Claridad mental',       texto: 'Cuando estamos calmados, nuestra mente se despeja, permitiéndonos pensar con mayor claridad y tomar decisiones más sabias.' },
    { icono: '🤝', titulo: 'Conexión con otros',    texto: 'La calma nos hace más accesibles y empáticos, facilitando relaciones más profundas y auténticas.' },
    { icono: '🛡️', titulo: 'Resiliencia emocional', texto: 'La calma actúa como un escudo que nos protege de la reactividad impulsiva, ayudándonos a enfrentar los desafíos con serenidad.' },
    { icono: '🌱', titulo: 'Crecimiento personal',  texto: 'Cultivar la calma nos permite aprender de las experiencias difíciles en lugar de ser consumidos por ellas.' },
    { icono: '💡', titulo: 'Creatividad fluida',   texto: 'En la calma, las ideas fluyen con mayor facilidad, ya que no estamos bloqueados por el estrés o la ansiedad.' },
  ];

  pasos = [
    { titulo: 'Respira conscientemente', texto: 'Cuando sientas que la calma se escapa, detente y toma respiraciones profundas y lentas. Esto activa tu sistema nervioso parasimpático, devolviéndote a un estado de tranquilidad.' },
    { titulo: 'Acepta lo que no puedes controlar', texto: 'La calma surge cuando dejamos de luchar contra lo inevitable. Enfócate en lo que sí puedes manejar y suelta el resto.' },
    { titulo: 'Encuentra tu ancla', texto: 'Identifica algo que te conecte con el presente y te brinde seguridad, como un objeto, una imagen o una frase. Úsalo para volver a la calma cuando lo necesites.' },
    { titulo: 'Cultiva la gratitud', texto: 'Enfocarte en lo que tienes y aprecias puede ayudarte a encontrar calma incluso en momentos difíciles.' },
    { titulo: 'Desconéctate para reconectar', texto: 'Tómate descansos regulares de las pantallas y las redes sociales para reducir la sobrecarga de información y encontrar momentos de calma.' },
    { titulo: 'Practica la autocompasión', texto: 'Sé amable contigo mismo cuando las cosas no salgan como esperas. La autocrítica solo aumenta el estrés; la compasión te ayuda a recuperar la calma.' },
  ];

  beneficios = [
    { icono: '🧠', titulo: 'Mejor salud mental', texto: 'La calma reduce la ansiedad, la depresión y el estrés, promoviendo un bienestar emocional más sólido.' },
    { icono: '💪', titulo: 'Mayor resiliencia', texto: 'Las personas que cultivan la calma se recuperan más rápido de las adversidades y ven los desafíos como oportunidades de crecimiento.' },
    { icono: '🤝', titulo: 'Relaciones más saludables', texto: 'La calma nos hace más pacientes y comprensivos, lo que fortalece nuestras conexiones con los demás.' },
    { icono: '🚀', titulo: 'Mayor productividad', texto: 'En un estado de calma, somos capaces de concentrarnos mejor y tomar decisiones más efectivas, lo que impulsa nuestro rendimiento.' },
  ];

  citas = [
    { frase: 'La calma no es la ausencia de tormentas, sino la capacidad de mantener la serenidad en medio de ellas.' },
    { frase: 'En la calma encontramos la fuerza para enfrentar cualquier desafío con claridad y valentía.' },
    { frase: 'La verdadera calma no viene de evitar los problemas, sino de aprender a navegar a través de ellos con confianza.' },
    { frase: 'Cultivar la calma es como entrenar un músculo: requiere práctica, paciencia y perseverancia.' },
    { frase: 'La calma es el refugio donde nuestra mente puede descansar y recargar energías para seguir adelante.' },
    { frase: 'En la calma, las soluciones creativas emergen con mayor facilidad, ya que no estamos bloqueados por el estrés.' },
    { frase: 'La calma no es un estado pasivo, sino una fuerza activa que nos impulsa a actuar con sabiduría.' },
    { frase: 'Cuando cultivamos la calma, nos volvemos más resilientes y capaces de enfrentar cualquier tormenta que la vida nos presente.' },
    { frase: 'La calma es el ancla que nos mantiene firmes en medio de las tempestades emocionales.' },
    { frase: 'En la calma, encontramos la claridad para ver más allá de los problemas y descubrir nuevas oportunidades.' },
    { frase: 'La calma no es un destino, sino un viaje continuo de autodescubrimiento y crecimiento personal.' },
    { frase: 'Cultivar la calma es un acto de amor propio que nos permite vivir con mayor plenitud y autenticidad.' },
  ];

  actividades = [
    { icono: '🧘', titulo: 'Meditación diaria', texto: 'Dedica unos minutos cada día a sentarte en silencio, enfocándote en tu respiración o en un mantra. Esto fortalece tu capacidad para encontrar calma en cualquier situación.' },
    { icono: '🌿', titulo: 'Conexión con la naturaleza', texto: 'Pasa tiempo al aire libre, rodeado de árboles, agua o simplemente el cielo. La naturaleza tiene un efecto calmante que puede reducir el estrés y mejorar tu estado de ánimo.' },
    { icono: '📵', titulo: 'Día sin pantallas', texto: 'Elige un día a la semana para desconectarte de tus dispositivos electrónicos. Esto te ayudará a reducir la sobrecarga de información y a encontrar momentos de calma en tu rutina.' },
    { icono: '📝', titulo: 'Escritura terapéutica', texto: 'Cada noche, escribe tres cosas por las que estás agradecido y una situación que te causó estrés. Esto te ayudará a procesar tus emociones y a cultivar una perspectiva más calmada.' },
    { icono: '🎨', titulo: 'Expresión creativa', texto: 'Pinta, dibuja, baila o haz cualquier actividad artística que te guste. La creatividad es una vía poderosa para liberar tensiones y encontrar calma.' },
    { icono: '🤲', titulo: 'Actos de bondad', texto: 'Realiza pequeños actos de amabilidad hacia los demás. Ayudar a otros no solo beneficia a quienes reciben tu ayuda, sino que también te llena de una sensación de calma y conexión.' },
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