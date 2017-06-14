import $ from 'jquery';
import _ from 'underscore';
import Movie from './models/movie.js';
import MovieView from './views/movie_view.js';
import MovieList from './collections/movie_list.js';
import MovieListView from './views/movie_list_view.js';

var movieList = new MovieList();
movieList.fetch();

$(document).ready(function() {
  var movieListView = new MovieListView({
    model: movieList,
    template: _.template($('#movie-template').html()),
    el: 'body'
  });
  movieListView.render();
});
