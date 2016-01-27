'use strict'
const stampit = require('stampit')

const HealthyStamp = stampit({
  init() {
    let _hp = this.hp
    this.getHp = () => _hp
    this.setHp = (hp) => _hp = hp < 0 ? 0 : hp
  }
  })


module.exports = HealthyStamp
