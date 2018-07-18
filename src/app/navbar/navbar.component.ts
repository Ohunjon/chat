import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {User} from '../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthService, private route:Router) { }
  user:any;
  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log(this.user);
  }
logOut()
{
  this.authservice.upStatus(this.user,true).subscribe(
    (user:User[])=>{
      console.log(user);

    })
  this.authservice.logout();
  this.route.navigate(['/login']);
}
}
