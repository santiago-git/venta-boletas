import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPartidoComponent } from './nuevo-partido.component';

describe('NuevoPartidoComponent', () => {
  let component: NuevoPartidoComponent;
  let fixture: ComponentFixture<NuevoPartidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPartidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
