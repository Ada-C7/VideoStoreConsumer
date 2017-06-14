import Backbone from 'backbone';

import Movie from 'models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: "http://localhost:3000/movies"
  // parse: function(data) {
  //   return data;
  // },
  // nonEmptyNames: function() {
  //   var filtered = this.filter(function(movie) {
  //     var title = movie.get("title");
  //     return title !== "" && title !== undefined && title !== null;
  //   });
  //   return new MovieList(filtered);
  // }
});

export default MovieList;
