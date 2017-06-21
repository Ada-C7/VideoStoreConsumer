import Backbone from 'backbone';
import Rental from '../models/rental.js';

var Rentals = Backbone.Collection.extend({
  model: Rental,
  url: "http://localhost:3000/rentals",
  comparator: function (movie) {
    return rental.get('due_date');
  },
});

export default Movies;
