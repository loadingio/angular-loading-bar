import { TestBed, inject } from '@angular/core/testing';

import { AngularLoadingBarService } from './angular-loading-bar.service';

describe('AngularLoadingBarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularLoadingBarService]
    });
  });

  it('should be created', inject([AngularLoadingBarService], (service: AngularLoadingBarService) => {
    expect(service).toBeTruthy();
  }));
});
