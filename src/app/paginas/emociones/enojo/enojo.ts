import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-enojo',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './enojo.html',
  styleUrls: ['./enojo.css'],
})
export class Enojo {
  caracteristicas = [
    {
      icono: '⚡',
      titulo: 'Señal de límite violado',
      texto:
        'El enojo aparece cuando nuestros límites, valores o necesidades han sido traspasados. Es una alarma que nos dice "algo aquí no está bien".',
    },
    {
      icono: '🔥',
      titulo: 'Activación física',
      texto:
        'Aumenta la frecuencia cardíaca, la tensión muscular y la adrenalina. Nos prepara para actuar y defender lo que consideramos justo.',
    },
    {
      icono: '🛡️',
      titulo: 'Protector de la identidad',
      texto:
        'Nos ayuda a establecer límites claros y a defender nuestra integridad cuando sentimos que somos vulnerados.',
    },
    {
      icono: '⚖️',
      titulo: 'Motor de justicia',
      texto:
        'Bien canalizado, el enojo impulsa cambios sociales, denuncia injusticias y nos motiva a transformar situaciones que dañan.',
    },
    {
      icono: '💪',
      titulo: 'Energía de transformación',
      texto:
        'Cuando no se reprime, el enojo nos da la fuerza para romper patrones, decir "no" y emprender cambios necesarios.',
    },
    {
      icono: '🌋',
      titulo: 'Advertencia temprana',
      texto:
        'El enojo leve es una alerta preventiva. Ignorarlo permite que pequeñas molestias se acumulen hasta estallar sin control.',
    },
  ];

  pasos = [
    {
      titulo: 'Reconoce sin juzgarte',
      texto:
        'El enojo no es malo. Decir "estoy enojado" sin culpa es el primer paso. Permítete sentirlo sin actuar impulsivamente.',
    },
    {
      titulo: 'Detente y respira',
      texto:
        'Cuando notes el enojo, haz una pausa. Respira profundo 5 veces. Esto activa el sistema nervioso parasimpático y reduce la reactividad.',
    },
    {
      titulo: 'Identifica el límite violado',
      texto:
        'Pregúntate: ¿qué valor o necesidad fue afectado? ¿Respeto, justicia, tiempo, espacio? Nombrarlo te devuelve claridad.',
    },
    {
      titulo: 'Usa "yo" en lugar de acusar',
      texto:
        'Expresar desde "yo siento" en vez de "tú haces" transforma la comunicación. Ej: "Me siento frustrado" vs "siempre llegas tarde".',
    },
    {
      titulo: 'Canaliza la energía',
      texto:
        'El enojo es energía acumulada. Muévete: camina rápido, haz ejercicio, golpea una almohada. Descarga sin dañar.',
    },
    {
      titulo: 'Espera para actuar',
      texto:
        'Toma decisiones importantes cuando el enojo inicial haya bajado. La emoción pasajera no es la mejor consejera.',
    },
  ];

  beneficios = [
    {
      icono: '🎯',
      titulo: 'Límites claros',
      texto:
        'El enojo bien manejado nos enseña a establecer y comunicar límites saludables con los demás y con nosotros mismos.',
    },
    {
      icono: '⚙️',
      titulo: 'Autoconocimiento',
      texto:
        'Lo que nos enoja revela lo que valoramos profundamente. Es un espejo de nuestras necesidades y principios.',
    },
    {
      icono: '🛠️',
      titulo: 'Capacidad de cambio',
      texto:
        'El enojo es el combustible de muchas transformaciones personales y sociales. Sin él, las injusticias permanecen.',
    },
    {
      icono: '🤝',
      titulo: 'Comunicación honesta',
      texto:
        'Expresar enojo de forma asertiva fortalece las relaciones. La honestidad emocional construye vínculos más auténticos.',
    },
  ];

