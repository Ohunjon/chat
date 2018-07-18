import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {ChatService} from '../services/chat.service';
import {ChatMessage} from '../models/chat-message.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent implements OnInit,OnDestroy {

  @Output() addedMessage=new EventEmitter<ChatMessage>();

  message:string;
  now;

s1:Subscription;

  constructor(private chat: ChatService) { }

  ngOnInit() {
    this.now=this.chat.getTimeStamp();
  }

  send(){

   const  Mess=new ChatMessage(this.message,this.now,1);
    this.s1 = this.chat.sendMessage(Mess).subscribe((m: any) => {
        //console.log(m);
        this.addedMessage.emit(m);
        this.message = '';
      },
   (error)=>{alert(error)}
    );
  }
  handleSubmit(event)
  {
    if(event.keyCode===13)
    {
      this.send();
    }
  }

  ngOnDestroy(){
    if(this.s1)
      this.s1.unsubscribe();
  }
}
