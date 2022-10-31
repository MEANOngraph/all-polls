import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ViewPollsComponent } from './view-polls/view-polls.component';
import { AddPollsComponent } from './add-polls/add-polls.component';
import { PollsVotingComponent } from './polls-voting/polls-voting.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';


@NgModule({
  declarations: [
    ViewPollsComponent,
    AddPollsComponent,
    PollsVotingComponent,
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgbModule
  ]
})
export class DashboardModule { }
