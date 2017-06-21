import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Movie from '../models/rental.js';
import Customers from '../collections/customers.js';
import CheckoutMovieView from './checkout_movie_view.js';
import CheckoutCustomersView from './checkout_customers_view.js';

var CheckoutView = Backbone.View.extend({
  initialize: function(params) {
    this.movie = params.movie;
    this.template = params.template;
  },
  render: function() {
    // console.log("inside render in CheckoutView");
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    var checkoutMovieView = new CheckoutMovieView({
      model: this.movie,
      template: _.template($("#checkout-movie-template").html())
    });

    var customerDropdownList = new Customers();
    customerDropdownList.fetch();
    // pass in a hash with key success then that goes to a funciton.
    // can make the view rerender from that function.
    // console.log(customerDropdownList);
    var checoutCustomersView = new CheckoutCustomersView({
      model: customerDropdownList,
      template: _.template($("#checkout-customer-template").html())
    });

    this.checkoutMovieView = checkoutMovieView;
    this.checoutCustomersView = checoutCustomersView;

    this.$('#movie-customer-area').append(checkoutMovieView.render().el);
    this.$('#movie-customer-area').append(checoutCustomersView.render().el);
    return this;
  },
  events: {
    'click h3.button.checkout': 'createRental'
  },
  createRental: function(event) {
    var rental_movie = this.checkoutMovieView.selectedMovie();
    var rental_customer = this.checoutCustomersView.selectedCustomer();
    var date = new Date();
    date.setDate(date.getDate() + 15);
    console.log(date);
    // console.log(rental_movie);
    var attributes = {title: rental_movie, customer_id: rental_customer, due_date: date};
    var options = {
        type: 'POST',
        url: 'http://localhost:3000/rentals/' + rental_movie + '/check-out',
        customer_id: rental_customer
      };
    this.model.save(attributes, options);
    $('#movie-customer-area').append("<h2>Movie Checked out! <h2> <h3>Due Date: " + date);
  }
});

export default CheckoutView;
