package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.repo.*;
import com.example.demo.entity.*;

import java.util.List;

@RestController
@CrossOrigin
public class MainController {

    @Autowired UserRepo userRepo;
    @Autowired MarksRepo marksRepo;

    @PostMapping("/register")
    public String register(@RequestBody User user) {
        userRepo.save(user);
        return "Registered Successfully";
    }

    @PostMapping("/login")
    public User login(@RequestBody User user) {
        User db = userRepo.findByEmail(user.getEmail());

        if (db != null && db.getPassword().equals(user.getPassword())) {
            return db;
        }
        return null;
    }

    @PostMapping("/addMarks")
    public String addMarks(@RequestBody Marks m) {
        marksRepo.save(m);
        return "Marks Added";
    }

    @GetMapping("/marks/{id}")
    public List<Marks> getMarks(@PathVariable int id) {
        return marksRepo.findByStudentId(id);
    }
}