import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import CustomerView from './customer_view.js';
import Customer from '../models/customer.js';
import CustomerList from '../collections/customer_list.js';

var CustomerListView = Backbone.View.extend ({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'change', this.render);
    this.showDetails = params.showDetails || false;
    // this.listenTo(this.model, 'click', );
  },

  render: function() {
    var that = this;
    this.model.each(function(customer){
      var customerView = new CustomerView({
        model: customer,
        template: that.template,

      });
      that.$el.append(customerView.render().$el);

    });
    return this;
  },

  events: {
    'change': 'showCustomer'
  },

  showCustomer: function(e) {
    if (!this.showDetails) {
      return;
    }

    e.preventDefault();

    console.log(e.currentTarget.value);
    var customerID = e.currentTarget.value;

    var customer = this.model.get(customerID);
    console.log(customer);



    var that = this;
      var customerDetailsView = new CustomerView({
        model: customer,
        template: _.template($('#customer-details-template').html())


      });
      $('#create-rental').empty();

      $("#movie-list").empty();
      $(".messages").empty();
      $("#customer-info").html(customerDetailsView.render().$el);


  }


});

export default CustomerListView;
