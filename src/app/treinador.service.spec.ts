import { TestBed } from '@angular/core/testing';

import { TreinadorService } from './treinador.service';

describe('TreinadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreinadorService = TestBed.get(TreinadorService);
    expect(service).toBeTruthy();
  });
});
