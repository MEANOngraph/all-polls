import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PollRoutingModule } from './poll-routing.module';
import { SubmitPollComponent } from './submit-poll/submit-poll.component';


@NgModule({
  declarations: [
    SubmitPollComponent
  ],
  imports: [
    CommonModule,
    PollRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PollModule { }
