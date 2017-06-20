import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Customer from '../models/customer.js';
import CustomerView from './customer_view.js';
import CustomerDetailsView from './customer_details_view.js';

var CustomerListView = Backbone.View.extend({
  initialize: function(params) {
    this.customerTemplate = params.customerTemplate;
    this.customerDetailsTemplate = params.customerDetailsTemplate;
    this.alertTemplate = params.alertTemplate;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    this.$('main').html('<ul></ul>');
    var that = this;

    this.model.each(function(customer) {
      var customerView = new CustomerView({
        model: customer,
        template: that.customerTemplate,
        tagName: 'li'
      });
      that.$('main ul').append(customerView.render().$el);
      that.listenTo(customerView, 'showCustomerDetails', that.showCustomerDetails);
    });
    return this;
  },
  showCustomerDetails: function (customer) {
    var customerDetailsView = new CustomerDetailsView({
      model: customer,
      template: this.customerDetailsTemplate,
      el: 'body'
    });
    customerDetailsView.render();
  }
});

export default CustomerListView;
