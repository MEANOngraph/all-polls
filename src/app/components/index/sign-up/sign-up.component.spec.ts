import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';
import { Router } from "@angular/router";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SignUpComponent } from './sign-up.component';

class ToasterMock {
  success(message: string): void { resMessage = message; }
  error(message: string): void { resMessage = 'Error' + message; }
}
let resMessage: string = '';
const routerSpy = { navigate: jasmine.createSpy('navigate') };

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

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
      declarations: [SignUpComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.adminRegister = new FormGroup({
      fullName: new FormControl('Admin One', [Validators.required, Validators.pattern('^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,4}$')]),
      email: new FormControl('admin@test.com', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{2,}(?:[._]{1}[a-zA-Z0-9]+){0,2}@[a-zA-Z]{2,20}[.]{1}[a-zA-Z]{2,4}(?:[.]{1}[a-zA-Z]+){0,1}$')]),
      password: new FormControl('nowMe@23', [Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$#?!@%^&*-]).{8,24}$')]),
      confirmPassword: new FormControl('nowMe@23', [Validators.required])
    })
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should handle sucess response', () => {
    const fakeAPIResponse = { success: true, msg: 'ABCD' };
    spyOn(component['userService'], 'registration' as never).and.returnValue(of(fakeAPIResponse) as never);
    component.onSubmit();
    expect(resMessage).toBe(fakeAPIResponse.msg);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['sign-in']);
  });

  it('should handle fail response', () => {
    const fakeAPIResponse = { success: false, msg: 'ABCD' };
    spyOn(component['userService'], 'registration' as never).and.returnValue(of(fakeAPIResponse) as never);
    component.onSubmit();
    expect(resMessage).toBe('Error' + fakeAPIResponse.msg);
  });
});
