package com.example.student.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.Period;

@Entity
@Table
public class Student {
    @Id
    @SequenceGenerator(name="student_sequence", sequenceName="student_sequence", allocationSize = 1)
    @GeneratedValue(strategy =GenerationType.SEQUENCE, generator = "student_sequence")
    private Long id;
    private String firstName;
    private String lastName;
    private LocalDate dob;
    @Transient
    private Integer age;
    private String email;
    @Enumerated(EnumType.STRING)
    private StudentGender studentGender;
    private Long phoneNumber;

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Student{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", dob=" + dob +
                ", age=" + age +
                ", email='" + email + '\'' +
                ", studentGender=" + studentGender +
                ", phoneNumber=" + phoneNumber +
                '}';
    }

    public Student() {
    }

    public Student(String firstName, String lastName, LocalDate dob, Integer age, String email, StudentGender studentGender, Long phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.age = age;
        this.email = email;
        this.studentGender = studentGender;
        this.phoneNumber = phoneNumber;
    }

    public Student(Long id, String firstName, String lastName, LocalDate dob, Integer age, String email, StudentGender studentGender, Long phoneNumber) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
        this.age = age;
        this.email = email;
        this.studentGender = studentGender;
        this.phoneNumber = phoneNumber;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getDob() {
        return dob;
    }

    public void setDob(LocalDate dob) {
        this.dob = dob;
    }

    public Integer getAge() {
        return Period.between(this.dob, LocalDate.now()).getYears();
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public StudentGender getStudentGender() {
        return studentGender;
    }

    public void setStudentGender(StudentGender studentGender) {
        this.studentGender = studentGender;
    }

    public Long getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(Long phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
