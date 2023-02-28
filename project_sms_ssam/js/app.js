import { Student } from "./Student.js";
import { StudentRepository } from "./StudentRepository.js";
import { Validator } from "./Validator.js";

// // 학생관리 객체 생성
let studentRepository = new StudentRepository();

// 이벤트 소스에 이벤트 리스너 등록
let addButton = document.querySelector("#add");
addButton.addEventListener("click", addStudent);

let allButton = document.querySelector("#all");
allButton.addEventListener("click", findAll);

// 성적 등록
function addStudent(event){
  let ssnInput = document.querySelector("#ssn");
  let ssn = ssnInput.value;

  let nameInput = document.querySelector("#name");
  let name = nameInput.value;

  let koreanInput = document.querySelector("#korean");
  let korean = koreanInput.value;

  let englishInput = document.querySelector("#english");
  let english = englishInput.value;

  let mathInput = document.querySelector("#math");
  let math = mathInput.value;


  // 유효성 검증
  if(!Validator.hasText(ssn)){
    alert("번호를 입력하여 주세요");
    ssnInput.focus();    
  }

  // 다 입력받았다 가정
  let student =new Student(ssn, name, korean, english, math);
  studentRepository.addStudent(student);
  

  // 등록정보 화면에 출력
  showMessage(`${ssn} ${name} ${korean} ${english} ${math}학생을 등록하였습니다..`);
  }

// 전체 조회
function findAll(){
  let list = studentRepository.findAll();
  list.forEach(student => {
    // 테이블로 출력
    // console.log(student);

    document.querySelector("#raw1_1").innerHTML= student.ssn;
    document.querySelector("#raw1_2").innerHTML= student.name;
    document.querySelector("#raw1_3").innerHTML= student.korean;
    document.querySelector("#raw1_4").innerHTML= student.english;
    document.querySelector("#raw1_5").innerHTML= student.math;
    document.querySelector("#raw1_6").innerHTML= student.getSum();
    document.querySelector("#raw1_7").innerHTML= student.getAverage();
  });
}

// 메시지 출력
function showMessage(message){
  const view = document.querySelector("#message");
  if(view){
    view.innerHTML = message;
  }
}








// // 학생 객체 생성
// let student1 = new Student(10, "김희원", 90, 100, 80);
// let student2 = new Student(11, "김현아", 95, 95, 88);
// let student3 = new Student(12, "박찬울", 50, 30, 100);
// let student4 = new Student(13, "박찬울", 60, 30, 100);

// // 학생관리 객체에 학생 등록
// studentRepository.addStudent(student1);
// studentRepository.addStudent(student2);
// studentRepository.addStudent(student3);
// studentRepository.addStudent(student4);

// // 학생 전체 목록 조회
// let list = studentRepository.findAll();
// for (const student of list) {
//   console.log(student.toString());
// }

// // 학번으로 학생 조회
// const findStudent = studentRepository.findByNo(11);
// console.log("검색 결과: ", findStudent);

// // 학번으로 학생 삭제
// const deleteStudent = studentRepository.deleteByNo(11);
// console.log("삭제결과: ", deleteStudent);

// list = studentRepository.findAll();
// for (const student of list) {
//   console.log(student.toString());
// }

// // 이름으로 학생 조회
// const findStudents = studentRepository.findByName("박찬울");
// console.log("이름검색 결과: ", findStudents);

