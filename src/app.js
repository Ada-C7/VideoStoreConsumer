// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

import MovieList from './collections/movie_list';
import Movie from './models/movie';
import MovieListView from './views/movie_list_view';
import MovieView from './views/movie_view';
import Rental from './models/rental';
import RentalView from './views/rental_view';

var buildMovieList = function(event){
  $("#search-bar").hide();

  console.log("clicked on the button");

  var movieList = new MovieList();
  movieList.fetch(
    { error: function(model, response) { alert("Server Error - Try Again Later") },
      success: function(model, response) { console.log( "API success - got movies" ) }
    }
  );

  var movieListView = new MovieListView({
    model: movieList,
    templateCard: _.template( $('#movie-card-template').html() ),
    el: 'main'
  });
};

var buildMovieListTMDb = function(event) {
  console.log("Getting movies from TMDb!");
  var searchText = $('#search').val();
  // console.log(searchText);
  var movieList = new MovieList();
  movieList.cumstomUrl(searchText);
  movieList.fetch(
    { error: function(model, response) { alert("Server Error - Try Again Later") },
      success: function(model, response) { console.log( "API success - got movies" ) }
    }
  );

  var movieListView = new MovieListView({
    model: movieList,
    templateCard: _.template( $('#movie-card-template').html() ),
    el: 'main'
  });
};

var toggleSearchBar = function(event) {
  event.stopPropagation();
  $("#search-bar").show();
};

// var showSearchBarForSingleMovie = function(event) {
//   // $("#search-bar").show();
//   // $(".button").removeClass("btn-search");
//   // $(".button").addClass("btn-single-search");
//   // $('.btn-single-search').click( buildMovieView );
//
// };

var checkoutMovie = function(event) {

  console.log("inside checkoutMovie");
  var rental = new Rental();
  var rentalView = new RentalView({
    model: rental,
    templateCard: _.template( $('#rental-checkout-template').html() ),
    el: 'main'
  });
}
// var buildMovieView = function(event) {
//   console.log("in the single movie view");
//   var searchText = $('.btn-single-search').val();
//   var movie = new Movie({
//     url: "http://localhost:3000/movies/" + searchText
//     // searchUrl: this.url + searchText
//   });
//     console.log(this.url);
//
//   movie.fetch();
//   // var movieView = new MovieView{
//   //   model: movie,
//   //
//   // }
//
// };

$(document).ready(function() {

  $('#rental-list').click( buildMovieList );
  $('.btn-search').click( buildMovieListTMDb );
  $('#new-movies-list').click( toggleSearchBar);
  $('#rental-checkout').click( checkoutMovie );
  // $('#rental-single').click( showSearchBarForSingleMovie );
});
