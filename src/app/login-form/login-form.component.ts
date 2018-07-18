import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
form: FormGroup;
  constructor(private authservice:AuthService, private route:Router) { }

  ngOnInit() {

    this.form=new FormGroup({
      'email': new FormControl(null,[Validators.email,Validators.required]),
      'password':new FormControl(null,[Validators.required])
    });
  }
  onSubmit(){
    //console.log(this.form)
    const formData=this.form.value;
    this.authservice.getIssetUser(formData.email)
      .subscribe((user:User) => {

        //console.log(user.username);





        if(user && user.password===formData.password)
        {
        this.authservice.logout();
        localStorage.setItem('user', JSON.stringify(user));
        this.route.navigate(['/chat']);
        }
        else{
          alert('Такого пользователь не существует');
        }
      });
  }

}
