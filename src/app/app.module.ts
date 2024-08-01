import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { WomensComponent } from './womens/womens.component';
=======
import { WishlistComponent } from './wishlist/wishlist.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KidsComponent } from './kids/kids.component';
import { CardPage1Component } from './card-page1/card-page1.component';
import { HomeComponent } from './home/home.component';
import { FootwearComponent } from './footwear/footwear.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    WomensComponent
=======
    WishlistComponent,
    MensComponent,
    WomensComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    KidsComponent,
    CardPage1Component,
    HomeComponent,
    FootwearComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
