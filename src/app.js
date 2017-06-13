// /src/app.js
import Backbone from 'backbone';
import Movie from './models/movie.js';
import Movies from './collections/movies.js';
import MovieView from './views/movie_view.js';
import MoviesView from'./views/movies_view.js';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

var movieList = new Movies();
movieList.fetch();
console.log(movieList);
// ready to go

var moviesView = new MoviesView({
  model: movieList,
  template: _.template($("#movie-template").html()),
  el: 'main'
});

$(document).ready(function() {

  moviesView.render();


});
