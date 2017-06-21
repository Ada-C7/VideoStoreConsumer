import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';
import MovieListView from './movie_list_view.js';
import Customer from '../models/customer.js';
import CustomerView from './customer_view.js';

var CustomerListView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#tmpl-customer').html());
    
    this.listenTo(this.model, "sync", this.render);
    this.model.fetch({
      success: function(data) {
        // console.log("It worked (index)!", data);
        // TODO append results to customer list
        // for(let i; i < data.length; i++){
        //   this.$(#customer-list).append('<option>')
        // }
      },
      failure: function(data) {
        // console.log("Failure", data);
        this.$('#customer-list').append("<h2>Request failed.</h2>");
      }
    });
  },
  render: function() {

    // this.$('#customer-list').empty();

    // console.log('this.model: ',this.model);


    this.model.each((customer)=>{

      // console.log('Begining of for LOop');
      // console.log('customer: ', customer);
      var customerView = new CustomerView({
        model: customer,
        template: this.template,
        tagName: 'option'
      });
      // console.log('Before Append ');
      // console.log("this.el == ", this.el);
      this.$el.append(customerView.render().el);
      // this.listenTo(customerView, 'selectedCustomer', this.showCustomerDetails);
      // console.log('after append',customerView.el );
    });


    return this;
  },
  events: {
    // "..." : "..."
  }
});

export default CustomerListView;
