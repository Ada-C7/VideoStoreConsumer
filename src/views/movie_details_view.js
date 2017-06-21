import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import CustomerList from '../collections/customer_list.js';
import SelectCustomerView from './select_customer_view.js';
import Rental from '../models/rental.js';

var MovieDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$('main').html(compiledTemplate);

    if (!this.model.get('external_id')) {
      var customerList = new CustomerList();
      customerList.fetch();

      var selectCustomerView = new SelectCustomerView({
        model: customerList,
        template: _.template(this.$('#rent-movie-template').html()),
        el: 'body'
      });
    selectCustomerView.render();
    }
  },
  events: {
    'click #add-movie' : 'addMovie',
    'click #rent-movie' : 'rentMovie'
  },
  addMovie: function () {
    this.trigger('addMovie', this.model.attributes);
  },
  rentMovie: function () {
    var formData = this.getRentalFormData();
    var rental = new Rental();
    var attributes = {
      title: this.model.get('title'),
      customer_id: formData.customerID,
      due_date: formData.dueDate
    };
    var options = {
      type: 'POST',
      url: 'http://localhost:3000/rentals/' + attributes.title + '/check-out',
      customer_id: attributes.customer_id
    };
    rental.save(attributes, options);
    this.$('main').prepend("<p>Successfully checked out " + attributes.title + " to " + formData.customerName + "</p>");
  },
  getRentalFormData: function () {
    var formData = {};
    formData.customerID = this.$('#customer-selector option').val();
    formData.customerName = this.$('#customer-selector option').html();
    formData.dueDate = this.$('#due-date').val();

    return formData;
  }
});

export default MovieDetailsView;
