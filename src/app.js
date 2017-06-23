// /src/app.js
import MovieListView from '/views/movie_list_view';
import RentalListView from '/views/rental_list_view';

import RentalList  from '/collections/rental_list';
import RentalSearchList from '/collections/rental_search_list';
import MovieList from '/collections/movie_list';


// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// var movieList = new MovieList();

var movieDatabaseResults = function(event) {
  console.log("Gimme the results dammit");
  var search = $('#movie-title').val();
  console.log(search);
  var movieList = new MovieList({query: search});
  movieList.fetch();

  var displayResults = new MovieListView({
    model: movieList,
    template: _.template($('#movie-title-list-template').html()),
    el: $('main')
  });
};

var rentalSearchDatabaseResults = function(event) {
  console.log("helloooooo?");
  var search = $('#movie-title').val().toLowerCase().replace(/\b[a-z]/g, function(letter) {
    return letter.toUpperCase();
  });
  console.log(search);
  var rentalSearchList = new RentalSearchList({query: search});
  rentalSearchList.fetch();

  var displayResults = new RentalListView({
    model: rentalSearchList,
    template: _.template($('#rental-title-list-template').html()),
    el: $('main')
  });
};




var rentalDatabaseResults = function(event) {
  var myRentalList = new RentalList();
  myRentalList.fetch();

  var displayResults = new RentalListView({
    model: myRentalList,
    template: _.template($('#rental-title-list-template').html()),
    el: $('main')
  });
};



// ready to go
$(document).ready(function() {

  var myRentalList = new RentalList();
  myRentalList.fetch();

  var displayResults = new RentalListView({
    model: myRentalList,
    template: _.template($('#rental-title-list-template').html()),
    el: $('main')
  });

  $('#search-database').click(movieDatabaseResults);
  $('#search-library').click(rentalSearchDatabaseResults);
  $('#library').click(rentalDatabaseResults);

});
