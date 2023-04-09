module.exports = class Character {
  constructor(name, health, attack, defense) {
    this.name = name
    this.health = health
    this.attack = attack;
    this.defense = defense
  }
  attackEnemy(enemyPlayer) {
    enemyPlayer.health -= this.attack - enemyPlayer.defense;
  }
}

