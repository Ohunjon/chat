import {Component, Input, OnInit} from '@angular/core';
import {ChatMessage} from '../models/chat-message.model';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
@Input() chatMessage:ChatMessage;
userName;
text:string;
timeSent:string;
  constructor() { }

  ngOnInit(chatMessage=this.chatMessage) {
    this.text=chatMessage.message;
    this.timeSent=chatMessage.timeSent;
    this.userName=this.chatMessage.uid;
    //console.log(chatMessage);
  }

}
