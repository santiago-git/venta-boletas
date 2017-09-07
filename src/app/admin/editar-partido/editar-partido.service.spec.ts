import { TestBed, inject } from '@angular/core/testing';

import { EditarPartidoService } from './editar-partido.service';

describe('EditarPartidoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditarPartidoService]
    });
  });

  it('should be created', inject([EditarPartidoService], (service: EditarPartidoService) => {
    expect(service).toBeTruthy();
  }));
});
