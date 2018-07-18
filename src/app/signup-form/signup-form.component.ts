import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../models/user.model';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form: FormGroup;
  constructor(private authsrvice:AuthService,private route: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'password': new FormControl(null,[Validators.minLength(6)])
    });
  }
  onSubmit()
{
 // console.log(this.form);
const {name,email,password}=this.form.value;
const user =new User(email,password,name,true);
this.authsrvice.addNewUser(user)
  .subscribe((us:User)=>{
    //console.log(us);
    window.localStorage.setItem('user', JSON.stringify(us));
    this.authsrvice.loginn();
    this.route.navigate(['/chat']);
});
}

}
