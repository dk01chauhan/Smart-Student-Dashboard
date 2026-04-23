CREATE DATABASE student_dashboard;

USE student_dashboard;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    role VARCHAR(10),
    name VARCHAR(50),
    father_name VARCHAR(50),
    mobile VARCHAR(15),
    email VARCHAR(50),
    university VARCHAR(50),
    university_id VARCHAR(20),
    course VARCHAR(50),
    password VARCHAR(100)
);

CREATE TABLE student_data (
    university_id VARCHAR(20),
    attendance INT,
    marks INT,
    fees VARCHAR(20),
    timetable TEXT
);