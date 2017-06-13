import Backbone from 'backbone';

import Movie from 'app/models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: "http://localhost:3000/movies",
  parse: function(data) {
    return data;
  },
  nonEmptyNames: function() {
    var filtered = this.filter(function(movie) {
      var name = movie.get("name");
      return name !== "" && name !== undefined && name !== null;
    });
    return new MovieList(filtered);
  }
});

export default MovieList;
