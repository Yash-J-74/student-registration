import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Login } from '../type/login';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) { }

  public userLogin(data: Login) {
    this.userService.login(data);
  }

  ngOnInit(): void { 
    localStorage.clear();
  }

}
