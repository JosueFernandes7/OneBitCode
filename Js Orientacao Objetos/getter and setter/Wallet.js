class Wallet{
  #amount
  #username
  constructor(amount,username) {
    this.#amount = amount;
    this.#username = username;
  }
  get amount(){
    return this.#amount;
  }
  set amount(newAmount) {
    this.#amount = newAmount;
  }
}

let wallet = new Wallet(100,"Josue Fernandes");
console.log(`Dinheiro antigo = ${wallet.amount}`);
wallet.amount = 1000;
console.log(`Dinheiro atualizado = ${wallet.amount}`);


