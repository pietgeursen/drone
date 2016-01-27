'use strict'
const stampit = require('stampit')
const HealthyStamp = require('./healthy')

const DamageableStamp = stampit()
  .init(function(){
    let health = HealthyStamp({hp: this.hp})
    this.getHp = function(){return health.getHp()}  
    this.damage = function(damage){health.setHp(health.getHp() - damage)}
  })


module.exports = DamageableStamp
