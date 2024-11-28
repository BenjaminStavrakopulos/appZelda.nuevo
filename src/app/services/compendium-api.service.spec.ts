import { TestBed } from '@angular/core/testing';

import { CompendiumApiService } from './compendium-api.service';

describe('CompendiumApiService', () => {
  let service: CompendiumApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompendiumApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
