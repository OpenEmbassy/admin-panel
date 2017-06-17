import 'hammerjs'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './data/api.service';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersTabComponent } from './users/users-tab/users-tab.component';
import { QuestionsTabComponent } from './questions/questions-tab/questions-tab.component';
import { LoginComponent } from './login/login.component';
import { AllQuestionsTabComponent } from './questions/all-questions-tab/all-questions-tab.component';
import 'material-design-lite/material';
import { AuthGuard } from './login/auth.guard';

@NgModule({
  declarations: [
  AppComponent,
  UsersComponent,
  QuestionsComponent,
  LoginComponent,
  UsersTabComponent,
  QuestionsTabComponent,
  AllQuestionsTabComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  AppRoutingModule,
  MaterialModule,
  BrowserAnimationsModule,
  NgxPaginationModule
  ],
  providers: [
  ApiService,
  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
