import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BossPageRoutingModule } from './boss-routing.module';
import { BossPage } from './boss.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BossPageRoutingModule,
    SharedModule
  ],
  declarations: [BossPage]
})
export class BossPageModule {}
