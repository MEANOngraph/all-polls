import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginAdmin = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  get controls() { return this.loginAdmin.controls; }

  onSubmit() {
    if (this.loginAdmin.valid) {
      this.userService.login(this.loginAdmin.value).subscribe((res) => {
        if (res.success) {
          this.toastr.success(res.msg);
          this.router.navigate(['dashboard']);
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
