import Backbone from 'backbone';
import Movie from '../models/movie.js';

var Search = Backbone.Collection.extend({
  model: Movie,
  url: "http://localhost:3000/movies?query="
});

export default Search;
