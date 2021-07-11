'use strict';
const events = require('./events');
events.on('pickup', payload => logger('pickup', payload));
events.on('in-transit', payload => logger('in-transit', payload));
events.on('delivered', payload => logger('delivered', payload));

function logger(event, payload) {
  console.log('EVENT', { event, time: new Date().toISOString(), payload });
}
