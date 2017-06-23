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
    this.$('.new-customer').removeClass('hide');

    return this;
  },
  events: {
    'click #customer-form': 'newCustomer'

  },
  newCustomer: function(event) {

    var customer = this.model.save({
      name: $('#name').val(),
      phone: $('#phone_num').val(),
      postal_code: $('#postal').val()
    });

    $('#name').val('Name');
    $('#phone_num').val('Phone Number');
    $('#postal').val('Postal Code');

  }
});

export default CustomersView;
