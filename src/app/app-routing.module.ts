import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
{
  path: '',
  children: [{
    path: 'users',
    component: UsersComponent
  }, {
    path: 'questions',
    component: QuestionsComponent
  }, {
    path: '',
    pathMatch: 'full',
    component: UsersComponent,
  }]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
