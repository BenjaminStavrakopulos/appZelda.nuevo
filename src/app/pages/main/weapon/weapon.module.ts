import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeaponPageRoutingModule } from './weapon-routing.module';

import { WeaponPage } from './weapon.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeaponPageRoutingModule,
    SharedModule
  ],
  declarations: [WeaponPage]
})
export class WeaponPageModule {}
