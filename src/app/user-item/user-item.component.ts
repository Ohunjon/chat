import {Component, Input, OnInit} from '@angular/core';
import {User} from '../models/user.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() Users:User;
  constructor() { }
  username:string;
  status:boolean;
  ngOnInit(uOn=this.Users) {
  this.username=uOn.username;

    this.status =uOn.status;

  }

}
