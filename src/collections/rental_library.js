import Backbone from 'backbone';
import Movie from '../models/movie.js';
console.log("crumb 5");


var RentalLibrary = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies'

});

export default RentalLibrary;
