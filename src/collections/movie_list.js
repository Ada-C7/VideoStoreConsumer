import Backbone from 'backbone';
import Movie from '../models/movie.js';

var MovieList = Backbone.Collection.extend({
  initialize: function (models, options) {
    this.model = Movie;
    this.url = function () {
      return 'http://localhost:3000/' + options.path;
    };
  }
});

export default MovieList;
