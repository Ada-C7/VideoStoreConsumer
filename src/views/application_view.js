import Backbone from 'backbone';
import MovieList from '../collections/movie_list.js';
import MovieListView from './movie_list_view.js';
import MovieDetailsView from './movie_details_view.js';
import CustomerList from '../collections/customer_list.js';
import CustomerListView from './customer_list_view.js';
import CustomerDetailsView from './customer_details_view.js';

const ApplicationView = Backbone.View.extend({
  initialize: function (params) {
    this.movieTemplate = params.movieTemplate;
    this.movieDetailsTemplate = params.movieDetailsTemplate;
    this.customerTemplate = params.customerTemplate;
    this.customerDetailsTemplate = params.customerDetailsTemplate;
    this.alertTemplate = params.alertTemplate;
  },
  events: {
    'click h1' : 'showAllMovies',
    'click #show-movies-button' : 'showAllMovies',
    'click #show-customers-button' : 'showAllCustomers'
  },
  showAllMovies: function () {
    var movieList = new MovieList();
    movieList.fetch();

    var movieListView = new MovieListView({
      model: movieList,
      movieTemplate: this.movieTemplate,
      movieDetailsTemplate: this.movieDetailsTemplate,
      alertTemplate: this.alertTemplate,
      el: 'body'
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
      alertTemplate: this.alertTemplate,
      el: 'body'
    });
    customerListView.render();
  }
});

export default ApplicationView;
