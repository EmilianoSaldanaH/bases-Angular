import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bases-angular';

  dobleNumero(x: number): number {
    return x * 2;
  }

  alumno = {
    nombre: 'Juan',
    edad: 25,
    curso: 'Angular',
    fechaInscrito: new Date(),
    pago: 1000, // Definido el pago
    page: 2220
  };
}
