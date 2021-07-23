"use strict";
const events = require("./hub/events");
require("./hub/caps");
require("./vendor/vendor");
require("./driver/driver");
const User = require("./model/model");

let runs = 5;
const set = setInterval(() => {
  if (!runs) {
    clearInterval(set);
  }
  runs--;
  const user = new User();
  events.emit("pickup", user);
}, 5000);
