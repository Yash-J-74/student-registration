import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Student } from '../type/student';
import { Login } from '../type/login';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL:string = "http://localhost:8080/student";

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

  login(data: Login) {
    this.http.post('http://localhost:8080/auth/login', data).subscribe((data) => {
      localStorage.setItem('token', Object.values(data)[0]);
      this.authService.login();
      this.router.navigate(['/students']);
    },(error) => {
      alert("Invalid Username or Password");
      location.reload();
    });
  }

  logout() {
    localStorage.clear();
    this.authService.logout();
  }

  students(): Observable<Student[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Student[]>(`${this.baseURL}`, {headers})
  }

  delete(studentId?: number) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.delete(`${this.baseURL}/${studentId}`, {headers})
  }

  registerStudent(data: Student): Observable<Object> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.post<Object>(`${this.baseURL}`, data, {headers})
  }

  getStudent(id? : number): Observable<Student> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.get<Student>(`${this.baseURL}/${id}`, {headers})
  } 

  updateStudent(data: Student, id?: number) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    return this.http.put(`${this.baseURL}/${id}`, data, {headers})
  }
  
}
