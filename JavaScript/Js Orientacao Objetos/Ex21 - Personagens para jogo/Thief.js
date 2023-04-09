const Character = require('./Character.js')

module.exports = class Thief extends Character {
  attackEnemy(enemyPlayer) {
    enemyPlayer.health -= 2 * (this.attack - enemyPlayer.defense)
  }
}
