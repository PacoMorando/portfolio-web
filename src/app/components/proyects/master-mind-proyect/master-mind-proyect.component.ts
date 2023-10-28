import { Component } from '@angular/core';

@Component({
  selector: 'app-master-mind-proyect',
  templateUrl: './master-mind-proyect.component.html',
  styleUrls: ['./master-mind-proyect.component.css']
})
export class MasterMindProyectComponent {
  protected proyectName: string = "Master Mind";
  protected releaseURL: string = "https://play.google.com/store/apps/developer?id=Saturn+Apple+Studios";
  protected gitHubURL: string = "https://github.com/PacoMorando/multiplatform-master-mind";
  protected gitHubCoreURL: string = "https://github.com/PacoMorando/master-mind-core";
  protected gitHubConsoleURL: string = "https://github.com/PacoMorando/master-mind-console";
  protected gitHubAndroidURL: string = "https://github.com/PacoMorando/master-mind-android";
  protected gitHubAPIURL: string = "https://github.com/PacoMorando/master-mind-api";
  protected gitHubWebURL: string = "https://github.com/PacoMorando/master-mind-web";
}
