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
  translateApiKey: string = 'TU_CLAVE_API'; // Clave de la API de traducción
  translateApiUrl: string = 'https://translation.googleapis.com/language/translate/v2'; // URL de Google Translate API

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
        const weapons = response.data; // Obtén los datos de las armas
        this.weapons = await this.translateWeapons(weapons); // Traduce los datos
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

  // Método para traducir la lista de armas
  async translateWeapons(weapons: any[]): Promise<any[]> {
    const translatedWeapons = await Promise.all(
      weapons.map(async (weapon: any) => {
        const translatedName = await this.translateText(weapon.name, 'es'); // Traduce el nombre
        const translatedDescription = await this.translateText(weapon.description || '', 'es'); // Traduce la descripción
        return {
          ...weapon,
          name: translatedName,
          description: translatedDescription,
        };
      })
    );
    return translatedWeapons;
  }

  // Método para traducir texto usando la API de Google Translate
  async translateText(text: string, targetLanguage: string): Promise<string> {
    const body = {
      q: text,
      target: targetLanguage,
      key: this.translateApiKey,
    };

    try {
      const response: any = await this.http.post(this.translateApiUrl, body).toPromise();
      return response.data.translations[0].translatedText;
    } catch (error) {
      console.error('Error al traducir el texto:', error);
      return text; // En caso de error, devuelve el texto original
    }
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