  citas = [
    { frase: 'El enojo no es el enemigo, es un mensajero que pide ser escuchado.' },
    { frase: 'Lo que te enoja te enseña lo que amas y lo que defiendes.' },
    { frase: 'No es el enojo lo que daña, sino lo que hacemos con él sin conciencia.' },
    { frase: 'El enojo que no se expresa a tiempo se convierte en resentimiento.' },
    { frase: 'Detrás de cada enojo hay una herida esperando ser reconocida.' },
    { frase: 'La ira es un viento que apaga la vela de la razón si no aprendes a navegarla.' },
    { frase: 'Decir "no" con firmeza es un acto de amor propio, no de agresividad.' },
    { frase: 'El enojo bien canalizado construye; mal dirigido, destruye.' },
    { frase: 'No reprimas tu fuego interno; aprende a hacer una fogata en lugar de un incendio.' },
    { frase: 'El respeto empieza donde estableces tus límites sin culpa.' },
    { frase: 'La persona que sabe manejar su enojo tiene más paz que quien lo evita.' },
    { frase: 'Permítete estar enojado, pero no dejes que el enojo te posea.' },
  ];

  actividades = [
    {
      icono: '🌬️',
      titulo: 'Respiración del dragón',
      texto:
        'Inhala profundo y exhala con fuerza por la boca, como si escupieras fuego. Repite 10 veces. Libera tensión acumulada de forma simbólica y efectiva.',
    },
    {
      icono: '📝',
      titulo: 'Carta no enviada',
      texto:
        'Escribe todo lo que sientes sin filtros, sin pensar en herir. Destrúyela después. Es una descarga segura que no daña relaciones.',
    },
    {
      icono: '💪',
      titulo: 'Descarga física consciente',
      texto:
        'Corre, golpea un cojín, haz sentadillas explosivas. El enojo es energía que necesita movimiento. Descárgala en algo que no te dañe ni dañe a otros.',
    },
    {
      icono: '🧊',
      titulo: 'Enfriamiento progresivo',
      texto:
        'Coloca tus manos bajo agua fría, siente cómo la temperatura baja. Es un ancla física que interrumpe el ciclo de activación del enojo.',
    },
    {
      icono: '🗣️',
      titulo: 'Práctica de asertividad',
      texto:
        'Frente al espejo, practica frases como: "Me siento enojado cuando... Necesito..." Gana confianza antes de la conversación real.',
    },
    {
      icono: '🔍',
      titulo: 'Diario de detonantes',
      texto:
        'Registra qué situaciones te enojan y por qué. Identifica patrones: ¿hay necesidades constantes que no estás protegiendo?',
    },
  ];

  /* ── Comentarios ── */
  comentarios: {
    nombre: string;
    avatar: string;
    fecha: string;
    texto: string;
    estrellas: number;
  }[] = [];

  nuevoComentario = { nombre: '', texto: '', estrellas: 5 };
  estrellasHover = 0;
  enviandoCom = false;
  comEnviado = false;

  get promedioEstrellas(): number {
    if (!this.comentarios.length) return 0;
    const total = this.comentarios.reduce((s, c) => s + c.estrellas, 0);
    return Math.round((total / this.comentarios.length) * 10) / 10;
  }

  get estrellasArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  agregarComentario(): void {
    if (!this.nuevoComentario.nombre.trim() || !this.nuevoComentario.texto.trim()) return;
    this.enviandoCom = true;
    setTimeout(() => {
      this.comentarios.unshift({
        nombre: this.nuevoComentario.nombre.trim(),
        avatar: this.nuevoComentario.nombre.trim().charAt(0).toUpperCase(),
        fecha: new Date().toLocaleDateString('es-PE', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
        texto: this.nuevoComentario.texto.trim(),
        estrellas: this.nuevoComentario.estrellas,
      });
      this.nuevoComentario = { nombre: '', texto: '', estrellas: 5 };
      this.enviandoCom = false;
      this.comEnviado = true;
      setTimeout(() => (this.comEnviado = false), 3000);
    }, 800);
  }

  setEstrellas(n: number): void {
    this.nuevoComentario.estrellas = n;
  }
}
