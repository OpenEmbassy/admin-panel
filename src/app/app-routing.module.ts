import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component';
import { Login } from './login/login.component'

const routes: Routes = [
{ path:'login', component:Login },
{ path: 'users', component: UsersComponent },
{ path: 'questions', component: QuestionsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
