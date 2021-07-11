'use strict';
const faker = require('faker');
class User{
  constructor(){
    this.orderId = faker.datatype.uuid();
    this.store = faker.company.companyName();
    this.customer = faker.name.findName();
    this.address = `${faker.address.city()}-${faker.address.country()}` 
  }
}
module.exports = User;