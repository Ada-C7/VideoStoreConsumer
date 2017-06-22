import Backbone from 'backbone';
import Rental from '../models/rental.js';
import $ from 'jquery';
import _ from 'underscore';
import RentalView from './rental_view.js';

var RentalsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
    this.name = params.name;
  },
  render: function() {
    var that = this;
    this.model.each(function(rental) {
      var rentalView = new RentalView({
        model: rental,
        template: that.template
      });
    $('#' + that.name).append(rentalView.render().el);
    that.listenTo(rentalView, "check-in", function(movie) {
      console.log("inside rentals view");
      this.model.remove(movie);
    });
    return this;
  });
}
});

export default RentalsView;
