import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent,RouterOutlet],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  isLoggedIn:any;
  userRole:any
  Login(isLoggedIn:boolean) {
 
    this.isLoggedIn=true;
    alert('User Login Success!')
  
  }
  signupDone(){
    alert("Register Successfully!");
  }




}
