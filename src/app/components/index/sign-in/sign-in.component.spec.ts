import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Router } from "@angular/router";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SignInComponent } from './sign-in.component';


class ToasterMock {
  success(message: string): void { resMessage = message; }
  error(message: string): void { resMessage = 'Error' + message; }
}
let resMessage: string = '';
const routerSpy = { navigate: jasmine.createSpy('navigate') };


describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
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
        UserService
      ],
      declarations: [SignInComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.loginAdmin = new FormGroup({
      email: new FormControl('admin@test.com', [Validators.required]),
      password: new FormControl('knowMe@23', [Validators.required])
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle sucess response', () => {
    const fakeAPIResponse = { success: true, msg: 'ABCD' };
    spyOn(component['userService'], 'login' as never).and.returnValue(of(fakeAPIResponse) as never);
    component.onSubmit();
    expect(resMessage).toBe(fakeAPIResponse.msg);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['dashboard']);
  });

  it('should handle fail response', () => {
    const fakeAPIResponse = { success: false, msg: 'ABCD' };
    spyOn(component['userService'], 'login' as never).and.returnValue(of(fakeAPIResponse) as never);
    component.onSubmit();
    expect(resMessage).toBe('Error' + fakeAPIResponse.msg);
  });
});
