import { TestBed } from '@angular/core/testing';

import { CentrosHorariosActualizaService } from './centros-horarios-actualiza.service';

describe('CentrosHorariosActualizaService', () => {
  let service: CentrosHorariosActualizaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosHorariosActualizaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
