import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent implements OnInit {

  newMessage: any ;
  constructor() { }

  ngOnInit() {
  }

  newMessageAdded(message: any) {
    this.newMessage = message;
  }

}
