import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { AppService } from './app.service';

describe('AppServieService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = new AppService(HttpClient as any);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
