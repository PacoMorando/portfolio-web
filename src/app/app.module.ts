import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProyectCardComponent } from './components/proyect-card/proyect-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProyectCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
