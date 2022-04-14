import { TestBed } from '@angular/core/testing';

import { CentroHorarioNuevoService } from './centro-horario-nuevo.service';

describe('CentroHorarioNuevoService', () => {
  let service: CentroHorarioNuevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroHorarioNuevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
