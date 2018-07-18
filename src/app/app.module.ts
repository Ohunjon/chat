import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {appRoutes} from '../routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-item/user-item.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FeedComponent } from './feed/feed.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import {ChatService} from './services/chat.service';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserItemComponent,
    SignupFormComponent,
    NavbarComponent,
    MessageComponent,
    LoginFormComponent,
    FeedComponent,
    ChatroomComponent,
    ChatFormComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [AuthService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
