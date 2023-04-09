const Character = require('./Character.js')

module.exports = class Mage extends Character {
  constructor(name, health, attack, defense, magicPts) {
    super(name, health, attack, defense)
    this.magicPts = magicPts
  }
  attackEnemy(enemyPlayer) {
    enemyPlayer.health -= (this.attack + this.magicPts) - enemyPlayer.defense;
  }
  heal(player) {
    player.health += this.magicPts * 2;
  }
}
