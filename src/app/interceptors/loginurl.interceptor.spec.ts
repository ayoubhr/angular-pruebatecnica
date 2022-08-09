import { TestBed } from '@angular/core/testing';

import { LoginurlInterceptor } from './loginurl.interceptor';

describe('LoginurlInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoginurlInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoginurlInterceptor = TestBed.inject(LoginurlInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
