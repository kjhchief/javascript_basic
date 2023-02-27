/** 학생목록을 배열을 이용해 관리 */
// 생성자 함수
function StudentRepository(){
  // this = {}
  // this.students = new Array();
  this.students = [];
  // return this;
}

// StudentRespository 프로토타입에 기능 추가
// 학생 등록
StudentRepository.prototype.addStudent = function(student){
  this.students.push(student);
}

// 전체 학생 목록 반환
StudentRepository.prototype.findAll = function(){
  // 총점으로정렬해서 반환
  this.students.sort(function(student1, student2){
    return student2.getSum() - student1.getSum();
  });
  return this.students;
}

// 학번으로 학생 조회
StudentRepository.prototype.findByNo = function(no){
  // 구현하세요...
  // for 반복문을 이용하여 검색할 수 있지만!!!! 
  // find() 메소드 활용 권장
  // 검색로직을 적용한 콜백함수 활용
  return this.students.find(student => no === student.ssn);
}

// 학번으로 학생 삭제
StudentRepository.prototype.deleteByNo = function(no){
  // 구현하세요...
  let findIndex = 0;
  const findStudent = this.students.find((student, index) => {
    if(no === student.ssn){
      findIndex = index;
      return true;
    }
    return false;
  });
  return this.students.splice(findIndex, 1);
}

// 학생 이름으로 검색
StudentRepository.prototype.findByName = function(name){
  // 구현하세요...
   return this.students.filter(student => student.name === name);
}

export {StudentRepository};
