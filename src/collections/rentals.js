import Backbone from 'backbone';
import Rental from '../models/rental.js';

var Rentals = Backbone.Collection.extend({
  model: Rental,
});

export default Rentals;
