import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tristeza',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './tristeza.html',
  styleUrls: ['./tristeza.css']
})
export class Tristeza {

  caracteristicas = [
    { icono: '💧', titulo: 'Señal de pérdida',          texto: 'La tristeza aparece cuando algo o alguien importante ya no está. Es el reconocimiento honesto de que ese vínculo o situación tenía valor.' },
    { icono: '🌧️', titulo: 'Ralentización del ritmo',   texto: 'La tristeza nos invita a bajar la velocidad, a detenernos y a mirar hacia adentro con mayor profundidad.' },
    { icono: '🪞', titulo: 'Espejo interior',            texto: 'En la tristeza nos vemos tal como somos: sin máscaras, sin distracciones, con una claridad que pocas emociones nos dan.' },
    { icono: '🤝', titulo: 'Puente hacia los demás',    texto: 'Mostrar tristeza invita a otros a acercarse. La vulnerabilidad compartida fortalece los vínculos humanos.' },
    { icono: '🕊️', titulo: 'Proceso de duelo',          texto: 'La tristeza es la emoción central del duelo. Atravesarla con conciencia permite sanar y avanzar con mayor paz.' },
    { icono: '🌱', titulo: 'Semilla de cambio',          texto: 'Muchas transformaciones personales profundas nacen de un momento de tristeza que nos obliga a replantear nuestra vida.' },
  ];

  pasos = [
    { titulo: 'Permítete sentirla',           texto: 'No huyas de la tristeza. Reprimir lo que sientes alarga el proceso. Darte permiso para llorar es un acto de valentía y salud.' },
    { titulo: 'Ponle nombre a lo que perdiste', texto: 'Identifica qué o quién originó la tristeza. Nombrar la pérdida es el primer paso para comenzar a sanar.' },
    { titulo: 'Cuida tu cuerpo',              texto: 'La tristeza vive también en el cuerpo. Duerme bien, aliméntate, sal a caminar. El movimiento suave ayuda a liberar la emoción acumulada.' },
    { titulo: 'Busca apoyo consciente',       texto: 'Habla con alguien de confianza. No para que te "arreglen", sino para sentirte acompañado en el proceso.' },
    { titulo: 'Escribe lo que sientes',       texto: 'El diario emocional es una herramienta poderosa. Escribir la tristeza la saca del ciclo mental y la convierte en algo que puedes observar.' },
    { titulo: 'Encuentra el mensaje',         texto: 'Una vez que la intensidad baje, pregúntate: ¿qué me enseña esta tristeza? ¿Qué valoro? ¿Qué necesito cambiar?' },
  ];

  beneficios = [
    { icono: '🧠', titulo: 'Mayor empatía',        texto: 'Haber sentido tristeza profunda nos hace más sensibles al dolor ajeno y mejora nuestra capacidad de acompañar a otros.' },
    { icono: '🎨', titulo: 'Creatividad expandida', texto: 'Muchas obras de arte, música y literatura nacen de la tristeza. Esta emoción activa una dimensión creativa única.' },
    { icono: '🔍', titulo: 'Claridad de valores',   texto: 'La tristeza revela lo que realmente importa. Nos ayuda a distinguir lo esencial de lo superficial en nuestra vida.' },
    { icono: '💪', titulo: 'Resiliencia interna',   texto: 'Cada vez que atravesamos la tristeza y salimos del otro lado, fortalecemos nuestra capacidad de afrontar la adversidad.' },
  ];

  citas = [
    { frase: 'La tristeza es la sombra que da profundidad a los colores de tu vida.' },
    { frase: 'No toda oscuridad es pérdida; a veces es el lugar donde creces en silencio.' },
    { frase: 'Llorar no es rendirse, es soltar lo que ya no puedes cargar solo.' },
    { frase: 'La tristeza que se siente del todo dura menos que la que se esconde.' },
    { frase: 'Detrás de cada duelo hay un amor que valió la pena.' },
    { frase: 'No tienes que ser fuerte todo el tiempo. A veces, sentir es el acto más valiente.' },
    { frase: 'La tristeza no te rompe; te reconstruye de una forma más auténtica.' },
    { frase: 'Dar espacio a la tristeza es respetar lo que perdiste y lo que fuiste.' },
    { frase: 'Las personas que han llorado profundo saben amar profundo.' },
    { frase: 'No hay prisa para salir del dolor. El camino también es parte del proceso.' },
    { frase: 'La tristeza bien vivida se convierte en sabiduría.' },
    { frase: 'Permítete estar triste sin pedirte disculpas por ello.' },
  ];

  actividades = [
    { icono: '📖', titulo: 'Diario de emociones',       texto: 'Escribe libremente durante 10 minutos lo que sientes sin censurarte. No busques soluciones: solo describe. Esto libera la carga emocional acumulada.' },
    { icono: '🎵', titulo: 'Playlist de duelo consciente', texto: 'Crea una lista de canciones que acompañen tu tristeza (no que la eviten). Escucharla con atención plena puede ser catártico y liberador.' },
    { icono: '🌊', titulo: 'Llanto intencional',         texto: 'Si sientes el impulso, llora sin juzgarte. Pon música suave, crea un espacio seguro y permítete soltar. El llanto es una liberación fisiológica real.' },
    { icono: '🍵', titulo: 'Ritual de cuidado propio',   texto: 'Prepárate una bebida caliente, envuélvete en una manta y haz algo que te dé calma: leer, ver una película tranquila, o simplemente estar contigo.' },
    { icono: '🧘', titulo: 'Meditación de compasión',   texto: 'Siéntate en silencio y repite mentalmente: "Estoy sufriendo y eso está bien. Me merezco compasión." Hazlo durante 5 minutos con respiración lenta.' },
    { icono: '✉️', titulo: 'Carta a lo que perdiste',    texto: 'Escribe una carta a lo que extrañas: una persona, una etapa, una versión de ti. Despídete con amor. No hace falta enviarla; solo escribirla ya sana.' },
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