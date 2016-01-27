const stampit = require('stampit')

const DamageableStamp = stampit({
  init() {
    this.damage = (damage) => {
      return this.hp -= damage
    }}
  })


module.exports = DamageableStamp
