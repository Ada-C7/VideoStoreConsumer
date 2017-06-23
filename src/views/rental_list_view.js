import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Rental from '../models/rental.js';
import RentalList from "../collections/rental_list.js";
import RentalView from './rental_view.js';

const RentalListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.model = params.model;
  },

  render: function() {
    this.$("#rentals-list").empty();
    console.log("inside rental list render ");
    console.log(this.model);
    var that = this;
    this.model.each(function(rental) {
      var rentalView = new RentalView({
        model: rental,
        template: that.template,
        tagName: "tr"
      });

      that.$("#rentals-list").append(rentalView.render().el);
    });
    console.log(this);
    return this;
  },

  // events: {
  //   "click .check-in" : "checkInRental"
  // },
  //
  // checkInRental: function() {
  //   console.log("clicked check in rental");
  // }

});
export default RentalListView;
