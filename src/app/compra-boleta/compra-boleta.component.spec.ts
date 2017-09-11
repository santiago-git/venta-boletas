import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraBoletaComponent } from './compra-boleta.component';

describe('CompraBoletaComponent', () => {
  let component: CompraBoletaComponent;
  let fixture: ComponentFixture<CompraBoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraBoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
