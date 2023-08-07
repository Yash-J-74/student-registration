package com.example.student.service;

import com.example.student.entity.Student;
import com.example.student.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository studentRepository;

    @Autowired
    public StudentService(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    public List<Student> getStudents() {
        List<Student> allStudents =  studentRepository.findAll();
        allStudents.sort(Comparator.comparing(Student::getId));
        return allStudents;
    }

    public void addNewStudent(Student student) {
        Optional<Student> studentOptional = studentRepository.findStudentByEmail(student.getEmail());
        if(studentOptional.isPresent()) {
            throw new IllegalStateException("Email Taken");
        }
        studentRepository.save(student);
    }

    public void deleteStudent(Long studentId) {
        boolean exists = studentRepository.existsById(studentId);
        if(!exists) {
            throw new IllegalStateException("Student with id " + studentId + " Does not exist");
        }
        studentRepository.deleteById(studentId);
    }

    @Transactional
    public void updateStudent(Long studentId, Student student) {
        Student std = studentRepository.findById(studentId).get();

        std.setFirstName(student.getFirstName());
        std.setLastName(student.getLastName());
        std.setDob(student.getDob());
        std.setEmail(student.getEmail());
        std.setStudentGender(student.getStudentGender());
        std.setPhoneNumber(student.getPhoneNumber());
        studentRepository.save(std);

    }

    public Student fetchStudentById(Long studentId) {
        Optional<Student> student = studentRepository.findById(studentId);
        if(!student.isPresent()) {
            return null;
        }
        return student.get();
    }
}
