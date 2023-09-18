import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicRulerProyectComponent } from './graphic-ruler-proyect.component';

describe('GraphicRulerProyectComponent', () => {
  let component: GraphicRulerProyectComponent;
  let fixture: ComponentFixture<GraphicRulerProyectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphicRulerProyectComponent]
    });
    fixture = TestBed.createComponent(GraphicRulerProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
