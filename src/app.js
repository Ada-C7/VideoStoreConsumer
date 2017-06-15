// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// MODELS
import MovieList from './collections/movie_list';

// VIEWS
import MovieListView from './views/movie_list_view';

var movieTemplate;
var searchTemplate;
var addFormTemplate;
// ready to go
var rentalLibrary = function() {
  var movieList = new MovieList();
  movieList.fetch();
  var params = {
    movieTemplate: movieTemplate,
    el: $('main'),
    model: movieList
  };
  var application = new MovieListView(params);
  application.render();
};

var movieLibrary = function() {
  var search = {data: $.param({query: $('#search').val()})};
  var searchList = new MovieList();
  searchList.fetch(search);
  var params = {
    movieTemplate: searchTemplate,
    addFormTemplate: addFormTemplate,
    el: $('main'),
    model: searchList
  };
  var searchApp = new MovieListView(params);
  searchApp.render();
};

$(document).ready(function() {
  movieTemplate = _.template($('#rental-library-template').html());
  searchTemplate = _.template($('#search-library-template').html());
  addFormTemplate = _.template($('#addto-rental-library-template').html());

  rentalLibrary();

  $('#home').click(function(event) {
    rentalLibrary();
  });

  $('#submit-button').click(function(event) {
    movieLibrary();
  });
});
