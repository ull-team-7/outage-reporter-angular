import { TestBed } from '@angular/core/testing';

import { UtilityAreaService } from './utility-area.service';

describe('UtilityAreaService', () => {
  let service: UtilityAreaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilityAreaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
