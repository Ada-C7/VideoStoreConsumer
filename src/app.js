// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Movie from './app/models/movie.js';
import MovieList from './app/collections/movie_list.js';
import MovieView from './app/views/movie_view.js';
import MovieListView from './app/views/movie_list_view.js';

var myMovieList = new MovieList();
myMovieList.fetch();

// ready to go
$(document).ready(function() {

  var myMovieListView = new MovieListView({
    model: myMovieList,
    el: 'main'
  });
  myMovieListView.render();

});
