import $ from 'jquery';
import _ from 'underscore';
import Application from './models/application.js';
import ApplicationView from './views/application_view.js';
import Movie from './models/movie.js';
import MovieView from './views/movie_view.js';
import MovieList from './collections/movie_list.js';
import MovieListView from './views/movie_list_view.js';

var application = new Application();

var movieList = new MovieList();
movieList.fetch();

$(document).ready(function() {
  var appView = new ApplicationView({
    el: 'body',
    model: application,
    movieListTemplate: _.template($('#movie-template').html()),
    movieList: movieList,
    movieDetailsTemplate: _.template($('#movie-info-template').html())
  });
  appView.showList();
});
