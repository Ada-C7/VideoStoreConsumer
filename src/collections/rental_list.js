import Backbone from 'backbone';
import Rental from '../models/rental.js';

var RentalList = Backbone.Collection.extend({
  model: Rental,
  url: "http://localhost:3000/rentals/",
  parse: function(data) {
    return data;
  }
});

export default RentalList;
