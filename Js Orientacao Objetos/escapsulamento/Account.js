class Account {
  // definir atributos privados

  #password
  #balance = 0
  constructor(user) {
    this.email = user.email
    this.#password = user.password
  }
  getBalance(email,password) {
    return this.#authenticate(email,password) ? this.#balance : null
  }
  #authenticate(email,password) {
    return (email === this.email && password === this.#password)
  }
}

const user = {
  email: "Josue@email.com",
  password: "1234",
}
const myAccount = new Account(user)
console.log(myAccount)

console.log("Saldo = "+myAccount.getBalance("Josue@email.com","1234"));