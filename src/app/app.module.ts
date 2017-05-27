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
import { UsersService } from './data/users.service';
import { QuestionsService } from './data/questions.service';
import { UsersComponent } from './users/users.component';
import { QuestionsComponent } from './questions/questions.component';
import { UsersTabComponent } from './users/users-tab/users-tab.component';
import { QuestionsTabComponent } from './questions/questions-tab/questions-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    QuestionsComponent,
    UsersTabComponent,
    QuestionsTabComponent,
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
    UsersService,
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
