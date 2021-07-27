import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { SpinnerService } from './spinner.service';

describe('SpinnerService', () => {
  let service: SpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calling getSpinnerObserver on inititaion should return an obseravble of false', () => {
    const getSpinner = service.getSpinnerObserver()
    expect(getSpinner).toBeTruthy(of(false));
  });

  it('spinner status should be true if we call requestStarted', () => {
    service.requestStarted()
    const getSpinner = service.getSpinnerObserver()
    expect(getSpinner).toBeTruthy(of(true));
  });

  
  it('spinner status should be false if we call requestStarted', () => {
    service.requestEnded()
    const getSpinner = service.getSpinnerObserver()
    expect(getSpinner).toBeTruthy(of(false));
  });
});
