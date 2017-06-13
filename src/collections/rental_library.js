import Backbone from 'backbone';
import Movie from 'app/models/movie.js';

var RentalLibrary = Backbone.Collection.extend({
  model: Movie,
  url: ''
});

export default RentalLibrary;
