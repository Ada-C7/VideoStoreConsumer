import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import CustomerList from '../collections/customer_list.js';
import SelectCustomerView from './select_customer_view.js';
import Rental from '../models/rental.js';

var MovieDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = _.template($('#movie-info-template').html());
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
        el: this.$('#movie-rental-form')
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
  displayErrorList: function (response) {
    this.$('#alerts').prepend("<h4>Errors: </h4><ul></ul>");
    var errors = response.responseJSON.errors;
    for (var error in errors) {
      var errorTitle = error.replace("_"," ");
      var errorDescription = errors[error][0].toLowerCase();
      this.$('#alerts ul').append("<li>" + errorTitle + " " + errorDescription + "</li>");
    }
  },
  rentMovie: function () {
    var formData = this.getRentalFormData();
    var rental = new Rental();
    var attributes = {
      title: this.model.get('title'),
      customer_id: formData.customerID,
      due_date: formData.dueDate
    };
    var that = this;
    var options = {
      type: 'POST',
      url: 'http://localhost:3000/rentals/' + attributes.title + '/check-out',
      customer_id: attributes.customer_id,
      success: function (model, response) {
        $('main').prepend("<p>Successfully rented " + attributes.title + " to " + formData.customerName + "</p>");
      },
      error: function (model, response) {
        that.displayErrorList(response);
      }
    };
    rental.save(attributes, options);
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
    var that = this;
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
