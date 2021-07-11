'use strict';
const events = require('./events');
require('./caps');
require('./vendor');
require('./driver');
const User = require('./model')

setInterval(()=>{
  const user = new User();
  events.emit('pickup', user);
}, 5000);

