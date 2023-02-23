class Person{

  static company = "이젠컴퍼니";

  // private
  #password ="1111";

  static commonMethod(){
    console.log("공통기능입니다.");
  }

  constructor(name, age){
    this.name = name;
    this.age = age;
  }

  speak(){
    console.log(`${this.name}(${this.age})`);
  }

  get name(){
    return this._name;
  }

  set name(name){
    if(name === undefined){
      throw Error("이름을 입력하세요.");
    }
    this._name = name;
  }
}

let person = new Person("김기정", 20);
person.speak();
console.log(person.name);
try{
  person.name = undefined;
}
catch(error){
  // alert(error)
}
console.log(person.name);
console.log(Person.company);
console.log(Person.commonMethod());
console.dir(person);