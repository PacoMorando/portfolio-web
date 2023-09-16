import { Component, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-proyect-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.css']
})
export class ProyectCardComponent implements OnInit {
  private proyectModal: any;
  protected proyectName: string = "Nombre del proyecto";

  ngOnInit(): void {
    this.proyectModal = new window.bootstrap.Modal(document.getElementById("proyectModal"));
  }

  protected showProject(proyectName: string ) {
    this.proyectName = proyectName;
    this.proyectModal.show();
    console.log("Card: " + this.proyectName + " picada");
  }
}