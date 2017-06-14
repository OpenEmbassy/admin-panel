import { AuthGuard } from './login/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AppComponent } from './app.component'
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
{
  path: '',
  component: LoginComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'users',
  component: UsersComponent,
  canActivate: [AuthGuard]

},
{
  path: 'questions',
  component: QuestionsComponent,
  canActivate: [AuthGuard]
},
{
  path: '**',
  redirectTo: 'login'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
