import { TestBed } from '@angular/core/testing';

import { ServiceIntroService } from './service-intro.service';

describe('ServiceIntroService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceIntroService = TestBed.get(ServiceIntroService);
    expect(service).toBeTruthy();
  });
});
