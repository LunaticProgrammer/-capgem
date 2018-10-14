import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { Home2PageModule } from '../home2/home2.module';
import { LoginPageModule } from '../login/login.module';
import { ProfilePageModule } from '../profile/profile.module';
import { LoyaltycardPageModule } from '../loyaltycard/loyaltycard.module';
import { RedeemPageModule } from '../redeem/redeem.module';
import { WalletPageModule } from '../wallet/wallet.module';
import { ScanPageModule } from '../scan/scan.module';
import { HomePageModule } from '../home/home.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    Home2PageModule,
    LoginPageModule,
    ProfilePageModule,
    LoyaltycardPageModule,
    RedeemPageModule,
    WalletPageModule,
    ScanPageModule,
    HomePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
