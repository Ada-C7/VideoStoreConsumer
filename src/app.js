// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import MovieList from './collections/movie_list.js';
import MovieListView from './views/movie_list_view.js';

var rentalList = new MovieList();

var rentalListView = new MovieListView({
  model: rentalList,
  template: _.template($('#movie-template').html()),
  el: 'body'
});


$(document).ready(function() {
  // $('section.main-content').append('<p>Hello World!</p>');

});
