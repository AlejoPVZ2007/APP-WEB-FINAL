import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sorpresa',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './sorpresa.html',
  styleUrls: ['./sorpresa.css']
})
export class Sorpresa {

  caracteristicas = [
    { icono: '⚡', titulo: 'Brevedad extrema',           texto: 'La sorpresa es la emoción más corta que existe: dura menos de un segundo antes de transformarse en otra emoción como alegría, miedo o asombro.' },
    { icono: '🎯', titulo: 'Atención total',              texto: 'En el momento de la sorpresa, toda nuestra capacidad cognitiva se redirige hacia el estímulo inesperado. Nada más existe en ese instante.' },
    { icono: '🔓', titulo: 'Neutralidad inicial',         texto: 'A diferencia de otras emociones, la sorpresa no es positiva ni negativa en sí misma. Su valencia depende de lo que sigue después.' },
    { icono: '🧠', titulo: 'Potencia la memoria',         texto: 'Los eventos sorpresivos se recuerdan con mucho más detalle y durante más tiempo que los eventos esperados. La sorpresa graba profundo.' },
    { icono: '🌐', titulo: 'Universal y reconocible',     texto: 'La expresión facial de sorpresa —ojos abiertos, boca entreabierta— es reconocida en todas las culturas del mundo sin importar el idioma.' },
    { icono: '🔄', titulo: 'Puerta a otras emociones',   texto: 'La sorpresa es un estado transitorio que abre la puerta: puede convertirse en deleite, en miedo, en indignación o en asombro según el contexto.' },
  ];

  pasos = [
    { titulo: 'Rompe tu rutina intencionalmente',  texto: 'La rutina elimina la sorpresa. Cambia un hábito semanal: una ruta diferente, un restaurante nuevo, un género de libro que nunca leerías.' },
    { titulo: 'Cultiva la mentalidad del principiante', texto: 'Acércate a algo conocido como si fuera la primera vez. La familiaridad mata la sorpresa; la curiosidad la resucita.' },
    { titulo: 'Di "sí" a lo inesperado',           texto: 'Cuando surja una invitación o propuesta que no tenías planificada, considera decir sí antes de buscar razones para declinar.' },
    { titulo: 'Sorprende a otros',                 texto: 'Generar sorpresa en otros activa en ti las mismas respuestas positivas. Un gesto inesperado para alguien querido te beneficia tanto como a ellos.' },
    { titulo: 'Observa con ojos nuevos',           texto: 'Dedica 5 minutos al día a mirar algo ordinario con atención plena: tu entorno cotidiano contiene sorpresas que la costumbre ha ocultado.' },
    { titulo: 'Acepta lo que no controlaste',      texto: 'No todas las sorpresas son agradables. Practicar la flexibilidad ante lo inesperado te hace más resiliente y menos reactivo.' },
  ];

  beneficios = [
    { icono: '🧩', titulo: 'Activa el aprendizaje',   texto: 'El cerebro presta máxima atención a lo inesperado, lo que facilita la adquisición de nueva información y habilidades.' },
    { icono: '💫', titulo: 'Rompe el piloto automático', texto: 'La sorpresa nos saca del modo automático y nos devuelve al presente con plena consciencia, como un reset emocional instantáneo.' },
    { icono: '🎁', titulo: 'Genera conexión',          texto: 'Las sorpresas compartidas crean recuerdos poderosos y fortalecen los vínculos entre personas de forma duradera.' },
    { icono: '🌱', titulo: 'Estimula la creatividad',  texto: 'Exponerse a lo inesperado amplía nuestra perspectiva y nos impulsa a pensar de formas que la rutina jamás habría generado.' },
  ];

  citas = [
    { frase: 'La vida es lo que pasa mientras estás ocupado haciendo otros planes. Bienvenida, sorpresa.' },
    { frase: 'El asombro es el comienzo de todo descubrimiento. Sin sorpresa, no hay aprendizaje.' },
    { frase: 'Las mejores cosas de la vida son las que no esperabas encontrar.' },
    { frase: 'Quien nunca se sorprende ha dejado de estar vivo del todo.' },
    { frase: 'La sorpresa es la sal de la vida: sin ella, todo sabe igual.' },
    { frase: 'Cada día trae algo que no sabías que ibas a necesitar encontrar.' },
    { frase: 'El secreto de la felicidad no es hacer siempre lo que uno quiere, sino sorprenderse con lo que llega.' },
    { frase: 'Los ojos más abiertos no son los que más ven, sino los que más se dejan sorprender.' },
    { frase: 'Una sorpresa bien dada vale más que mil regalos esperados.' },
    { frase: 'Cuando crees que ya lo conoces todo, la vida te recuerda que apenas empezas.' },
    { frase: 'La sorpresa no interrumpe la vida, es la vida recordándote que sigue siendo real.' },
    { frase: 'Mantén siempre un espacio en tu corazón para lo que todavía no sabes que existe.' },
  ];

  actividades = [
    { icono: '🎲', titulo: 'El día aleatorio',              texto: 'Una vez al mes, deja que el azar decida algo de tu día: el restaurante, la película o la actividad. Renuncia al control y abraza lo que venga.' },
    { icono: '💌', titulo: 'Sorprende a alguien hoy',       texto: 'Envía un mensaje inesperado, deja una nota, trae algo sin motivo. El acto de sorprender a otros activa en ti la misma energía de asombro.' },
    { icono: '🗺️', titulo: 'Explora sin destino',           texto: 'Sal a caminar sin ruta fija durante 20 minutos. Deja que tu curiosidad dirija los pasos. Lo que encuentres será tuyo, nadie más lo eligió.' },
    { icono: '📚', titulo: 'Lee algo completamente nuevo',  texto: 'Elige un libro, podcast o documental sobre un tema que nunca hayas explorado. El conocimiento inesperado es uno de los mejores regalos.' },
    { icono: '🤫', titulo: 'Organiza una micro-sorpresa',   texto: 'Planea algo pequeño pero inesperado para alguien cercano esta semana. No necesita ser grande: lo inesperado es lo que da el impacto.' },
    { icono: '👀', titulo: 'Ejercicio de novedad',          texto: 'Elige un objeto o lugar que ves todos los días y obsérvalo durante 2 minutos como si nunca lo hubieras visto. Descubrirás algo que siempre estuvo ahí.' },
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