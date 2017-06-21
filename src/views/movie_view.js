import Backbone from "backbone";
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import CustomerListView from './customer_list_view.js';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.customers = params.customers;
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var compiledTemplate = this.template({movie: this.model.toJSON(), detailsClicked: this.detailsClicked});
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click .add-movie': 'addMovie',
    'click .rent-movie': 'rentMovie',
    'click .movie-image-details': 'showDetails',
    'click #create-rental': 'createRental'
  },
  rentMovie: function() {
    var rentalTemplate = _.template($("#rental-template").html());
    var compiledRentalTemplate = rentalTemplate(this.model.toJSON());
    $("#create-rental").html(compiledRentalTemplate);

    var rentalCustomerView = new CustomerListView({
      model: this.customers,
      template: _.template($('#customer-list-template').html()),
      tagName: "select",
      className: "customer-dropdown"
    });

    $("#create-rental label.customers-select").append(rentalCustomerView.render().$el);
  },
  addMovie: function() {

    var successHandler = function() {
      $(".messages").html("<h4>Movie successfully added.</h4>");
    };

    var errorHandler = function() {
      $(".messages").html("<h4>Movie could not be added.</h4>");
    };

    this.model.save(null, {
      type: 'POST',
      success: successHandler,
      error: errorHandler
      }
    );
  },
  showDetails: function() {
    if (this.model.attributes.id) {
      this.model.fetch();
      this.detailsClicked = !this.detailsClicked;
      this.render();
    }
  },
  getFormData() {
    formTitle = this.$("#title").val();
    formCustomer = this.$("option").attr("value");
    console.log(formCustomer);
    console.log(formTitle);
  },
  createRental: function() {
    console.log("hello");
    this.getFormData();
  }

});

export default MovieView;
