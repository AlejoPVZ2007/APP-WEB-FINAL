import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {

  buscar(event: Event){
    event.preventDefault();

    const input = (document.getElementById('searchInput') as HTMLInputElement);
    const texto = input.value.trim();

    if(texto){
      console.log("Buscar emoción:", texto);
      // aquí luego puedes conectar el buscador con emociones
    }
  }

}