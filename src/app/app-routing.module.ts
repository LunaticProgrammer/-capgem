import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: '', loadChildren : './tabs/tabs.module#TabsPageModule' },
  { path : 'login', loadChildren : './login/login.module#LoginPageModule' },
  { path : 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path : 'cart', loadChildren : './cart/cart.module#CartPageModule' },
  { path: 'product', loadChildren: './product/product.module#ProductPageModule' }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
