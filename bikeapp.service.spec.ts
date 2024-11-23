import { TestBed } from '@angular/core/testing';

import { BikeappService } from './bikeapp.service';

describe('BikeappService', () => {
  let service: BikeappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
