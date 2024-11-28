import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.page.html',
  styleUrls: ['./weapon.page.scss'],
})
export class WeaponPage {
  loading: any;
  weapons: any[] = []; // Almacena la lista de armas
  isLoading: boolean = true; // Para controlar el estado de carga

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.loadWeapons(); // Cargar las armas al iniciar la página
  }

  // Método para cargar las armas de la API
  async loadWeapons() {
    this.loading = await this.loadingController.create({
      message: 'Cargando armas...',
    });
    await this.loading.present();

    const apiUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment'; // URL de la API para las armas

    this.http.get<any>(apiUrl).subscribe(
      async (response) => {
        this.weapons = response.data; // Almacena los datos de las armas
        this.isLoading = false; // Deja de mostrar el indicador de carga
        await this.loading.dismiss();
      },
      async (error) => {
        console.error('Error al cargar las armas:', error);
        this.isLoading = false;
        await this.loading.dismiss();
        this.presentToast('Error al cargar las armas. Verifica tu conexión o la URL de la API.', 'top', 3000);
      }
    );
  }

  // Método para mostrar un Toast de error
  async presentToast(message: string, position: 'top' | 'middle' | 'bottom', duration: number) {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
    });
    await toast.present();
  }
}
