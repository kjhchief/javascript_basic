// 유효성 검증 유틸리티 함수
let Validator = {};

Validator.hasText = function(string){
  return string == undefined;
}

export {Validator};
