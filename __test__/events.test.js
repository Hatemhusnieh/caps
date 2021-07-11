'use strict';
const user= require('../model');
const events = require('../events');
require('../app');
require('../vendor');
require('../driver');
require('../caps');
describe('logger middleware', ()=>{
  let consoleSpy;
  const payload = new user();

  beforeEach(()=>{
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    jest.useFakeTimers();
  });

  afterEach(()=>{
    consoleSpy.mockRestore();
  });

  it('pickup', ()=>{
    events.emit('pickup', payload);
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: picked up ${payload.orderId}`);
  });

  it('in-transit', ()=>{
    events.emit('in-transit', payload);
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER: delivered up ${payload.orderId}`);
  });

  it('delivered', ()=>{
    events.emit('delivered', payload);
    jest.runAllTimers();
    expect(consoleSpy).toHaveBeenCalled();
  });
});