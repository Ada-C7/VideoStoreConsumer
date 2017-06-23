import $ from 'jquery';
import _ from 'underscore';
import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';

// var myMovieList = new MovieList({url: "http://localhost:3000/movies"});
// myMovieList.fetch();
// console.log("fetch");

$(document).ready(function() {
  var myMovieList = new MovieList({url: "http://localhost:3000/movies"});
  var myMovieListView = new MovieListView ({
    model: myMovieList,
    template: _.template($('#movie-template').html()),
    el: '.rental'
  });

  var searchMovieList = new MovieList(
    {url: "http://localhost:3000/movies?query="}
  );
  var searchMovieListView = new MovieListView ({
    model: searchMovieList,
    template: _.template($('#search-template').html()),
    el: '.movie-db'
  });

});
