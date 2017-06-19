import Backbone from 'backbone';
import Customer from '../models/customer.js';

var CustomerList = Backbone.Collection.extend({
  model: Customer,
  url: "http://localhost:3000/customers?sort=name"
});

export default CustomerList;
