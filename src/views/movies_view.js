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
    this.$('.new-customer').addClass('hide');
    var that = this;
    if (this.model.length === 0) {
      that.$('.main-content').append('No Movies Found');
    }
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
          template: _.template($("#checkout-template").html())
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
  "click h3.button.btn-search": "searchMovies",
  },
  searchMovies: function(event) {
    $('.rental').addClass('hide');
    $('.main-content').removeClass('hide');

    var radio = this.$("input[name='search']:checked").val();

    if (radio == 'in-store') {
      this.searchInStore(event);
    } else {
      var searchParams = this.$('#movie-search').val();
      this.$('#movie-search').val('');
      this.$('#movie-search').val('');
      this.model.fetch({
        data: { query: searchParams },
        processData: true
      });
      this.isSearching = true;
    }
  },
  searchInStore: function(event) {
    var searchParams = this.$('#movie-search').val();
    this.$('#movie-search').val('');
    this.model.fetch({
      data: { find: searchParams },
      processData: true
    });
  }
});

export default MoviesView;
