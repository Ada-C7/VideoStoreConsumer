import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';
import CustomerList from '../collections/customer_list.js';
import Customer from '../models/customer.js';
import CustomerListView from './customer_list_view.js';
import Rental from '../models/rental.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = _.template($('#movie-template').html());

    // this.rentalModel = new Rental();

    this.listenTo(this.model, "update", this.render);

    this.model.fetch({
      success: function(data) {

      },
      failure: function(data) {

        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  },
  render: function() {
    this.$('#movie-list').empty();

    this.model.each((movie) => {
      var movieView = new MovieView({
        model: movie,
        template: this.template
      });
      this.$('#movie-list').append(movieView.render().el);
      this.listenTo(movieView, 'selectedMovie', this.showMovieDetails);
    });

    return this;
  },
  events: {
    "submit" : "searchFunction",
    // "click #check_out" : "checkoutFunction"
    // "click" : "hideMovieDetails"
  },
  getInputData: function(){
    var input = this.$("input[name='query']").serialize();

    this.$("input[name='query']").val('');


    return input;
  },
  // getCustomerData: function() {
  //   var input = this.$("option").val();
  //
  //   // this.$("option").val('');
  //
  //   return input;
  // },
  searchFunction: function(event){
    event.preventDefault();
    let query = this.getInputData();

    this.model.fetch({
      data: query,
      success: function(data) {

      },
      failure: function(data) {

        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  },
  showMovieDetails: function(movie){

    this.$("#movie-details").empty();
    this.$("#movie-details").toggleClass('hide');

    if (this.detailsView) {
      this.detailsView.remove();
      this.detailsView = undefined;
    }

    // create new instance of Movie View
    this.detailsView = new MovieView({
      model: movie,
      template: _.template($('#tmpl-movie-details').html())
    });

  this.$('#movie-details').append(this.detailsView.render().el);

    var customers = new CustomerList();
    var customersView = new CustomerListView({
      model: customers,
      template: _.template($('#tmpl-customer').html()),
      el: '#customer-list'

    });
    customersView.render();
    this.listenTo(this.detailsView, 'hideDetails', this.hideMovieDetails);
  },
  hideMovieDetails: function(){
    this.$('#movie-details').toggleClass('hide');

    if (this.detailsView) {
      this.detailsView.remove();
      this.detailsView = undefined;
    }
  }
});

export default MovieListView;
