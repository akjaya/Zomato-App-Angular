import { TestBed, async, inject } from '@angular/core/testing';

import { CanActiavteRouteGuard } from './can-actiavte-route.guard';

describe('CanActiavteRouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CanActiavteRouteGuard]
    });
  });

  it('should ...', inject([CanActiavteRouteGuard], (guard: CanActiavteRouteGuard) => {
    expect(guard).toBeTruthy();
  }));
});
