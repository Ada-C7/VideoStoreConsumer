import Backbone from 'backbone';
import MovieList from '../collections/movie_list.js';
import MovieListView from './movie_list_view.js';
import MovieDetailsView from './movie_details_view.js';
import CustomerList from '../collections/customer_list.js';
import CustomerListView from './customer_list_view.js';
import RentalList from '../collections/rental_list.js';
import RentalListView from './rental_list_view.js';

const ApplicationView = Backbone.View.extend({
  initialize: function (params) {
    this.createMovieListView();
  },
  events: {
    'click h1' : 'showAllMovies',
    'click #show-movies-button' : 'showAllMovies',
    'click #show-customers-button' : 'showAllCustomers',
    'click #show-rentals-button' : 'showAllRentals',
    'click #search-button' : 'searchMovies'
  },
  createMovieListView: function () {
    this.movieList = new MovieList();
    this.movieList.fetch();

    this.movieListView = new MovieListView({
      model: this.movieList,
      el: 'main'
    });
  },
  showAllMovies: function () {
    this.movieList.fetch();
    this.movieListView.render();

    console.log("GETTING CLICKED FROM APP VIEW");
  },
  searchMovies: function () {
    this.movieListView.searchMovies();
  },
  showAllCustomers: function () {
    var customerList = new CustomerList();
    customerList.fetch();

    var customerListView = new CustomerListView({
      model: customerList,
      el: 'body'
    });
    customerListView.render();
  },
  showAllRentals: function () {
    var rentalList = new RentalList();
    rentalList.fetch();

    var rentalListView = new RentalListView({
      model: rentalList,
      el: 'body'
    });
    rentalListView.render();
  }
});

export default ApplicationView;
