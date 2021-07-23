"use strict";
const events = require("../hub/events");

events.on("in-transit", (payload) => {
  setTimeout(() => {
    console.log(`DRIVER: delivered up ${payload.orderId}`);
    console.log(`VENDOR: Thank you for delivering ${payload.orderId}`);
    events.emit("delivered", { payload });
  }, 3000);
});
