import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  
  
  loggedIn: boolean = false;

  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
  isAuthenticated(): boolean {
    return this.loggedIn
  }
}
