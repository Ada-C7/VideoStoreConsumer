// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import MovieList from 'collections/movie-list';
// import MovieListView from '/views/movie_list_view';

var movieList = new MovieList();
// ready to go
$(document).ready(function() {

  console.log(movieList.model);
  $('section.main-content').append('<p>Hello World!</p>');

});
