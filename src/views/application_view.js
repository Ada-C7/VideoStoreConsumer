import Backbone from 'backbone';
import MovieList from '../collections/movie_list.js';
import MovieListView from './movie_list_view.js';
import MovieDetailsView from './movie_details_view.js';
import CustomerList from '../collections/customer_list.js';
import CustomerListView from './customer_list_view.js';
import CustomerDetailsView from './customer_details_view.js';
import RentalList from '../collections/rental_list.js';
import RentalListView from './rental_list_view.js';

const ApplicationView = Backbone.View.extend({
  initialize: function (params) {
    this.movieTemplate = params.movieTemplate;
    this.movieDetailsTemplate = params.movieDetailsTemplate;
    this.customerTemplate = params.customerTemplate;
    this.customerDetailsTemplate = params.customerDetailsTemplate;
    this.rentalsTableTemplate = params.rentalsTableTemplate;
  },
  events: {
    'click h1' : 'showAllMovies',
    'click #show-movies-button' : 'showAllMovies',
    'click #show-customers-button' : 'showAllCustomers',
    'click #show-rentals-button' : 'showAllRentals'
  },
  showAllMovies: function () {
    var movieList = new MovieList();
    movieList.fetch();

    var movieListView = new MovieListView({
      model: movieList,
      movieTemplate: this.movieTemplate,
      movieDetailsTemplate: this.movieDetailsTemplate,
      el: 'main'
    });

    movieListView.render();
  },
  showAllCustomers: function () {
    var customerList = new CustomerList();
    customerList.fetch();

    var customerListView = new CustomerListView({
      model: customerList,
      customerTemplate: this.customerTemplate,
      customerDetailsTemplate: this.customerDetailsTemplate,
      el: 'body'
    });
    customerListView.render();
  },
  showAllRentals: function () {
    var rentalList = new RentalList();
    rentalList.fetch();

    var rentalListView = new RentalListView({
      model: rentalList,
      rentalsTableTemplate: this.rentalsTableTemplate,
      el: 'body'
    });
    rentalListView.render();
  }
});

export default ApplicationView;
