import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PollsService } from 'src/app/services/polls.service';
import { Router } from "@angular/router";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';

import { AddPollsComponent } from './add-polls.component';

class ToasterMock {
  success(message: string): void { resMessage = message; }
}
let resMessage: string = '';
const routerSpy = { navigate: jasmine.createSpy('navigate') };

describe('AddPollsComponent', () => {
  let component: AddPollsComponent;
  let fixture: ComponentFixture<AddPollsComponent>;

  beforeEach(async () => {
    resMessage = '';
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ],
      providers: [
        FormBuilder,
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
      declarations: [AddPollsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPollsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle sucess response', () => {
    const fakeAPIResponse = { success: true, msg: 'ABCD' };
    spyOn(component['pollService'], 'saveNewPoll' as never).and.returnValue(of(fakeAPIResponse) as never);
    component.savePoll();
    expect(resMessage).toBe(fakeAPIResponse.msg);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/dashboard/list']);
  });
});
