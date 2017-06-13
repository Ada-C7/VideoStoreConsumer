import $ from 'jquery';
import _ from 'underscore';
// ready to go

import MovieView from 'app/collections/movie_view';
// import MovieListView from 'app/views/movie_list_view';
import RentalLibrary from 'app/views/rental_library.js';


var movieView = new MovieView();
// movieView.fetch();

$(document).ready(function() {

  var movieListView = new MovieListView({
  model: movieList,
  template:
  _.template($('#movie-card-template').html()),
  el: 'main'
});
petListView.render();

  $('section.main-content').append('<p>Hello World!</p>');

});
