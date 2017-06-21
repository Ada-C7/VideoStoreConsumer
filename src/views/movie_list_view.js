import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';
import MovieList from '../collections/movie_list.js';
import CustomerListView from './customer_list_view.js';

var MovieListView = Backbone.View.extend ({
  initialize: function(params) {
    this.template = params.template;
    this.customers = params.customers;
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    this.$('#movie-list').empty();
    this.$('.messages').empty();
    this.$('#customer-info').empty();
    var that = this;

      this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: that.template,
        customers: that.customers
      });
      that.$('#movie-list').append(movieView.render().$el);
      that.listenTo(movieView, "rentalForm", that.showRentForm);
    });
    return this;
  },

  events: {
    "click #search-movies" : "searchMovie"
  },

  getFormData: function() {
    var formTitle = this.$("#title").val();
    this.$("#title").val('');

    return formTitle;
  },
  searchMovie: function() {
    var errorHandler = function() {
      $(".messages").html("<h4>Error: Search field cannot be blank.</h4>");
    };

    this.template = _.template($('#search-list-template').html());
    this.model.fetch({
      error: errorHandler,
      traditional: true,
      data: {query: [this.getFormData()]}
    });

  },
  showRentForm: function(movie) {
    var rentalTemplate = _.template($("#rental-template").html());
    var compiledRentalTemplate = rentalTemplate(movie.toJSON());
    $("#create-rental").html(compiledRentalTemplate);

    var rentalCustomerView = new CustomerListView({
      model: this.customers,
      template: _.template($('#customer-list-template').html()),
      tagName: "select",
      className: "customer-dropdown"
    });

    $("#create-rental label.customers-select").append(rentalCustomerView.render().$el);
  }


});

export default MovieListView;
