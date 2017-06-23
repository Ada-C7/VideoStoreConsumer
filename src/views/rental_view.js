import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Rental from '../models/rental.js';

const RentalView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },

  render: function() {
    console.log("rendering indiv rental view");
    console.log(this.model);
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click .check-in" : "checkInRental"
  },

  checkInRental: function() {
    console.log();
    console.log("clicked check in rental");
    var returnedRental = new Rental(this.model);
    returnedRental.url = "http://localhost:3000/rentals" + this.model.get("title") + "/return?customer_id=" + this.model.get("customer_id");

  }

});

export default RentalView;
