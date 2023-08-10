import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/type/student';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.css']
})
export class ChangeComponent implements OnInit {

  constructor(private router: Router,private route: ActivatedRoute, private userService: UserService) { }
  
  
  updateForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    studentGender: new FormControl('', [Validators.required])
  })

  get firstName() {
    return this.updateForm.get('firstName');
  }

  get lastName() {
    return this.updateForm.get('lastName');
  }

  get dob() {
    return this.updateForm.get('dob');
  }

  get email() {
    return this.updateForm.get('email');
  }

  get phoneNumber() {
    return this.updateForm.get('phoneNumber');
  }

  get studentGender() {
    return this.updateForm.get('studentGender');
  }

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
