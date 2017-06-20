import Backbone from 'backbone';
import Movie from '../models/movie.js';

var Movies = Backbone.Collection.extend({
  model: Movie,
  url: "http://localhost:3000/movies",
  comparator: function (movie) {
    return movie.get('title');
  },
});

export default Movies;
