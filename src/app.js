// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';

// MODELS
import MovieList from './collections/movie_list';
import CustomerList from './collections/customer_list';

// VIEWS
import MovieListView from './views/movie_list_view';
import CustomerListView from './views/customer_list_view';

var movieTemplate;
var searchTemplate;
var addFormTemplate;
var movieCheckoutFormTemplate;
var customerTemplate;
// ready to go
var rentalLibrary = function() {
  var movieList = new MovieList();
  movieList.fetch();
  var params = {
    movieTemplate: movieTemplate,
    movieCheckoutFormTemplate: movieCheckoutFormTemplate,
    customerShowMethod: customerShow,
    el: $('main'),
    model: movieList
  };
  var application = new MovieListView(params);
  application.render();
};

var customerShow = function() {
  var customerList = new CustomerList();
  customerList.fetch();
  var params = {
    customerTemplate: customerTemplate,
    el: $('main'),
    model: customerList
  };
  var application = new CustomerListView(params);
  application.render();
};

var movieLibrary = function() {
  var search = {data: $.param({query: $('#search').val()})};
  var searchList = new MovieList();
  searchList.fetch(search);
  var params = {
    movieTemplate: searchTemplate,
    addFormTemplate: addFormTemplate,
    el: $('main'),
    model: searchList,
    renderRentalLibraryCallback: rentalLibrary
  };
  var searchApp = new MovieListView(params);
  searchApp.render();
};

$(document).ready(function() {
  $('#add-form').hide();
  $('#movie-checkout-form').hide();

  movieTemplate = _.template($('#rental-library-template').html());
  searchTemplate = _.template($('#search-library-template').html());
  addFormTemplate = _.template($('#addto-rental-library-template').html());
  movieCheckoutFormTemplate = _.template($('#movie-checkout-template').html());
  customerTemplate = _.template($('#customer-checkout-template').html());

  rentalLibrary();

  $('#home').click(function(event) {
    rentalLibrary();
  });

  $('#submit-button').click(function(event) {
    movieLibrary();
  });
});
