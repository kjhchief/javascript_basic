import { Student } from "/js/Student.js";
import { StudentRepository } from "/js/StudentRepository.js";

// 학생 객체 생성
let student1 = new Student(10, "김희원", 90, 100, 80);
let student2 = new Student(11, "김현아", 95, 95, 88);
let student3 = new Student(12, "박찬울", 50, 30, 100);
let student4 = new Student(13, "박찬울", 60, 30, 100);

// 학생관리 객체 생성
let studentRepository = new StudentRepository();

// 학생관리 객체에 학생 등록
studentRepository.addStudent(student1);
studentRepository.addStudent(student2);
studentRepository.addStudent(student3);
studentRepository.addStudent(student4);

// 학생 전체 목록 조회
let list = studentRepository.findAll();
for (const student of list) {
  console.log(student.toString());
}

// 학번으로 학생 조회
const findStudent = studentRepository.findByNo(11);
console.log("검색 결과: ", findStudent);

// 학번으로 학생 삭제
const deleteStudent = studentRepository.deleteByNo(11);
console.log("삭제결과: ", deleteStudent);

list = studentRepository.findAll();
for (const student of list) {
  console.log(student.toString());
}

// 이름으로 학생 조회
const findStudents = studentRepository.findByName("박찬울");
console.log("이름검색 결과: ", findStudents);


