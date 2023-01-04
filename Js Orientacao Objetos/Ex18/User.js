class User {
  constructor(fullname, email, password) {
    this.fullname = fullname
    this.email = email
    this.password = password
  }
  login(emailLogin,passwordLogin) {
    let validateLogin = (emailLogin == this.email) && (passwordLogin == this.password)
    if(validateLogin) {
      console.log("Login bem Sucedido");
    } else {
      console.log("Erro no Login");
    }
  }
}

let josue = new User("josue","josue7",1234);
josue.login("josue7",1234)
console.log(josue.password);