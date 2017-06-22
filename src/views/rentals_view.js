import Backbone from 'backbone';
import Rental from '../models/rental.js';
import $ from 'jquery';
import _ from 'underscore';
import RentalView from './rental_view.js';

var RentalsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.name = params.name;
    this.customer = params.customer;
    this.listenTo(this.model, "change", this.render);
    // this.listenTo(this.collection, 'destroy', this.render);
  },
  render: function() {
    var that = this;
    this.model.each(function(rental) {
      var rentalView = new RentalView({
        model: rental,
        template: that.template,
        // customer: that.customer
      });
    $('#' + that.name).append(rentalView.render().el);
    return this;
  });
}
});

export default RentalsView;
