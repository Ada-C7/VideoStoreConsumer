import Backbone from 'backbone';

import Movie from 'models/movie';

var SearchMovie = Backbone.Collection.extend({
  model: Movie,
  initialize: function(models, options) {
    this.query = options.query;
  },
  url: function() {
    return "http://localhost:3000/movies" + "/" + this.query;
  }
});


export default SearchMovie;
