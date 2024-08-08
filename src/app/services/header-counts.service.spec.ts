import { TestBed } from '@angular/core/testing';

import { HeaderCountsService } from './header-counts.service';

describe('HeaderCountsService', () => {
  let service: HeaderCountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderCountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
