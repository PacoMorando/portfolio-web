import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { MasterMindProyectComponent } from './components/proyects/master-mind-proyect/master-mind-proyect.component';
import { GraphicRulerProyectComponent } from './components/proyects/graphic-ruler-proyect/graphic-ruler-proyect.component';
import { ListagramProyectComponent } from './components/proyects/listagram-proyect/listagram-proyect.component';
import { ExercisesComponent } from './components/proyects/exercises/exercises.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProyectsComponent,
    MasterMindProyectComponent,
    GraphicRulerProyectComponent,
    ListagramProyectComponent,
    ExercisesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
