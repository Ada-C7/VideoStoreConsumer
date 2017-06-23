import Backbone from 'backbone';

import Movie from 'models/movie';

var MovieList = Backbone.Collection.extend({
  initialize : function(options){
    this.model = Movie,
    this.url = options.url
  }
  // parse: function(data) {
  //   return data.movies;
  // }
});

export default MovieList;
