const Address = require("./Adress")

// class Person {
//   constructor(name,street,number,neighborhood,city,state) {
//     this.name = name
//     this.adress = new Address(street,number,neighborhood,city,state);
//   }
// }
class Person {
  constructor(name,adress) {
    this.name = name
    this.adress = adress
  }
}
module.exports = Person