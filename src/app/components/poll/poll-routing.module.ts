import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubmitPollComponent } from './submit-poll/submit-poll.component';

const routes: Routes = [
  { path: 'submit-poll/:pollId', component: SubmitPollComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PollRoutingModule { }
