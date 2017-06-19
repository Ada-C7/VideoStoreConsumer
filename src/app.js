
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieList from './collections/movie_list.js';
import CustomerList from './collections/customer_list.js';
import AppView from './views/app_view.js';


var myCustomersList = new CustomerList();
// myCustomersList.fetch();
var myMoviesList = new MovieList();
myMoviesList.fetch();

$(document).ready(function() {

  console.log("in document.ready");
  var myAppView = new AppView({
    customer_list: myCustomersList,
    movie_list: myMoviesList
  });

  myAppView.render();

});
