import {Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {ChatService} from '../services/chat.service';
import {ChatMessage} from '../models/chat-message.model';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit/*,OnChanges */{

  @Input() newMessages: any;

  constructor(private chatMessage: ChatService) {
  }

  feed: Observable<ChatMessage>;
  messages: ChatMessage[];

  ngOnInit() {
    console.log('call feed');
    this.chatMessage.getMessages()
      .subscribe( (mes: ChatMessage[]) => {
          this.messages = mes;
        }
      );
    //console.log(this.feed);
  }

 ngOnChanges(changes: SimpleChange) {
   // console.log(changes.currentValue);

   if(this.messages){
      this.messages.push(changes['newMessages'].currentValue);
    }
  }




}
