import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { KidsComponent } from './kids/kids.component';
import { CartPageComponent } from './cartpage/cartpage.component';
import { HomeComponent } from './home/home.component';
import { FootwearComponent } from './footwear/footwear.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'mens', component: MensComponent },
  { path: 'womens', component: WomensComponent },
  { path: 'login', component: LoginComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'cartpage', component: CartPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'footwear', component: FootwearComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    WishlistComponent,
    MensComponent,
    WomensComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    KidsComponent,
    CartPageComponent,
    HomeComponent,
    FootwearComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
