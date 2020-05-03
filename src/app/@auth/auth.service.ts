import { Injectable } from '@angular/core';
import { Auth } from './auth';
import { Router } from '@angular/router';


@Injectable()
export class AuthService {
  

  constructor(private router:Router) { }
  loggedIn = false;
  login(user: Auth): boolean {
    if (user.userEmail== "admin@com" && user.password == "admin") {
      this.loggedIn = true;
      this.router.navigate(['/dashboard']);
      localStorage.setItem("isLogged", user.userEmail);
      return true;
    } return false;
  }
  
  isLogged() {
    return this.loggedIn;
  }

  logOut() {
    localStorage.removeItem("isLogged");
    this.loggedIn = false;
    this.router.navigate(['/login']);  
  }
}