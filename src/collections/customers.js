import Backbone from 'backbone';
import Customer from '../models/customer.js';

var Customers = Backbone.Collection.extend({
  model: Customer,
  url: "http://localhost:3000/customers"
});
// can add sort
export default Customers;
