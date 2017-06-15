// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import MovieList from './collections/movie_list';
import MovieListView from './views/movie_list_view';

var storeList = function(event) {
  var movieList = new MovieList();
  movieList.fetch();

  var rentals = new MovieListView({
    model: movieList,
    templateMovieList: _.template($('#movie-card-template').html()),
    el: $('#application')
  });
  rentals.render();
};
console.log("I am outside of database list");

var databaseList = function(event) {
  console.log("I am inside the database");
  var queryParams = $('#queryParams').val();
  console.log(queryParams);
  var searchList = new MovieList();
  searchList.customUrl(queryParams);
  searchList.fetch();

  var searches = new MovieListView({
    model: searchList,
    templateMovieList: _.template($('#movie-card-template').html()),
    el: $('#application')
  });
  searches.render();
}


// ready to go
$(document).ready(function() {

  $(".list_store_rentals").click(storeList);
  $(".s-button").click(databaseList);







  // $('section.main-content').append('<p>Hello World!</p>');

});
