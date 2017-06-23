import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Rental from '../models/rental.js';

var RentalListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = _.template($('#rentals-table-template').html());
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    var compiledTableTemplate = this.template({ rentals: this.model.toJSON() });
    this.$('main').html(compiledTableTemplate);
    return this;
  },
  events: {
    'click #all-rentals' : 'showAllRentals',
    'click #outstanding-rentals' : 'showOutstandingRentals',
    'click #overdue-rentals' : 'showOverdueRentals',
    'click .check-in-button' : 'checkInRental'
  },
  showAllRentals: function () {
    this.model.url = "http://localhost:3000/rentals";
    this.model.fetch();
  },
  showOutstandingRentals: function () {
    this.model.url = "http://localhost:3000/rentals/outstanding";
    this.model.fetch();
  },
  showOverdueRentals: function () {
    this.model.url = "http://localhost:3000/rentals/overdue";
    this.model.fetch();
  },
  checkInRental: function (event) {
    var customerName = $(event.target).children().attr('data-customer-name');
    var customerID = $(event.target).children().attr('data-customer-id');
    var movieTitle = $(event.target).children().attr('data-movie-title');

    var options = {
      type: 'POST',
      url: 'http://localhost:3000/rentals/' + movieTitle + '/return?customer_id=' + customerID,
      success: function (model, response) {
        $('main').prepend("<p class='success-alert'>Successfully checked in rental of " + movieTitle + " by " + customerName + "</p>");
        $(window).scrollTop(0);
      },
      error: function (model, response) {
        $('main').prepend("<p class='error-alert'>Could not delete rental</p>");
        $(window).scrollTop(0);
      }
    };
    var rental = new Rental();
    rental.save(null, options);
  }
});

export default RentalListView;
