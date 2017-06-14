import Backbone from 'backbone';
import Movie from 'app/models/movie.js';

var SearchResults = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies?query='+'elf'

});

export default SearchResults;
