import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import CustomerView from './customer_view';
import Customer from '../models/customer.js';
// import MovieList from '../collections/movie_list';

var CustomerListView = Backbone.View.extend({
  tagName: 'option',
  initialize: function(params){
    this.customerTemplate = params.customerTemplate;

    this.listenTo(this.model, 'update' , this.render);
  },

  render: function(){
    console.log(' Customer list View in render>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
    var self = this;
    self.$('#customer-dropdown').empty();

    self.model.each(function(customer){
      var customerView = new CustomerView({
        model: customer,
        customerTemplate: self.customerTemplate
      });
      self.$('#customer-dropdown').append(customerView.render().$el.html());
    });
    return this;
  }


});


export default CustomerListView;
