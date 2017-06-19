import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import CustomerView from './customer_view.js';
import Customer from '../models/customer.js';

const CustomerListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.model = params.model;
    this.model.fetch();

  },


  render: function() {

    console.log("inside customer list render ");
    this.$("#customer-data").empty();
    this.$("#customer-list").show();

    this.$("#movie-headers").hide();
    this.$("#all-movie-stuff").hide();

    var that = this;
    this.model.each(function(customer) {
      var customerView = new CustomerView({
        model: customer,
        template: that.template,
        tagName: "tr"
      });
      console.log("log customer: ");
      console.log(customer);
      that.$("#customer-data").append(customerView.render().el);
      // that.listenTo(movieView, "showMovie", that.showMovieDetails);
    });

    return this;
  },

  events: {
    "click #customer-list-button": "render"
    // sort button click events here
  }


});

export default CustomerListView;
