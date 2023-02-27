import { Student } from "/js/Student.js";
import { StudentRepository } from "/js/StudentRepository.js";

// let student1 = new Student(10, "김희원", 90, 100, 80);
// let student2 = new Student(11, "김현아", 95, 95, 88);
// let student3 = new Student(12, "박찬울", 50, 30, 100);
// let student4 = new Student(13, "박찬울", 99, 98, 100);

let studentRepository = new StudentRepository();

// 이벤트 소스에 이벤트 리스너 등록
let addButton = document.querySelector("#addButton");
addButton.addEventListener("click", addStudent);
let allButton = document.querySelector("#all");
addButton.addEventListener("click", addStudent);

//성적 등록
function addStudent(event){
  let ssnInput = document.querySelector("#ssn");
  let ssn = ssnInput.value;

  if(!ssn){
    alert("아이디를 입력하세요");
    ssnInput.focus();
  }
}

// 다 입력 받았다고 가정
let student = new Student(ssn, "김희원", 90, 100, 80);
studentRepository.addStudent(addStudent);

// 등록 정보 화면에 출력
showMessage(`${ssn} 학생을 등록하였습니다.`);

// 전체조회
function findAll(){
  alert("전체조회");
}

// 메세지 출력
function showMessage(message){
  const view = document.querySelector("#message");
  if(view){
    view.innerHTML = message;
  }
}

/*
// 학생 등록
studentRepository.addStudent(student1);
studentRepository.addStudent(student2);
studentRepository.addStudent(student3);
studentRepository.addStudent(student4);

// 학생 전체 목록 조회
console.log("---학생 전체 목록 조회---");
let list = studentRepository.findAll();
for (const student of list) {
  console.log(student.toString());
}

// 학번으로 학생 조회
console.log("---학번으로 학생 조회---");
let findStudent = studentRepository.findByNo(10);
console.log(findStudent.toString());

// 학번으로 학생 삭제
console.log("---학번으로 특정 학생 삭제---");
let deleteStudent = studentRepository.deleteByNo(10);
console.log(deleteStudent.toString());

console.log("---이름으로 학생 조회---");
// 이름으로 학생 조회
let findStudentName = studentRepository.findByName("박찬울");
console.log(findStudentName.toString());

// studentRepository.students.splice(0, 1); // 첫 번째 원소만 삭제

// let temp = studentRepository.students.filter(stu => stu !== student1)
// console.log(temp);
*/
