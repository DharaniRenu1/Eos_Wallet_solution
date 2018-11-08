import { TestBed } from '@angular/core/testing';

import { MurmurService } from './murmur.service';

describe('MurmurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MurmurService = TestBed.get(MurmurService);
    expect(service).toBeTruthy();
  });
});
