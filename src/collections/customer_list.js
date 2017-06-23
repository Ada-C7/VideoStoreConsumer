import Backbone from 'backbone';
import Customer from '../models/customer';
import $ from 'jquery';

var CustomerList = Backbone.Collection.extend({
  model: Customer,
  url: 'http://localhost:3000/customers',
  comparator: function (model) {
        return model.get("name");
  }
});


export default CustomerList;
