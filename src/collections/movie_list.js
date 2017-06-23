import Backbone from 'backbone';
import $ from 'jquery';
import Movie from '../models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  initialize: function(options) {
    this.query = options.query;
  },
  url: function() {
    return "http://localhost:3000/movies?query="+this.query;
  }
});

export default MovieList;
