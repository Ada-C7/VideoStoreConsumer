import Backbone from 'backbone';
import Movie from '../models/movie';
import $ from 'jquery';
import _ from 'underscore';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: function() { return 'http://localhost:3000/movies'},
});



export default MovieList;
