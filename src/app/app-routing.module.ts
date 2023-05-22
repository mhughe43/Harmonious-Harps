import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { InformationPageComponent } from './informationPage/information-page.component';
import { LandingPageComponent } from './landingPage/landing-page.component';
import { PrivatepolicyPageComponent } from './privatepolicy-page/privatepolicy-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'info', component: InformationPageComponent},
  { path: 'shop', component: ShopPageComponent},
  { path: 'privacy-policy', component: PrivatepolicyPageComponent},
  { path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
