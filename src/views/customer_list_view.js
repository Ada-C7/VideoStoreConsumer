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
    // this.listenTo(this.model, 'displayRentals', this.showRentals);    
  },

  render: function() {
    $('#customer-list').empty();
    this.customerList.forEach(function(customer){
      // console.log();
      customer.render();

      $('#customer-list').append(customer.$el);
    }, this);
    return this;
  },

  addCustomer: function(customer){
    var customer = new CustomerView ({
      model: customer,
      template: this.customerTemplate
    });
    this.customerList.push(customer);
  }

  // showRentals: function(){
  //
  //   var rentals = this.model.find(function(model){return model.get('title') === movie.attributes.title && model.get('release_date') === movie.attributes.release_date; });
  //
  // }

});

export default CustomerListView;
