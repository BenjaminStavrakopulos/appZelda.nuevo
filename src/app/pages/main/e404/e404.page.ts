import { Component, OnInit } from '@angular/core';
import emailjs from 'emailjs-com';
import { Router } from '@angular/router';


@Component({
  selector: 'app-e404',
  templateUrl: './e404.page.html',
  styleUrls: ['./e404.page.scss'],
})
export class E404Page {

  errorDescription: string = ''; // Descripción del error

  constructor(private router: Router) {}

  sendErrorEmail() {
    // Verifica si la descripción del error no está vacía
    if (!this.errorDescription) {
      alert('Por favor, describe el error antes de enviarlo.');
      return;
    }

    const templateParams = {
      user_description: this.errorDescription,
      to_email: 'raiznumero1@gmail.com', 
    };

    emailjs.send('service_7jp3xvb', 'template_thvzd9s', templateParams, 'gnk8qsbH9Ze-NAHgd')
      .then((response) => {
        console.log('Correo enviado con éxito:', response);
        alert('Correo enviado exitosamente.');
        // Redirige al usuario a la página de inicio (auth)
        this.router.navigate(['/auth']);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un error al enviar el correo. Intenta de nuevo más tarde.');
      });
      
  }

  
}