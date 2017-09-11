import { TestBed, inject } from '@angular/core/testing';

import { CompraBoletaService } from './compra-boleta.service';

describe('CompraBoletaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CompraBoletaService]
    });
  });

  it('should be created', inject([CompraBoletaService], (service: CompraBoletaService) => {
    expect(service).toBeTruthy();
  }));
});
