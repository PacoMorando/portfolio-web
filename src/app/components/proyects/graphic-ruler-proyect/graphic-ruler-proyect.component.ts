import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-ruler-proyect',
  templateUrl: './graphic-ruler-proyect.component.html',
  styleUrls: ['./graphic-ruler-proyect.component.css']
})
export class GraphicRulerProyectComponent {
  protected proyectName: string = "Graphic Ruler";
  protected releaseURL: string = "https://play.google.com/store/apps/details?id=com.sas.graphicruler";
  protected gitHubURL: string = "https://github.com/PacoMorando";//TODO FALTA ACTUALIZAR URL DEL REPOSITORIO

}
