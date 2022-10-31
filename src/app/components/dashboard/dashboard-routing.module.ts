import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AddPollsComponent } from './add-polls/add-polls.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { PollsVotingComponent } from './polls-voting/polls-voting.component';
import { ViewPollsComponent } from './view-polls/view-polls.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children:[
      { path: '', redirectTo: 'list', pathMatch: 'full'},
      { path: 'list', component: ViewPollsComponent, canActivate: [AuthGuard]},
      { path: 'add', component: AddPollsComponent, canActivate: [AuthGuard]},
      { path: 'polls-vote/:id', component: PollsVotingComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
