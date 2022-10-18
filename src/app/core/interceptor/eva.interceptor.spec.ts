import { TestBed } from '@angular/core/testing';

import { EvaInterceptor } from './eva.interceptor';

describe('EvaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      EvaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: EvaInterceptor = TestBed.inject(EvaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
