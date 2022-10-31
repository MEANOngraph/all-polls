import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { PollsService } from 'src/app/services/polls.service';
import { Router } from "@angular/router";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { PollsVotingComponent } from './polls-voting.component';


class ToasterMock {
  success(message: string): void { resMessage = message; }
}
let resMessage: string = '';
const routerSpy = { navigate: jasmine.createSpy('navigate') };

const activatedRouteStub = { params: { subscribe() { return { data: 21 }; } } };

describe('PollsVotingComponent', () => {
  let component: PollsVotingComponent;
  let fixture: ComponentFixture<PollsVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub
        },
        {
          provide: ToastrService,
          useClass: ToasterMock
        },
        {
          provide: Router,
          useValue: routerSpy
        },
        PollsService
      ],
      declarations: [PollsVotingComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PollsVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
