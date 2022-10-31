import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  adminRegister: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private router: Router, private userService: UserService, private toastr: ToastrService) {
    this.adminRegister = this.formBuilder.group({
      fullName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]{2,}(?: [a-zA-Z]+){0,4}$')]),
      email: new FormControl('', [Validators.required,
      Validators.pattern('^[a-zA-Z0-9]{2,}(?:[._]{1}[a-zA-Z0-9]+){0,2}@[a-zA-Z]{2,20}[.]{1}[a-zA-Z]{2,4}(?:[.]{1}[a-zA-Z]+){0,1}$')]),
      password: new FormControl('', [Validators.required,
      Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[$#?!@%^&*-]).{8,24}$')]),
      confirmPassword: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }
  get registerControls() { return this.adminRegister.controls; }

  onSubmit() {
    if (this.adminRegister.valid) {
      this.userService.registration(this.adminRegister.value).subscribe((res) => {
        if (res.success) {
          this.toastr.success(res.msg);
          this.router.navigate(['sign-in']);
        } else {
          this.toastr.error(res.msg);
        }
      },
        (err) => {
          this.toastr.error("Internal Server Error");
        }
      )
    }
  }
  
}
