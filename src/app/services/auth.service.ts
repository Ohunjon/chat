import { Injectable } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';




@Injectable()
export class AuthService {
  private isAutheniticated=false;
private socket;
  loginn()
  {

    this.isAutheniticated=true;
  }
  logout(){
    this.isAutheniticated =false;
    window.localStorage.clear();
  }

  isLoggedin (): boolean {
    const token =JSON.parse(window.localStorage.getItem('user'));
    console.log(token);
    if(token)
      return true;
  }













  constructor(private http: HttpClient) { }


  getUserOnline():Observable<User>
  {
   // console.log('call get');
    return this.http.get(`http://localhost:3000/users?status=true`)
      .map((response:any)=> 	{
       //console.log(response)
        return response as User;
      })
  }
  addNewUser(user:User){
    return this.http.post('http://localhost:3000/users',user);
  }

getIssetUser(email:string):Observable<User>
{
  return this.http.get(`http://localhost:3000/users?email=${email}`).map((response:any)=> 	{
    //console.log(response)
    return response as User[];
  }).map((user: User[]) => user[0] ? user[0] : undefined);
}


  upStatus (userStatus: User,status:boolean): Observable <User[]> {
    return this.http.put(`http://localhost:3000/users?${userStatus.status}`,status )
      .map((response:any)=> 	{
        //console.log(response)
        return response as User[];
  })
  }

}
