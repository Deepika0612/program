import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { CircularService } from '../service/circular.service';


describe('ViewCircularDetailsComponent testing', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should create : CircularService', inject([CircularService], (service: CircularService) => {
    expect(service).toBeTruthy();
  }));
});
