import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  UsersOnline:Observable<User>;
  constructor(private userService:AuthService) { }

  ngOnInit() {
    this.UsersOnline=this.userService.getUserOnline();
  }

}
