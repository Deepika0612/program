import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CircularDetails } from './circulardetails.service';

describe('CirculardetailsService', () => {
  let service: CircularDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[CircularDetails]
    });
    service = TestBed.inject(CircularDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
