import { TestBed } from '@angular/core/testing';

import { LoginBtnDisplayService } from './login-btn-display.service';

describe('LoginBtnDisplayService', () => {
  let service: LoginBtnDisplayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginBtnDisplayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
