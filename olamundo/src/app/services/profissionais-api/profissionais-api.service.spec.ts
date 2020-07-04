import { TestBed } from '@angular/core/testing';

import { ProfissionaisApiService } from './profissionais-api.service';

describe('ProfissionaisApiService', () => {
  let service: ProfissionaisApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfissionaisApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
