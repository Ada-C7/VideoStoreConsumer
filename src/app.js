// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';


var movieListTemplate = _.template($('#movie-list-template').html());
var movieTemplate = _.template($('#movie-template').html());

var movieList = new MovieList();

var movieListView = new MovieListView({
  model: movieList,
  movieListTemplate: movieListTemplate,
  movieTemplate: movieTemplate,
  el: $("#application")
});

$(document).ready(function() {
  movieList.fetch();

});
