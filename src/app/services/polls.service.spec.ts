import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { Router } from "@angular/router";
import { PollsService } from './polls.service';

const routerSpy = { navigate: jasmine.createSpy('navigate') };

describe('PollsService', () => {
  let service: PollsService;

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
    service = TestBed.inject(PollsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
