// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// MODELS
import MovieList from './collections/movie_list';

// VIEWS
import MovieListView from './views/movie_list_view';
var movieTemplate;
var movieList;
// ready to go
$(document).ready(function() {
  movieTemplate = _.template($('#rental-library-template').html());
  movieList = new MovieList();
  movieList.fetch();

  var params = {
    movieTemplate: movieTemplate,
    el: $('main'),
    model: movieList
  };

  var application = new MovieListView(params);

  application.render();

});
