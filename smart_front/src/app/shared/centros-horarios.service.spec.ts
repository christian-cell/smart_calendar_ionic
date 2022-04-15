import { TestBed } from '@angular/core/testing';

import { CentrosHorariosService } from './centros-horarios.service';

describe('CentrosHorariosService', () => {
  let service: CentrosHorariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentrosHorariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
