import { TestBed, inject } from '@angular/core/testing';

import { NuevoPartidoService } from './nuevo-partido.service';

describe('NuevoPartidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NuevoPartidoService]
    });
  });

  it('should be created', inject([NuevoPartidoService], (service: NuevoPartidoService) => {
    expect(service).toBeTruthy();
  }));
});
