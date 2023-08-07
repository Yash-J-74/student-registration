import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/type/student';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, private userService: UserService) { }
  
  student: Student = new Student();
  id?: number;

  studentUpdate(data: Student) {
    this.userService.updateStudent(data, this.id).subscribe((d)=> {
      this.router.navigate(['/students']);
    }, (error) => {console.error(error);});
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService.getStudent(this.id).subscribe((data) => {
      this.student = data;
    }, (error) => { console.error(error);});
  }
}
