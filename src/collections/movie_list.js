import Backbone from 'backbone';
import Movie from '../models/movie';
import $ from 'jquery';
import _ from 'underscore';

var MovieList = Backbone.Collection.extend({
  initialize: function(options){
    options || (options = {});
    this.query = options.query;
  },
  model: Movie,
  url: function() { return 'http://localhost:3000/movies?query=' + this.query},
});



export default MovieList;
