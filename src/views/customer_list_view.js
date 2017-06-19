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
  },

  render: function() {
    var that = this;
    this.model.each(function(customer){
      var customerView = new CustomerView({
        model: customer,
        template: that.template,
        tagName: 'option'
      });
      that.$(".customer-dropdown").append(customerView.render().$el);

    });
    return this;
  }


});

export default CustomerListView;
