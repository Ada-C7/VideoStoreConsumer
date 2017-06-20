// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Movie from './app/models/movie.js';
import MovieView from './app/views/movie_view.js';
import MovieList from './app/collections/movie_list.js';
import MovieListView from './app/views/movie_list_view.js';


var myMovieList = new MovieList();

var successHandler = function(collection, response, options) {
  // console.log('Success, We have the list', collection);
};

var errorHandler = function(collection, response, options) {
  // console.log('Fail to show the list');
};

myMovieList.fetch({
  //reset: true,
  success: successHandler,
  error: errorHandler
});

// ready to go
$(document).ready(function() {

  var myMovieListView = new MovieListView({
    model: myMovieList,
    el: 'main'
  });

  myMovieListView.render();

});
