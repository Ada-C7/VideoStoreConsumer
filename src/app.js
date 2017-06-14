import $ from 'jquery';
import _ from 'underscore';

import RentalList from './collections/rental_list';
import RentalListView from './views/rental_list_view';
import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';

$(document).ready(function() {

  var rentalList = new RentalList();
  rentalList.fetch();

  var options = {
    el:  $('.main-content'),
    model: rentalList
  };

  var application = new RentalListView(options);
  application.render();


  $("form").submit(function( event ) {
    console.log("In form submit event:");
      event.preventDefault();
      var movieList = new MovieList();
      movieList.fetch({data: {query: $('#movieName').val()  }});

      var options = {
        el:  $('#all-movie-list'),
        model: movieList
      };

      var mlv = new MovieListView(options);
      mlv.render();

  });





});
