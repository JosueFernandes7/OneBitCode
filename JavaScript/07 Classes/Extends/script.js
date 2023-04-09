class Veiculo {
  constructor(rodas,combustivel) {
    this.rodas = rodas;
    this.combustivel = combustivel;
  }
  element() {
    console.log('teste')
  }
}

class Moto extends Veiculo {
  constructor(rodas,combustivel,capacete) {
    super(rodas,combustivel);
    this.capacete = capacete;
  }
}

const civic = new Veiculo(4,'Diesel');
const honda = new Moto(4, 'Gasolina', true);
