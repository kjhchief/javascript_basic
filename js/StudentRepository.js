/** 학생목록을 배열을 이용해 관리 */
// 생성자 함수
function StudentRepository(){
  // this = {}
  // this.students = new Array();
  this.students = []; // 학생 목록 받는 빈 통 만들기. 
  // return this;
}
// 공통 기능이니까 함수 밖으로 뺀다.
// StudentRepository 프로토타입에 기능 추가
// 학생 등록 기능
StudentRepository.prototype.addStudent = function(student){
  this.students.push(student);
}

// 전체 학생 목록 반환
StudentRepository.prototype.findAll = function(){
  // 총점으로 정렬해서 반환
  this.students.sort(function(student1, student2){
    return student2.getSum() - student1.getSum();
  })

  return this.students;
}

// 학번으로 학생 조회
StudentRepository.prototype.findByNo = function(no){
  /*
  for (const student of this.students) {
    if(student.ssn === no){
      return student;
    }
  }
  return "일치하는 학생이 없습니다";
  */

  //find 메소드 활용. (주의: 하나 찾으면 종료됨. 여러개 못 찾음)
  //콜백함수 활용
  return this.students.find(function(student){
    return no === student.ssn;
  })
}

// 학번으로 학생 삭제
StudentRepository.prototype.deleteByNo = function(no){

  for (const student of this.students) {
    if(student.ssn === no){
      let temp = this.students.filter(stu => stu !== student)
      return temp;
    }
  }
  return "일치하는 학생이 없습니다";
  

  
}

// 학생 이름으로 검색
StudentRepository.prototype.findByName = function(name){
  /*
  for (const student of this.students) {
    if(student.name === name){
      return student;
    }
  }
  return "일치하는 학생이 없습니다";
  */

  // 배열 자체를 리턴한다.
  // 콜백 함수?
  return this.students.filter(function(student){
    return student.name ===name;
  })
}

export{StudentRepository}