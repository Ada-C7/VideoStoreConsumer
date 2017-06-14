import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: "http://localhost:3000/movies"
});

export default MovieList;
