import { Component } from '@angular/core';

@Component({
  selector: 'app-listagram-proyect',
  templateUrl: './listagram-proyect.component.html',
  styleUrls: ['./listagram-proyect.component.css']
})
export class ListagramProyectComponent {
  protected proyectName: string = "Listagram";
  protected releaseURL: string = "https://play.google.com/store/apps/details?id=com.sas.listagram";
  protected gitHubURL: string = "https://github.com/PacoMorando/Listagram";//TODO FALTA ACTUALIZAR URL DEL REPOSITORIO
}
