import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-boss',
  templateUrl: './boss.page.html',
  styleUrls: ['./boss.page.scss'],
})
export class BossPage implements OnInit {
  loading: any;
  bosses: any[] = []; 
  isLoading: boolean = true; 

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.loadBosses(); 
  }

  async loadBosses() {
    this.loading = await this.loadingController.create({
      message: 'Cargando monstruos...',
    });
    await this.loading.present();

    const apiUrl = 'https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters';

    this.http.get<any>(apiUrl).subscribe(
      async (response) => {
        console.log('Bosses recibidos:', response);
        this.bosses = response.data; 
        this.isLoading = false; 
        await this.loading.dismiss(); 
      },
      async (error) => {
        console.error('Error al cargar los bosses:', error);
        this.isLoading = false; 
        await this.loading.dismiss(); 
        this.presentToast('Error al cargar los bosses. Verifica tu conexión.', 'top', 3000); 
      }
    );
  }

  async presentToast(message: string, position: 'top' | 'middle' | 'bottom', duration: number) {
    const toast = await this.toastController.create({
      message,
      duration,
      position,
    });
    await toast.present();
  }
}
