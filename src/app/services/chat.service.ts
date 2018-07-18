import { Injectable } from '@angular/core';
import {ChatMessage} from '../models/chat-message.model';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpErrorResponse,HttpResponse} from '@angular/common/http';
import {Response} from 'angular2/http';


@Injectable()
export class ChatService {


  constructor(private http: HttpClient) {}

  sendMessage(messages:ChatMessage)
  {
    return this.http.post('http://localhost:3000/messages',messages)
      .catch((error: HttpErrorResponse)=>{
      return Observable.throw('Сервер не доступен');}
      );
  }


  getMessages():Observable<ChatMessage[]>
  {
    //console.log('call get');
    return this.http.get('http://localhost:3000/messages')
      .map((response:any)=> 	{
        //console.log(response)
        return response as ChatMessage[];
      })
  }



    getTimeStamp(){
      const now = new Date();

      const date =now.getUTCFullYear()+ '/' +
        (now.getUTCMonth()+1)+ '/' +
        now.getUTCDate();

      const time =now.getUTCHours() + ':' +
        (now.getUTCMinutes() +1)+ ':' +
        now.getUTCSeconds();
        return (date + ' ' + time);
    }

}
