import { TestBed } from '@angular/core/testing';

import { LoginObsService } from './login-obs.service';

describe('LoginObsService', () => {
  let service: LoginObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
