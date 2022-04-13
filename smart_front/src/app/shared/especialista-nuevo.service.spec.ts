import { TestBed } from '@angular/core/testing';

import { EspecialistaNuevoService } from './especialista-nuevo.service';

describe('EspecialistaNuevoService', () => {
  let service: EspecialistaNuevoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EspecialistaNuevoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
