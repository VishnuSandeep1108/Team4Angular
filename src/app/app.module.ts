import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';

@NgModule({
  declarations: [
    AppComponent,
    MensComponent,
    WomensComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
