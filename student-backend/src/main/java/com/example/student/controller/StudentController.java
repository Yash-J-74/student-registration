package com.example.student.controller;

import com.example.student.entity.Student;
import com.example.student.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "*")
@RequestMapping(path = "student")
public class StudentController {

    private final StudentService studentService;
    @Autowired
    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500", allowedHeaders = "*")
    @GetMapping
    public List<Student> getStudents() {
        return studentService.getStudents();
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @GetMapping(path = "{studentId}")
    public Student fetchStudentById(@PathVariable("studentId") Long studentId) {
        return studentService.fetchStudentById(studentId);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PostMapping
    public void registerNewStudent(@RequestBody Student student) {
        studentService.addNewStudent(student);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @DeleteMapping(path = "{studentId}")
    public void deleteStudent(@PathVariable("studentId") Long studentId) {
        studentService.deleteStudent(studentId);
    }

    @CrossOrigin(origins = "http://127.0.0.1:5500")
    @PutMapping(path = "{studentId}")
    public void updateStudent(@PathVariable("studentId") Long studentId,
                              @RequestBody Student student) {
        studentService.updateStudent(studentId, student);
    }
}
