import Backbone from 'backbone';
import Movie from '../models/movie.js';
import Rental from '../models/rental.js';
import Customer from '../models/customer.js';
import $ from 'jquery';
import _ from 'underscore';
import MovieView from './movie_view.js';
import CheckoutView from './checkout_view.js';

var MoviesView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
    this.isSearching = false;
  },
  render: function() {
    this.$('.main-content').empty();
    var that = this;
    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
      that.$('.main-content').append(movieView.render().el);
      that.listenTo(movieView, "movieAdded", function(movieData) {
        console.log(movieData);
        this.model.create(movieData);
        this.isSearching = false;
        this.model.fetch();
      });
      that.listenTo(movieView, "addNewRental", function(movie) {
        // movie becomes a variable which is sent to rental.
        // create rental view here
        that.$('.rental').empty();
        that.$('.rental').removeClass('hide');
        that.$('.main-content').addClass('hide');
        var rental = new Rental();
        var checkoutView = new CheckoutView({
          movie: movie,
          model: rental,
          template: _.template($("#rental-template").html())
        });
        that.$('.rental').append(checkoutView.render().el);
      });

    });

    // console.log(this.isSearching);
    if (this.isSearching) {
      $('.add-collection').removeClass('hide');
      $('.add-rental').addClass('hide');
    } else {
      $('.add-collection').addClass('hide');
      $('.add-rental').removeClass('hide');
    }

    return this;
  },
  events: {
  "click h3.button.btn-query": "searchMovies",
  "click h3.button.btn-search-in-store": "searchInStore"
  },
  searchMovies: function(event) {
    $('.rental').addClass('hide');
    $('.main-content').removeClass('hide');
    var searchParams = this.$('#search-item').val();
    this.$('#search-item').val('');
    this.model.fetch({
      data: { query: searchParams },
      processData: true
    });
    this.isSearching = true;
  },
  searchInStore: function(event) {
    $('.rental').addClass('hide');
    $('.main-content').removeClass('hide');
    var searchParams = this.$('#search-in-store').val();
    this.$('#search-in-store').val('');
    this.model.fetch({
      data: { find: searchParams },
      processData: true
    });
  }
});

export default MoviesView;
