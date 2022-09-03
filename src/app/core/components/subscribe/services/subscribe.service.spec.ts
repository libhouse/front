import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SubscribeService } from './subscribe.service';
import { mockData} from 'src/app/shared/tests/servicesMock/SubscribeMockService';

describe('SubscribeService', () => {
  let service: SubscribeService;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SubscribeService]
    });

    service = TestBed.inject(SubscribeService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it(`#${SubscribeService.prototype.subscribe.name} should post user`, (done) => {

    service.subscribe(mockData.data).subscribe({
      next: (user) => {
        expect(mockData.data).toBe(user);
        done();
      }
    })

    httpController.expectOne(mockData.api).flush(mockData.data)
  });
});
