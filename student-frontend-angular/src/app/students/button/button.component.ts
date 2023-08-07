import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
  }

}
