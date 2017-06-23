import Backbone from 'backbone';
import DBMovie from '../models/db_movie.js';

var DBMovies = Backbone.Collection.extend({
  model: DBMovie,
  url: 'http://localhost:3000/movies'
});

export default DBMovies;
