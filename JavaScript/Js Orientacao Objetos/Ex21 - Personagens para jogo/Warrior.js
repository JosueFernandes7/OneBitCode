const Character = require('./Character.js')

module.exports = class Warrior extends Character {
  constructor(name, health, attack, defense, shieldPts,currentStance) {
    super(name, health, attack, defense)
    this.shieldPts = shieldPts
    this.currentStance = currentStance
  }
  attackEnemy(enemyPlayer) {
    if(this.currentStance == "Attackin") {
          enemyPlayer.health -= (this.attack + this.magicPts) - enemyPlayer.defense;
    }
  }
  heal(player) {
    player.health += this.magicPts * 2;
  }
  changeStance() {
    if(this.currentStance == "Attackin") {
      this.currentStance = "Defending";
      this.defense += this.shieldPts; 
    } else {
      this.currentStance = "Attackin"
      this.defense -= this.shieldPts;
    }
  }
}
