import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import CustomerView from './customer_view';

var CustomerListView = Backbone.View.extend({
  initialize: function(options) {
    this.customerTemplate = _.template($('#customer-template').html());
    this.customerList = [];

    this.model.forEach(function(rawCustomer){
      this.addCustomer(rawCustomer);
    }, this);

    this.listenTo(this.model, 'add', this.addCustomer);
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    $('#customer-list').empty();
    this.customerList.forEach(function(customer){
      customer.render();

      $('#customer-list').append(customer.$el);
    }, this);
    return this;
  },

  addCustomer: function(customer){
    var customer = new CustomerView ({
      model: customer,
      tagName: "tr",
      template: this.customerTemplate
    });
    this.customerList.push(customer);
  }
});

export default CustomerListView;
