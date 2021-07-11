'use strict';
const events = require('./events');
require('./caps');
require('./vendor');
require('./driver');
const User = require('./model')

let runs = 5;
const set = setInterval(()=>{
  if(!runs){
    clearInterval(set);
  }
  runs--;
  const user = new User();
  events.emit('pickup', user);
}, 5000);

