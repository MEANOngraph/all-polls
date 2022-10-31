import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PollsService } from 'src/app/services/polls.service';
import { Router } from "@angular/router";
import { ViewPollsComponent } from './view-polls.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

const routerSpy = { navigate: jasmine.createSpy('navigate') };

describe('ViewPollsComponent', () => {
  let component: ViewPollsComponent;
  let fixture: ComponentFixture<ViewPollsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: Router,
          useValue: routerSpy
        },
        PollsService
      ],
      declarations: [ViewPollsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle sucess response', () => {
    const fakeAPIResponse = { success: true, count: 5, response: ['ABCD'] };
    spyOn(component['pollService'], 'getPolls' as never).and.returnValue(of(fakeAPIResponse) as never);
    component.getPollList();
    expect(component.pollData).toEqual(fakeAPIResponse.response);
    expect(component.collectionSize).toBe(fakeAPIResponse.count);
  });
});
