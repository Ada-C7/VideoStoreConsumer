import Backbone from 'backbone';
import Movie from '../models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',

  customUrl: function(search) {
    this.url = this.url + "?query=" + search;
    console.log(this.url);
    return this;
  }

});



export default MovieList;
