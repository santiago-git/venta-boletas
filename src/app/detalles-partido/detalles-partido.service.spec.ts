import { TestBed, inject } from '@angular/core/testing';

import { DetallesPartidoService } from './detalles-partido.service';

describe('DetallesPartidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetallesPartidoService]
    });
  });

  it('should be created', inject([DetallesPartidoService], (service: DetallesPartidoService) => {
    expect(service).toBeTruthy();
  }));
});
