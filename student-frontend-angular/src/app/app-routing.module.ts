import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { AuthGuardGuard } from './service/auth-guard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'update/:id', component: UpdateComponent, canActivate: [AuthGuardGuard]},
  { path: 'students', component: StudentsComponent, canActivate: [AuthGuardGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuardGuard]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
