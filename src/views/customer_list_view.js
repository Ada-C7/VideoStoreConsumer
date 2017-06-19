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
    // this.listenTo(this.model, 'click', );
  },

  render: function() {
    var that = this;
    this.model.each(function(customer){
      var customerView = new CustomerView({
        model: customer,
        template: that.template,

      });
      that.$("#customer-dropdown").append(customerView.render().$el);

    });
    return this;
  },

  events: {
    'change select': 'showCustomer'
  },

  showCustomer: function(e) {
    e.preventDefault();

    console.log(e.currentTarget.value);
    var customerID = e.currentTarget.value;

    var customer = this.model.get(customerID);
    console.log(customer);

    var customerInfo = customer.fetch();  
  }


});

export default CustomerListView;
