import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagramProyectComponent } from './listagram-proyect.component';

describe('ListagramProyectComponent', () => {
  let component: ListagramProyectComponent;
  let fixture: ComponentFixture<ListagramProyectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagramProyectComponent]
    });
    fixture = TestBed.createComponent(ListagramProyectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
