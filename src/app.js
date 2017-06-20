// /src/app.js
import Backbone from 'backbone';
import Movie from './models/movie.js';
import Movies from './collections/movies.js';
import MovieView from './views/movie_view.js';
import MoviesView from'./views/movies_view.js';
import Customer from './models/customer.js';
import Customers from './collections/customers.js';
import CustomerView from './views/customer_view.js';
import CustomersView from'./views/customers_view.js';

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

var movieList = new Movies();
movieList.fetch();
console.log(movieList);
// ready to go

var moviesView = new MoviesView({
  model: movieList,
  template: _.template($("#movie-template").html()),
  el: 'main'
});



$(document).ready(function() {

  moviesView.render();

  $('.view-customers').click(function() {
    $('.rental').addClass('hide');
    $('.main-content').removeClass('hide');
    var customerList = new Customers();
    customerList.fetch();
    // ready to go

    var customersView = new CustomersView({
      model: customerList,
      template: _.template($("#customer-template").html()),
      el: 'main'
    });
    customersView.render();
  });

  $('.view-movies').click(function() {
    $('.rental').addClass('hide');
    $('.main-content').removeClass('hide');
    movieList.fetch();
    moviesView.render();
  });


});
