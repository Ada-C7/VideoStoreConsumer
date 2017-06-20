import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import CustomerView from './customer_view.js';
import Customer from '../models/customer.js';

const CustomerListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.model = params.model;
    // this.model.fetch();
    this.listenTo(this.model,"reset", this.render);

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
      // console.log("log customer: ");
      // console.log(customer);
      that.$("#customer-data").append(customerView.render().el);
    });

    return this;
  },

  events: {
    "click #customer-list-button": "sortByName",
    "click #overdue-customers": "overdue",
    "click #cust-name-sort": "sortByName",
    "click #cust-pcode-sort": "sortByPostCode",
    "click #cust-reg-at-sort": "sortByRegisteredAt"
  },

  overdue: function() {
    this.model.url = "http://localhost:3000/rentals/overdue";
    this.render();
  },


  sortByName: function() {
    console.log("clicked sort by name");
    this.model.url = 'http://localhost:3000/customers?sort=name&p=1&n=200';
    this.model.fetch({
      reset:true,
      success: function(data) {
        console.log("Sort worked!");
      },
      failure: function(data) {
        console.log("Sort Failure");
      }
    });
  },
  sortByPostCode: function() {
    console.log("clicked sort by post code");

    this.model.url = 'http://localhost:3000/customers?sort=registered_at&p=1&n=200';
    this.model.fetch({
      reset:true,
      success: function(data) {
        console.log("Sort worked!");
      },
      failure: function(data) {
        console.log("Sort Failure");
      }
    });
  },
  sortByRegisteredAt: function() {
    console.log("clicked sort by registered at");
    this.model.url = 'http://localhost:3000/customers?sort=postal_code&p=1&n=200';
    this.model.fetch({
      reset:true,
      success: function(data) {
        console.log("Sort worked!");
      },
      failure: function(data) {
        console.log("Sort Failure");
      }
    });
  }
});
export default CustomerListView;
