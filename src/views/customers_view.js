import Backbone from 'backbone';
import Customer from '../models/customer.js';
import $ from 'jquery';
import _ from 'underscore';
import CustomerView from './customer_view.js';

var CustomersView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);

  },
  render: function() {
    this.$('.main-content').empty();
    var that = this;
    this.model.each(function(customer) {
      var customerView = new CustomerView({
        model: customer,
        template: that.template
      });
      that.$('.main-content').append(customerView.render().el);
    });
    return this;
  }
});

export default CustomersView;
