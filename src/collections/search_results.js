import Backbone from 'backbone';
import Movie from '../models/movie.js';

console.log("crumb 6");

var SearchResults = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies?query=' 

});


export default SearchResults;
