// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
// import Movie from '/models/movie';
import MovieList from 'collections/movie_list';
// import MovieView from '/views/movie_view';
import MovieListView from 'views/movie_list_view';

var homeHandler = function() {
  window.location.replace("http://localhost:8081");
};

var myMovieList = new MovieList();
myMovieList.fetch();

// ready to go
$(document).ready(function() {
  var myMovieListView = new MovieListView( {
    model: myMovieList,
    template: _.template($('#movie-template').html()),
    el: 'main'
  });
  myMovieListView.render();

  $('.home').click(homeHandler);
});
