import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PollsService } from 'src/app/services/polls.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-polls',
  templateUrl: './add-polls.component.html',
  styleUrls: ['./add-polls.component.css']
})
export class AddPollsComponent implements OnInit {
  public pollForm: FormGroup;
  public optionsArray = [this.newChoice()];
  private optionsCount : number = 1;

  constructor(private fb: FormBuilder,
     private pollService: PollsService,
    private toastr: ToastrService,
    private router: Router) {
    this.pollForm = this.fb.group({
      question: ['', [Validators.required]],
      options: this.fb.array(this.optionsArray),
    });
  }

  ngOnInit(): void {
  }
  questionsOptions(): FormArray {
    return this.pollForm.get('options') as FormArray
  }

  newChoice(): FormGroup {
    return this.fb.group({
      choice: [''],
    })
  }

  addOptions() {
    if(this.optionsCount < 10){
      this.questionsOptions().push(this.newChoice());
      this.optionsCount++;
    }
  }

  removeOptions(i: number) {
    this.questionsOptions().removeAt(i);
  }

  savePoll() {
    this.pollService.saveNewPoll(this.pollForm.value).subscribe((res) => {
      if (res.success) {
        this.toastr.success(res.msg);
        this.router.navigate(['/dashboard/list']);
      }
    }, (err) => {
      console.log(err);

    })
  }
}
