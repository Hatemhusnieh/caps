'use strict';
const events = require("../hub/events");
require('../driver/driver');

events.on('pickup', (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: picked up ${payload.orderId}`);
    events.emit('in-transit', payload);
  }, 1000);
});