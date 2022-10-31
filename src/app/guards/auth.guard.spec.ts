import { TestBed } from '@angular/core/testing';
import { Router } from "@angular/router";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { AuthGuard } from './auth.guard';

const routerSpy = { navigate: jasmine.createSpy('navigate') };

describe('AuthGuard', () => {
  let guard: AuthGuard;
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
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
