import Backbone from 'backbone';
import Movie from '../models/movie.js';

var RentalLibrary = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies'

});

export default RentalLibrary;
