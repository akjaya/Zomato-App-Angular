import { TestBed } from '@angular/core/testing';

import { FavouriteserviceService } from './favouriteservice.service';

describe('FavouriteserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FavouriteserviceService = TestBed.get(FavouriteserviceService);
    expect(service).toBeTruthy();
  });
});
