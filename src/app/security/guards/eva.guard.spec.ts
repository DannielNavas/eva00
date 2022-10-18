import { TestBed } from '@angular/core/testing';

import { EvaGuard } from './eva.guard';

describe('EvaGuard', () => {
  let guard: EvaGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EvaGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
