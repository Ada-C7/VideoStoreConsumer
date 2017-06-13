// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import MovieList from 'collections/movie-list';
import MovieListView from '/views/movie_list_view';

var movieList = new MovieList();

var movielistView = new MovieListView({
  model: movieList,
  template: _.template($('#movie-list-template').html()),
  el: '.main-content'
});
// ready to go
$(document).ready(function() {

  movielistView.render();
  $('section.main-content').append('<p>Hello World!</p>');

});
