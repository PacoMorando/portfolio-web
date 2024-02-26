import { Component, OnInit } from '@angular/core';
import { MasterMindProyectComponent } from './master-mind-proyect/master-mind-proyect.component';
import { GraphicRulerProyectComponent } from './graphic-ruler-proyect/graphic-ruler-proyect.component';
import { ListagramProyectComponent } from './listagram-proyect/listagram-proyect.component';
import { ExercisesComponent } from './exercises/exercises.component';

declare var window: any;

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  private proyectModal: any;
  protected proyectName: string = "Nombre del proyecto";
  protected componentSlected:any;
  protected proyectsMap = new Map<string, any>();

  ngOnInit(): void {
    this.proyectModal = new window.bootstrap.Modal(document.getElementById("proyectModal"));
    this.proyectsMap.set("Multiplatform Game", MasterMindProyectComponent);
    this.proyectsMap.set("Graphic Ruler", GraphicRulerProyectComponent);
    this.proyectsMap.set("Listagram", ListagramProyectComponent);
    this.proyectsMap.set("Exercises", ExercisesComponent);
  }

  protected showProject(proyectName: string) {
    this.proyectName = proyectName;
    this.componentSlected = this.proyectsMap.get(proyectName);
    this.proyectModal.show();
    console.log("Card: " + this.proyectName + " selected");
  }
}