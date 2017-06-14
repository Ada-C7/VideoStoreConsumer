// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// MODELS
import MovieList from './collections/movie_list';

// VIEWS
import MovieListView from './views/movie_list_view';
import SearchListView from './views/search_list_view';
var movieTemplate;
var movieList;
var searchTemplate;
// ready to go
$(document).ready(function() {
  movieTemplate = _.template($('#rental-library-template').html());
  searchTemplate = _.template($('#search-library-template').html());

  movieList = new MovieList();
  movieList.fetch();

  var params = {
    movieTemplate: movieTemplate,
    el: $('main'),
    model: movieList
  };

  var application = new MovieListView(params);

  application.render();

  $('#submit-button').click(function(event) {
    var search = {data: $.param({query: $('#title').val()})};
    
    var searchList = new MovieList();
    searchList.fetch(search);

    var params = {
      searchTemplate: searchTemplate,
      el: $('main'),
      model: searchList
    };

    var searchApp = new SearchListView(params);
    searchApp.render();
  })
});
