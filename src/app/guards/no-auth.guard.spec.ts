import { TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { NoAuthGuard } from './no-auth.guard';

const routerSpy = { navigate: jasmine.createSpy('navigate') };

describe('NoAuthGuard', () => {
  let guard: NoAuthGuard;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: Router,
          useValue: routerSpy
        }
      ]
    });
    service = TestBed.inject(ApiService);
    guard = TestBed.inject(NoAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
