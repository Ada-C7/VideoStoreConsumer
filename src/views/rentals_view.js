import Backbone from 'backbone';
import Rental from '../models/rental.js';
import $ from 'jquery';
import _ from 'underscore';
import RentalView from './rental_view.js';

var RentalsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    var that = this;
    this.model.each(function(rental) {
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
    }
  }
});
