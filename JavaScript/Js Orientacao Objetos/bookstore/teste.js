

 class Person {
   constructor(name, age, gender) {
    Object.assign(this, {name, age, gender });
  }
 }

let josue = new Person("josue",20,'m');
console.log(josue);