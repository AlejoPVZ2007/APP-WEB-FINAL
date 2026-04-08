import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit {

  // Estado lámpara
  isLit = false;
  flickering = false;
  pulling = false;

  // Estado formulario
  isRegister = false;
  name = '';
  email = '';
  password = '';
  confirmPassword = '';
  rememberMe = true;

  // Estado éxito
  loginSuccess = false;
  successTitle = '';
  successMsg = '';

  // Error
  errorMsg = '';

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit(): void {
    const navbar = document.querySelector('app-navbar') as HTMLElement;
    const footer = document.querySelector('app-footer') as HTMLElement;
    if (navbar) this.renderer.setStyle(navbar, 'display', 'none');
    if (footer) this.renderer.setStyle(footer, 'display', 'none');
  }

  ngOnDestroy(): void {
    const navbar = document.querySelector('app-navbar') as HTMLElement;
    const footer = document.querySelector('app-footer') as HTMLElement;
    if (navbar) this.renderer.removeStyle(navbar, 'display');
    if (footer) this.renderer.removeStyle(footer, 'display');
  }

  toggleLamp(): void {
    this.isLit = !this.isLit;
    if (this.isLit) {
      this.flickering = true;
      setTimeout(() => (this.flickering = false), 550);
    }
  }

  switchTab(register: boolean): void {
    this.isRegister = register;
    this.loginSuccess = false;
    this.errorMsg = '';
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  onAction(): void {
    this.errorMsg = '';

    if (!this.isLit) {
      this.toggleLamp();
      return;
    }

    if (this.isRegister) {
      if (!this.name || !this.email || !this.password || !this.confirmPassword) {
        this.errorMsg = '⚠️ Por favor rellena todos los campos.';
        return;
      }
      if (!this.emailValido(this.email)) {
        this.errorMsg = '⚠️ Ingresa un correo válido. Ej: correo@gmail.com';
        return;
      }
      if (this.password !== this.confirmPassword) {
        this.errorMsg = '⚠️ Las contraseñas no coinciden.';
        return;
      }
    } else {
      if (!this.email || !this.password) {
        this.errorMsg = '⚠️ Por favor ingresa tu correo y contraseña.';
        return;
      }
      if (!this.emailValido(this.email)) {
        this.errorMsg = '⚠️ Ingresa un correo válido. Ej: correo@gmail.com';
        return;
      }
    }

    if (this.isRegister) {
      this.successTitle = '¡Cuenta creada!';
      this.successMsg = `Bienvenido${this.name ? ' ' + this.name : ''} a Viaja por Tus Emociones`;
    } else {
      this.successTitle = '¡Bienvenido!';
      this.successMsg = 'Ingresando a tu viaje emocional...';
    }

    // Guarda el email al iniciar sesión
    localStorage.setItem('userEmail', this.email);

    this.loginSuccess = true;
    setTimeout(() => this.router.navigate(['/principal']), 2000);
  }

  socialLogin(provider: string): void {
    if (!this.isLit) {
      this.toggleLamp();
      return;
    }
    
    localStorage.setItem('userEmail', this.email || provider.toLowerCase() + '@gmail.com');
    this.successTitle = `¡Conectado con ${provider}!`;
    this.successMsg = 'Ingresando a Viaja por Tus Emociones...';
    this.loginSuccess = true;
    setTimeout(() => this.router.navigate(['/principal']), 2000);
  }

  private emailValido(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

}