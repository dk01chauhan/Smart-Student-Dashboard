package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.entity.Marks;
import java.util.List;

public interface MarksRepo extends JpaRepository<Marks, Integer> {
    List<Marks> findByStudentId(int studentId);
}