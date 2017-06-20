import Backbone from 'backbone';

import Movie from 'models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  initialize: function() {
    this.query = undefined;
  },
  url: function() {
    var url = "http://localhost:3000/movies";
    if (this.query !== undefined) {
      return url + "?query=" + this.query;
    } else {
      return url;
    }
  }
});

export default MovieList;
