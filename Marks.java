package com.example.demo.entity;

import jakarta.persistence.*;

@Entity
public class Marks {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private int studentId;
    private String subject;
    private int marks;

    // getters setters
    public int getId() { return id; }
    public void setId(int id) { this.id = id; }

    public int getStudentId() { return studentId; }
    public void setStudentId(int studentId) { this.studentId = studentId; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public int getMarks() { return marks; }
    public void setMarks(int marks) { this.marks = marks; }
}