import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoAuthGuard } from 'src/app/guards/no-auth.guard';
import { LandingComponent } from './landing/landing.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: 'layout', pathMatch: 'full'},
  { path: 'layout', component: LandingComponent, canActivate: [NoAuthGuard]},
  { path: 'sign-in', component: SignInComponent, canActivate: [NoAuthGuard]},
  { path: 'sign-up', component: SignUpComponent, canActivate: [NoAuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
