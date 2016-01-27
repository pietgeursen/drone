'use strict'
const stampit = require('stampit')
const HealthyStamp = require('./healthy')

const DamageableStamp = stampit()
  .init(function (context) {
    let health = HealthyStamp({ hp: context.args[0] })
    this.getHp = function () { return health.getHp() }
    this.damage = function (damage) {
      health.setHp(health.getHp() - damage)
      return health.getHp()
    }
  })

module.exports = DamageableStamp
