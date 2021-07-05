import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  username = 'Fatma Oz';
  password = 'Abc123';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  handleLogin() {
    // console.log(this.username);
    if(this.username==="Fatma Oz" && this.password ==='dummy') {
      //Redirect to welcome page
      this.router.navigate(['welcome']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

}
