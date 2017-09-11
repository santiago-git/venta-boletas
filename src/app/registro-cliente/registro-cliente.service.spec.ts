import { TestBed, inject } from '@angular/core/testing';

import { RegistroClienteService } from './registro-cliente.service';

describe('RegistroClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistroClienteService]
    });
  });

  it('should be created', inject([RegistroClienteService], (service: RegistroClienteService) => {
    expect(service).toBeTruthy();
  }));
});
