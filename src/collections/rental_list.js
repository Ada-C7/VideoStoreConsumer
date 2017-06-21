import Backbone from 'backbone';
import Movie from '../models/movie.js';

var RentalList = Backbone.Collection.extend({
  model: Rental,
  url: 'http://localhost:3000/rentals'
});

export default RentalList;
