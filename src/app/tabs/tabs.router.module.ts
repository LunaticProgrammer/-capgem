import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { Home2Page } from '../home2/home2.page';
import { LoginPage } from '../login/login.page';
import { ProfilePage } from '../profile/profile.page';
import { LoyaltycardPage } from '../loyaltycard/loyaltycard.page';
import { RedeemPage } from '../redeem/redeem.page';
import { WalletPage } from '../wallet/wallet.page';
import { ScanPage } from '../scan/scan.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(home2:home2)',
        pathMatch: 'full'
      },
      {
        path: 'home2',
        outlet: 'home2',
        component: Home2Page
      },
      {
        path: 'login',
        outlet : 'login',
        component : LoginPage
      },
      {

        path: 'profile',
        outlet : 'profile',
        component : ProfilePage
      },
      {
        path: 'card',
        outlet : 'card',
        component: LoyaltycardPage
      },
      {
        path : 'redeem',
        outlet : 'redeem',
        component : RedeemPage
      },
      {
        path : 'wallet',
        outlet : 'wallet',
        component : WalletPage
      },
      {
        path : 'scan',
        outlet : 'scan',
        component : ScanPage
      },
      {
        path : 'home',
        outlet: 'home',
        component : HomePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(home2:home2)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
