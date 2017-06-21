import Backbone from 'backbone';
import Customer from '../models/customer';

var CustomerList = Backbone.Collection.extend({
  model: Customer,
  // url: 'http://localhost:3000/movies',

});

export default CustomerList;
