import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
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

const appRoute:Routes = [
  {path:'',component:HomeComponent},
  {path:'auth',component:LoginComponent},
  {path:'mens',component:MensComponent},
  {path:'womens',component:WomensComponent},
  {path:'kids',component:KidsComponent},
  {path:'footwear',component:FootwearComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'cartpage',component:CardPage1Component},
]

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    MensComponent,
    WomensComponent,
    HeaderComponent,
    FooterComponent,
    KidsComponent,
    CardPage1Component,
    HomeComponent,
    FootwearComponent,
    FirstComponent,
    NewhaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [CardPage1Component,MensComponent,WomensComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
