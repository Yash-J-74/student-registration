import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Student } from 'src/app/type/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  studentRegister(data: Student) {
    this.userService.registerStudent(data).subscribe((d)=> { 
      this.router.navigate(['/students']);
    }, (error) => {console.error(error);});
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

}
