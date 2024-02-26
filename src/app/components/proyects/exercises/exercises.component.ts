import { Component } from '@angular/core';

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.css']
})
export class ExercisesComponent {
  protected proyectName: string = "API consume exercises";
  protected gitHubURL: string = "https://github.com/PacoMorando/";
  protected randomUsersWebApp: string = "https://pacomorando.github.io/practica-random-users/";
  protected randomUsersAngular: string = "https://github.com/PacoMorando/practica-random-users";
  protected randomUsersAndroid: string = "https://github.com/PacoMorando/practica-random-users-android";
  protected meliWebApp: string = "https://pacomorando.github.io/practica-product-search";
  protected meliAngular: string = "https://github.com/PacoMorando/practica-product-search";
  protected meliAndroid: string = "https://github.com/PacoMorando/practica-product-search-android";
}