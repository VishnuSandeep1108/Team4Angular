import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { RouterModule,Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TemplateModule } from './template/template.module';
import { FirstComponent } from './first/first.component';
import { NewhaderComponent } from './newhader/newhader.component';

const appRoutes:Routes = [
  {path:'',component:FirstComponent},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'footwear',component:FootwearComponent},
  {path:'kids',component:KidsComponent},
  {path:'men',component:MensComponent},
  {path:'women',component:WomensComponent},
  {path:'wishlist',component:WishlistComponent},
  {path:'cartlist',component:CardPage1Component},
  {path:'not-found',component:NotFoundComponent},
  {path:'**',redirectTo:'not-found'}

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
    RouterModule.forRoot(appRoutes),
    TemplateModule
  ],
  providers: [CardPage1Component,MensComponent,WomensComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
