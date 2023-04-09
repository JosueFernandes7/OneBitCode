class Vehicle {
  move() {
    console.log("O Veiculo está se movendo")
  }
}

class Car extends Vehicle {
  move() {
    console.log("O carro está se movendo.");
  }
}
class Ship extends Vehicle {
  move() {
    console.log("O navio está navegando.");
  }
}
class Aircraft extends Vehicle {
  move(speed) {
    console.log("A aeronave está voando a "+ speed);
  }
}
const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

// delorean.move()
// blackPearl.move()
// epoch.move(80);

function start(vehicle) {
  console.log("Iniciando um veículo...")
  vehicle.move() // pode ser qualquer subclass de Vehicle
}

// start(delorean)
// start(blackPearl)
// start(epoch)