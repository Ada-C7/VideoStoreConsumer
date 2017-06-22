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
    this.$el.html(compiledTemplate);

    if (!this.model.get('external_id')) {
      var customerList = new CustomerList();
      customerList.fetch();

      var selectCustomerView = new SelectCustomerView({
        model: customerList,
        template: _.template($('#rent-movie-template').html()),
        el: this.$('#movie-actions')
      });
    selectCustomerView.render();
    }
    return this;
  },
  events: {
    'click #add-movie' : 'addMovie',
    'click #rent-movie' : 'rentMovie',
    'click #delete-movie' : 'deleteMovie'
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
    this.$el.prepend("<p>Successfully checked out " + attributes.title + " to " + formData.customerName + "</p>");
  },
  getRentalFormData: function () {
    var formData = {};
    formData.customerID = this.$('#customer-selector option:selected').val();
    formData.customerName = this.$('#customer-selector option:selected').html();
    formData.dueDate = this.$('#due-date').val();

    return formData;
  },
  deleteMovie: function () {
    var movieTitle = this.model.get('title');
    this.model.destroy({
      success: function (model, response) {
        $('main').prepend("<p>Successfully deleted " + movieTitle + " from inventory.</p>");
      },
      error: function (model, response) {
        $('main').prepend("<p>Error: " + response.responseJSON.errors + "</p>");
      }
    });
  }
});

export default MovieDetailsView;
