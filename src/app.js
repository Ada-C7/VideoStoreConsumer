import $ from 'jquery';
import _ from 'underscore';
import MovieList from 'collections/movie_list.js';
import MovieListView from 'views/movie_list_view.js';
import ApplicationView from 'views/application_view.js';
import CustomerList from 'collections/customer_list.js';
import CustomerListView from 'views/customer_list_view.js';


var myMovieList = new MovieList();
myMovieList.fetch();


var myMovieListView = new MovieListView({
  model: myMovieList,
  template: _.template($('#movie-list-template').html()),
  el: 'main'
});

var myCustomerList = new CustomerList();
myCustomerList.fetch();
console.log(myCustomerList);

var myCustomerListView = new CustomerListView({
  model: myCustomerList,
  template: _.template($('#customer-list-template').html()),
  el: 'main'

});




$(document).ready(function() {
  myMovieListView.render();
  myCustomerListView.render();

});
