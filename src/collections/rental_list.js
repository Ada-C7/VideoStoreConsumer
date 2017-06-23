import Backbone from 'backbone';
import Rental from '../models/rental.js';

var RentalList = Backbone.Collection.extend({
  model: Rental,
  url: "http://localhost:3000/rentals/by-customer?customer_id="
});

export default RentalList;
