import Backbone from 'backbone';
import $ from 'jquery';
import Movie from '../models/movie';

var RentalSearchList = Backbone.Collection.extend({
  model: Movie,
  initialize: function(options) {
    this.query = options.query;
  },
  url: function() {
    return "http://localhost:3000/movies/"+this.query;
  }
});

export default RentalSearchList;
