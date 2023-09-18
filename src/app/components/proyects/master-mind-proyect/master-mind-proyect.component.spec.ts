import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMindProyectComponent } from './master-mind-proyect.component';

describe('MasterMindProyectComponent', () => {
  let component: MasterMindProyectComponent;
  let fixture: ComponentFixture<MasterMindProyectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterMindProyectComponent]
    });
    fixture = TestBed.createComponent(MasterMindProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
