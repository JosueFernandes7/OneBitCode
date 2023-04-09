const Address = require("./Adress");
// const addr = new Address("24 maio",1080,"Centro","Rio Grande","RS");

const Person = require("./Person");


const john = new Person("John Doe",new Address("João Alfredo",494,"Centro","Rio Grande","RS"))

console.log(john.adress.fullAddress());
