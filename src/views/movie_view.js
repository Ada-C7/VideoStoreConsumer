import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from './models/movie.js';

const MovieView = Backbone.View.extend({
  initialize: function() {


  },

  render: function() {


  },

  events: {
    // .movie (title or image) : sendMovie
    // rent button click : rentMovie
    // #addToLib click : addToLib
  },

  addToLib: function() {
    // call create on the object
    // disable and change button
    // add opaque div to view
  },

  sendMovie: function(event) {
    // trigger("sendMovie", this);
  },

  rentMovie: function() {
    alert("you have rented this movie");
  }

});

export default MovieView;
