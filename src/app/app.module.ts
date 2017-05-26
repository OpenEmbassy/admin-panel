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
import { ElementHighLighter } from './stylying-directives/element-highlight.directive';
import { OeUserTabComponent } from './users/oe-user-tab/oe-user-tab.component';
// import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    QuestionsComponent,
    ElementHighLighter,
    OeUserTabComponent,
    // LoginComponent
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
