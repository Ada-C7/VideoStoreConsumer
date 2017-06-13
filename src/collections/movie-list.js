import Backbone from 'backbone';

import Movie from '../models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: function(search){
    var url = 'http://localhost:3000/movies'
    if(search){
      url += '?query=' + search
    }
  return url
}
});

export default MovieList;
