import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Student } from 'src/app/type/student';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  registerForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$")]),
    lastName: new FormControl('', [Validators.required, Validators.pattern("^[A-Za-z]+$")]),
    dob: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern('\\d{10}$')]),
    studentGender: new FormControl('', [Validators.required])
  })

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get dob() {
    return this.registerForm.get('dob');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get phoneNumber() {
    return this.registerForm.get('phoneNumber');
  }

  get studentGender() {
    return this.registerForm.get('studentGender');
  }

  studentRegister(data: Student) {
    this.userService.registerStudent(data).subscribe((d)=> { 
      this.router.navigate(['/students']);
    }, (error) => {console.error(error);});
  }

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void { }

}
