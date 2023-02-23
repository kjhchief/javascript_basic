function Student(ssn, name, korean, math, english) {
  // this = {}; 요게 만들어졌다. 스크립트 엔진에 의해.
  // 속성 추가
  this.ssn = ssn;
  this.name = name;
  this.korean = korean;
  this.math = math;
  this.english = english;

  // 기능 추가
  // return this; 요것도 자동 추가
}
// 공통 속성 추가
Student.prototype.schoolName = "Ezen middle schoole";

// Student 생성자 함수가 참조하고 있는 Student 프로토타입 객체에 메소드 추가
Student.prototype.getSum = function(){
  return this.korean + this.math + this.english;
}
Student.prototype.getAverage = function(){
  return new Number(this.getSum() / 3).toFixed(2);
}
// Object의 프로토타입 객체의 메소드 재정의(Overriding)
Student.prototype.toString = function(){
  return `${this.ssn}\t${this.name}\t${this.korean}\t${this.english}\t${this.math}\t${this.getSum()}\t${this.getAverage()}\n`;
}
// 다른 js에서 사용할 수 있도록 내보내기
export{
  Student
}