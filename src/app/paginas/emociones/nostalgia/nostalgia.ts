import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nostalgia',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './nostalgia.html',
  styleUrls: ['./nostalgia.css']
})
export class Nostalgia {

  caracteristicas = [
    { icono: '🌊', titulo: 'Emoción agridulce',         texto: 'La nostalgia combina tristeza y alegría al mismo tiempo. Es una de las pocas emociones que puede doler y consolar simultáneamente.' },
    { icono: '🪞', titulo: 'Espejo de identidad',        texto: 'Recordar el pasado nos ayuda a entender quiénes somos hoy. La nostalgia es una forma de construir y mantener nuestra historia personal.' },
    { icono: '🔗', titulo: 'Puente entre tiempos',       texto: 'La nostalgia conecta el pasado con el presente, dándonos una sensación de continuidad que refuerza el sentido de la vida.' },
    { icono: '👥', titulo: 'Evoca vínculos',              texto: 'Casi siempre la nostalgia gira alrededor de personas: amigos de infancia, familiares, amores pasados. Es una emoción profundamente social.' },
    { icono: '🎵', titulo: 'Activada por los sentidos',  texto: 'Una canción, un olor, un sabor o un lugar pueden desencadenar recuerdos vívidos con una intensidad emocional sorprendente.' },
    { icono: '📸', titulo: 'Idealización del recuerdo',  texto: 'La nostalgia tiende a recordar el pasado con más calidez de la que tuvo en realidad. El cerebro suaviza los momentos difíciles con el tiempo.' },
  ];

  pasos = [
    { titulo: 'Permítete sentirla',              texto: 'No resistas la nostalgia cuando aparece. Déjate llevar por el recuerdo unos minutos. Suprimirla solo la hace regresar con más fuerza.' },
    { titulo: 'Identifica qué extrañas realmente', texto: 'A veces no extrañamos el pasado en sí, sino una sensación: seguridad, libertad, pertenencia. Identificarla te ayuda a encontrarla en el presente.' },
    { titulo: 'Honra sin aferrarte',             texto: 'Hay una diferencia entre visitar el pasado y vivir en él. Puedes agradecer lo que fue sin dejar de construir lo que viene.' },
    { titulo: 'Comparte el recuerdo',            texto: 'Contar una historia del pasado con alguien que estuvo presente o que quiera escuchar convierte la nostalgia en conexión social.' },
    { titulo: 'Usa el recuerdo como inspiración', texto: 'Pregúntate qué te daba felicidad en ese tiempo que extrañas. Busca formas de traer esa esencia al presente, adaptada a quien eres hoy.' },
    { titulo: 'Crea nuevos recuerdos valiosos',  texto: 'La mejor respuesta a la nostalgia es vivir plenamente el presente. Los recuerdos de mañana los estás creando hoy.' },
  ];

  beneficios = [
    { icono: '🧭', titulo: 'Fortalece la identidad',  texto: 'Recordar de dónde venimos nos ayuda a saber quiénes somos y hacia dónde queremos ir.' },
    { icono: '🤝', titulo: 'Refuerza los vínculos',   texto: 'Compartir recuerdos con otros fortalece los lazos afectivos y genera un sentido de historia compartida.' },
    { icono: '🌿', titulo: 'Reduce la soledad',       texto: 'Estudios muestran que la nostalgia activa la sensación de estar conectado con otros, incluso cuando estamos físicamente solos.' },
    { icono: '✨', titulo: 'Inspira gratitud',         texto: 'Recordar momentos felices del pasado activa la gratitud por haberlos vivido y por todo lo que aún está por venir.' },
  ];

  citas = [
    { frase: 'La nostalgia es el corazón recordando que alguna vez estuvo muy lleno.' },
    { frase: 'Extrañar algo es una forma de amarlo desde la distancia del tiempo.' },
    { frase: 'No llores porque terminó, sonríe porque ocurrió.' },
    { frase: 'La nostalgia es una puerta al pasado que no podemos abrir, pero sí contemplar.' },
    { frase: 'Los recuerdos son el único paraíso del que no nos pueden expulsar.' },
    { frase: 'Hay lugares en el corazón que solo existen porque alguien los habitó una vez.' },
    { frase: 'El pasado no pesa si lo llevas como un regalo, no como una cadena.' },
    { frase: 'La nostalgia nos dice que amamos bien, que vivimos de verdad.' },
    { frase: 'Recordar con ternura es la forma más suave de no perder lo que ya no está.' },
    { frase: 'El tiempo no borra los momentos que importaron, solo los aleja un poco.' },
    { frase: 'Hay canciones que no escuchas, solo recuerdas.' },
    { frase: 'La nostalgia más dulce no es por los lugares, sino por las personas que los hacían especiales.' },
  ];

  actividades = [
    { icono: '📷', titulo: 'Álbum de recuerdos',           texto: 'Dedica 30 minutos a revisar fotos antiguas. No con tristeza, sino con gratitud: cada imagen es prueba de momentos que valió la pena vivir.' },
    { icono: '✉️', titulo: 'Carta a tu yo del pasado',      texto: 'Escríbele a la versión de ti que vivió ese momento que extrañas. Cuéntale lo que aprendiste desde entonces y agradécele lo que hizo por ti.' },
    { icono: '🎶', titulo: 'Playlist de recuerdos',         texto: 'Arma una lista de canciones que te transportan a momentos especiales. Escúchala conscientemente, dejando que cada canción traiga su historia.' },
    { icono: '📞', titulo: 'Llama a alguien del pasado',    texto: 'Contacta a una persona con quien compartiste momentos que extrañas. No hace falta una razón especial: el recuerdo compartido es razón suficiente.' },
    { icono: '📔', titulo: 'Diario de gratitud por el pasado', texto: 'Escribe 5 recuerdos que agradeces haber vivido. Describe cómo te sentiste, quién estaba y por qué ese momento importó.' },
    { icono: '🍽️', titulo: 'Recrea un momento especial',   texto: 'Cocina un plato de tu infancia, visita un lugar significativo o repite una tradición que extrañas. Honrar el pasado desde el presente es un acto de amor.' },
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