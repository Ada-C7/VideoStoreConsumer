import Backbone from 'backbone';

import Movie from 'models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: "http://localhost:3000/movies",
  parse: function(data) {
    return data.movies;
  }
});

export default MovieList;
