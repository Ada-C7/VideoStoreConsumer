// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

var rentalList = new MovieList();

var rentalListView = new MovieListView({
  model: rentalList,
  template: _.template($('#movie-template').html()),
  el: 'main',
});

$(document).ready(function() {
  // $('section.main-content').append('<p>Hello World!</p>');

});
