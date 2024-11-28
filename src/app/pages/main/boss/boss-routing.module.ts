import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BossPage } from './boss.page';

const routes: Routes = [
  {
    path: '',
    component: BossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BossPageRoutingModule {}
