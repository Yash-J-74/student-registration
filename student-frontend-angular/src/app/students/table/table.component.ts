import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
import { Student } from 'src/app/type/student';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  students?: Student[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getStudents();
  }

  deleteStudent(studentId?: number) {
    const confirmed = confirm(`Are you sure you want to delete student with ID: ${studentId}?`);
    if(confirmed) {
      this.userService.delete(studentId).subscribe((d)=> 
      {this.getStudents();}, (error) => {console.error(error);});
    }
  }

  updateStudent(id?: number) {
    this.router.navigate(['update', id]);
  }

  private getStudents() {
    this.userService.students().subscribe((data) => {
      this.students = data;
    }, (error) => {
      console.error(error);
    })
  }



}
