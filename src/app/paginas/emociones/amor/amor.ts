import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-amor',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './amor.html',
  styleUrls: ['./amor.css']
})
export class Amor {

  caracteristicas = [
    { icono: '💞', titulo: 'Conexión profunda',       texto: 'El amor crea vínculos genuinos que van más allá de lo superficial, generando lazos duraderos y significativos.' },
    { icono: '🤲', titulo: 'Generosidad natural',     texto: 'Quien ama da sin esperar recibir. El amor auténtico nace del deseo de bienestar del otro.' },
    { icono: '👁️', titulo: 'Ver al otro tal como es', texto: 'El amor verdadero acepta las virtudes y defectos del otro sin intentar cambiarlo.' },
    { icono: '🌱', titulo: 'Crecimiento mutuo',        texto: 'Las relaciones amorosas sanas impulsan a ambas personas a ser mejores versiones de sí mismas.' },
    { icono: '🛡️', titulo: 'Seguridad emocional',     texto: 'El amor crea un espacio seguro donde uno puede ser vulnerable sin miedo al juicio o al rechazo.' },
    { icono: '🔥', titulo: 'Pasión y compromiso',     texto: 'El amor pleno combina la chispa de la atracción con la decisión consciente de estar presente.' },
  ];

  pasos = [
    { titulo: 'Ámate primero a ti mismo',      texto: 'El amor propio es la base de todo amor. Trátate con la misma compasión que le darías a alguien que quieres.' },
    { titulo: 'Practica la presencia plena',   texto: 'Estar realmente presente cuando estás con alguien es una de las formas más poderosas de expresar amor.' },
    { titulo: 'Aprende a recibir amor',        texto: 'Muchas personas saben dar pero les cuesta recibir. Permítete ser amado sin sentirte en deuda.' },
    { titulo: 'Comunica lo que sientes',       texto: 'El amor no se adivina. Expresa con palabras y acciones lo que sientes antes de que sea tarde.' },
    { titulo: 'Respeta los límites del otro',  texto: 'Amar no es poseer. El amor sano respeta la individualidad, el espacio y las decisiones del otro.' },
    { titulo: 'Cultiva pequeños gestos',       texto: 'El amor se construye en los detalles cotidianos: una llamada, una nota, un abrazo inesperado.' },
  ];

  beneficios = [
    { icono: '🧠', titulo: 'Mejor salud mental',    texto: 'El amor reduce el cortisol y aumenta la oxitocina, mejorando el estado de ánimo y reduciendo el estrés.' },
    { icono: '❤️', titulo: 'Salud cardiovascular',  texto: 'Estudios demuestran que las personas en relaciones amorosas sanas tienen menor riesgo cardíaco.' },
    { icono: '🌟', titulo: 'Mayor autoestima',       texto: 'Sentirse amado refuerza la percepción positiva de uno mismo y la confianza en las propias capacidades.' },
    { icono: '🤝', titulo: 'Vínculos más fuertes',  texto: 'El amor profundiza las relaciones, creando redes de apoyo sólidas que sostienen en los momentos difíciles.' },
  ];

  citas = [
    { frase: 'Amarte a ti mismo no es egoísmo, es aprender a darte el lugar que nadie más puede darte.'},
    { frase: 'Cuando aprendes a valorarte, dejas de aceptar lo que no te hace bien.'},
    { frase: 'El amor propio es entender que mereces paz, no solo momentos bonitos.'},
    { frase: 'No necesitas ser perfecto para merecer amor, necesitas ser auténtico contigo mismo.'},
    { frase: 'A veces, el mayor acto de amor es alejarte de lo que te rompe.'},
    { frase: 'Amarte también es perdonarte por todo lo que no supiste hacer antes.'},
    { frase: 'Amar a alguien es elegirlo cada día, incluso cuando las cosas no son fáciles.'},
    { frase: 'El amor en pareja se construye con respeto, confianza y pequeños detalles constantes.'},
    { frase: 'Estar con alguien no es perder tu esencia, es compartirla sin dejar de ser tú.'},
    { frase: 'Una relación sana no te quita libertad, te da tranquilidad.'},
    { frase: 'El verdadero amor no se trata de necesitar, sino de querer compartir la vida.'},
    { frase: 'Amar es crecer juntos sin dejar de crecer como personas individuales.'},

  ];

  actividades = [
    { icono: '💌', titulo: 'Carta de amor propia',      texto: 'Escríbete una carta como si fueras tu mejor amigo. Reconoce tus virtudes, perdona tus errores y celebra quién eres.'},
    { icono: '📸', titulo: 'Álbum de momentos queridos', texto: 'Reúne fotos o recuerdos de momentos felices con personas que amas. Revísalos cuando necesites reconectar con el amor.'},
    { icono: '🗣️', titulo: 'Di "te quiero" hoy',        texto: 'Díselo a alguien que lo merece escucharlo. No lo postergues. El amor expresado tiene un poder transformador inmediato.'},
    { icono: '🍽️', titulo: 'Comparte una comida',       texto: 'Invita a alguien especial a comer sin distracciones. Sin celulares. Solo presencia, conversación y conexión genuina.'},
    { icono: '🧘', titulo: 'Meditación de amor bondadoso', texto: 'Cierra los ojos y envía mentalmente amor a ti mismo, a alguien querido, a un conocido y a alguien con quien tengas conflicto.'},
    { icono: '✍️', titulo: 'Lista de gratitud amorosa',  texto: 'Escribe 5 cosas que aprecias de las personas que amas. Comparte la lista con ellas o guárdala para ti como recordatorio.' },
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
      nombre:   this.nuevoComentario.nombre.trim(),
      avatar:   this.nuevoComentario.nombre.trim().charAt(0).toUpperCase(),
      fecha:    new Date().toLocaleDateString('es-PE', { day:'2-digit', month:'long', year:'numeric' }),
      texto:    this.nuevoComentario.texto.trim(),
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