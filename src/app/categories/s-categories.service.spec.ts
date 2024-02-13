import { TestBed } from '@angular/core/testing';

import { SCategoriesService } from './s-categories.service';

describe('SCategoriesService', () => {
  let service: SCategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SCategoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
