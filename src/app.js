import $ from 'jquery';
import _ from 'underscore';

import RentalList from './collections/rental_list';
import RentalListView from './views/rental_list_view';
import MovieList from 'collections/movie_list';
import MovieListView from 'views/movie_list_view';
import CustomerList from 'collections/customer_list';
import CustomerListView from 'views/customer_list_view';

$(document).ready(function() {

  var rentalList = new RentalList();
  rentalList.fetch();

  var options = {
    el:  $('.main-content'),
    model: rentalList
  };

  var application = new RentalListView(options);
  application.render();




  $("form").submit(function(event) {
      event.preventDefault();
      var movieList = new MovieList();
        console.log($('#movieName').val());
      if ($('#movieName').val() === ""){
        alert("Please, enter message term")
        console.log("Please, enter message term")
      }
      else{
        movieList.fetch({data: {query: $('#movieName').val()  }});
      }

      var options = {
        el:  $('#all-movie-list'),
        model: movieList
      };
      var mlv = new MovieListView(options);
      mlv.render();

  });

  var customerList = new CustomerList();
  customerList.fetch();

  var options = {
    el:  $('.main-content'),
    model: customerList
  };

  var customerListView = new CustomerListView(options);
  customerListView.render();



});
