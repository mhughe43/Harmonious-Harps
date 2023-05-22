import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landingPage/landing-page.component';
import { InformationPageComponent } from './informationPage/information-page.component';
import { PrivatepolicyPageComponent } from './privatepolicy-page/privatepolicy-page.component';
import { ShopPageComponent } from './shop-page/shop-page.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    InformationPageComponent,
    PrivatepolicyPageComponent,
    ShopPageComponent,
    NavigationComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
