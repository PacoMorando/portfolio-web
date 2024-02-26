import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic-ruler-proyect',
  templateUrl: './graphic-ruler-proyect.component.html',
  styleUrls: ['./graphic-ruler-proyect.component.css']
})
export class GraphicRulerProyectComponent {
  protected proyectName: string = "Graphic Ruler";
  protected releaseURL: string = "https://play.google.com/store/apps/details?id=com.sas.graphicruler";
  protected gitHubURL: string = "https://github.com/PacoMorando/GraphicRuler";
  protected projectCode: string = `
package com.sas.graphicruler.views;

class Context {...

  static float getDeviceHeight() {
    return Context.getInstance().getResources().getDisplayMetrics().ydpi;

    static int getTotalScreenHeightInInches() {
      return (int) Math.ceil(Context.getInstance().getResources().getDisplayMetrics().heightPixels/Context.getDeviceHeight() + 1);
      //"+1" is a factor because the getDisplayMetrics().heightPixels is not considering the height pixel from the UI bars
  }
  static float getRealTotalScreenHeightInInches() {
      return Context.getInstance().getResources().getDisplayMetrics().heightPixels/Context.getDeviceHeight();
  }
}`;

}
