import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoyaltycardPage } from './loyaltycard.page';

const routes: Routes = [
  {
    path: '',
    component: LoyaltycardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoyaltycardPage]
})
export class LoyaltycardPageModule {}
