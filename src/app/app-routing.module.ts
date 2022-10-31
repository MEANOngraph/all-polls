import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../app/components/index/index.module').then(m => m.IndexModule) },
  { path: '', loadChildren: () => import('../app/components/poll/poll.module').then(m => m.PollModule) },
  { path: 'dashboard', loadChildren: () => import('../app/components/dashboard/dashboard.module').then(m => m.DashboardModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
