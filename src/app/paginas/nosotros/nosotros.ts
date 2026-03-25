import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nosotros.html',
  styleUrls: ['./nosotros.css']
})
export class Nosotros {

  /* ── Equipo ── */
  equipo = [
    {
      nombre:    'Jhordy Albujar',
      rol:       'Líder del proyecto',
      bio:       'Apasionada por la psicología y el desarrollo web. Coordina el equipo y la visión del proyecto.',
      foto:      'assets/images/Jhordy.png',
      linkedin:  'https://www.linkedin.com/in/jhordy-albujar-ponte-4b3299354?utm_source=share_via&utm_content=profile&utm_medium=member_android',
      github:    'https://github.com/Jhordy-dev25',
      instagram: '',
      tiktok:    '',
      facebook:  ''
    },
    {
      nombre:    'Rodriguez Villanueva',
      rol:       'Desarrollador Frontend',
      bio:       'Especialista en Angular y diseño de interfaces. Construye la experiencia visual del proyecto.',
      foto:      'assets/images/Gerson.jpg',
      linkedin:  'https://linkedin.com',
      github:    'https://github.com/Gerson-rv',
      instagram: '',
      tiktok:    '',
      facebook:  ''
    },
    {
      nombre:    'Alejandro Matamoro',
      rol:       'Diseñador UX/UI',
      bio:       'Crea experiencias intuitivas y accesibles. Responsable de la identidad visual de la plataforma.',
      foto:      'assets/images/equipo/maria.jpg',
      linkedin:  'https://linkedin.com',
      github:    '',
      instagram: '',
      tiktok:    '',
      facebook:  ''
    },
    {
      nombre:    'Ronny Mondalgo',
      rol:       'Investigador de contenido',
      bio:       'Psicólogo en formación. Redacta y valida el contenido emocional basado en evidencia científica.',
      foto:      'assets/images/Ronny.jpg',
      linkedin:  'https://www.linkedin.com/in/ronny-mondalgo-tintaya-a93139376/',
      github:    'https://github.com/ronnymt51',
      instagram: '',
      tiktok:    '',
      facebook:  ''
    },
    {
      nombre:    'Leandro Ledesma',
      rol:       'Desarrollador Backend',
      bio:       'Gestiona la base de datos y la integración con Firebase. Garantiza la seguridad del sistema.',
      foto:      'assets/images/Leandro.jpg',
      linkedin:  'https://linkedin.com',
      github:    'https://github.com',
      instagram: '',
      tiktok:    '',
      facebook:  ''
    },
  ];

  /* ── Beneficios ── */
  beneficios = [
    { num: '01', titulo: 'Basado en ciencia',    texto: 'Todo el contenido está respaldado por investigaciones en psicología y neurociencia.' },
    { num: '02', titulo: 'Acceso gratuito',       texto: 'Creemos que el bienestar emocional debe ser accesible para todos sin barreras.' },
    { num: '03', titulo: 'Contenido actualizado', texto: 'Incorporamos constantemente nuevas emociones y herramientas de gestión emocional.' },
    { num: '04', titulo: 'Comunidad activa',      texto: 'Más de 2,000 personas ya exploran sus emociones con nosotros cada mes.' },
  ];

  /* ── Servicios ── */
  servicios = [
    { icono: '🧭', titulo: 'Exploración emocional',  texto: 'Descubre y aprende sobre más de 9 emociones fundamentales con contenido detallado y científico.' },
    { icono: '📚', titulo: 'Guías de gestión',        texto: 'Recursos prácticos para manejar tus emociones en situaciones cotidianas y de alta intensidad.' },
    { icono: '🔍', titulo: 'Buscador emocional',      texto: 'Encuentra rápidamente la emoción que describes con nuestro sistema de búsqueda inteligente.' },
    { icono: '💬', titulo: 'Contenido personalizado', texto: 'Información adaptada a distintas etapas de la vida y contextos emocionales.' },
    { icono: '🔒', titulo: 'Perfil seguro',           texto: 'Tu cuenta protegida con Firebase Authentication para una experiencia personalizada y privada.' },
    { icono: '📱', titulo: 'Diseño responsive',       texto: 'Accede desde cualquier dispositivo con una experiencia optimizada para móvil y escritorio.' },
  ];

  /* ── Formulario de contacto ── */
  contacto = { nombre: '', email: '', asunto: '', mensaje: '' };
  enviando = false;
  enviado  = false;

  enviarMensaje(): void {
    if (!this.contacto.nombre || !this.contacto.email || !this.contacto.mensaje) return;
    this.enviando = true;
    setTimeout(() => {
      this.enviando = false;
      this.enviado  = true;
      this.contacto = { nombre: '', email: '', asunto: '', mensaje: '' };
      setTimeout(() => this.enviado = false, 4000);
    }, 1500);
  }
}