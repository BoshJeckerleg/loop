import { TestBed } from '@angular/core/testing';

import { RecordingHttpService } from './recording-http.service';

describe('RecordingHttpService', () => {
  let service: RecordingHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordingHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
