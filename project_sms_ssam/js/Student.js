// 생성자 함수를 이용한 일상생활의 객체를 표현
function Student(ssn, name, korean, math, english){
  // this = {};
  // 속성 추가
  this.ssn = ssn;
  this.name = name;
  this.korean = korean;
  this.math = math;
  this.english = english;
  // return this;
}

// 공통 속성 추가
Student.prototype.schooName = "EZEN MIDDLE SCHOOL";
// Student 생성자 함수가 참조하고 있는 Student 프로토타입 객체에 메소드 추가
Student.prototype.getSum = function(){
    return Number(this.korean) + Number(this.math) + Number(this.english);
}

Student.prototype.getAverage = function(){
    return (this.getSum() / 3).toFixed(2);
}

// Object의 프로토타입 객체의 메소드 재정의(Overriding)
Student.prototype.toString = function(){
    return `${this.ssn}\t${this.name}\t${this.korean}\t${this.english}\t${this.math}\t${this.getSum()}\t${this.getAverage()}`;
}

// 다른 js에서 사용할 수 있도록 내보내기
export {Student};