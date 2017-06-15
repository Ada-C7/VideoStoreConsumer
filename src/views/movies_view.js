import Backbone from 'backbone';
import Movie from '../models/movie.js';
import $ from 'jquery';
import _ from 'underscore';
import MovieView from './movie_view.js';
import RentMovieView from './rent_movie_view.js';

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
        // console.log($("#rent-movie-template").html());
        var rentMovieView = new RentMovieView({
          model: movie,
          template: _.template($("#rent-movie-template").html())
        });
        that.$('.main-content').empty();
        that.$('.main-content').append(rentMovieView.render().el);
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
    var searchParams = this.$('#search-item').val();
    this.$('#search-item').val('');
    this.model.fetch({
      data: { query: searchParams },
      processData: true
    });
    this.isSearching = true;
  },
  searchInStore: function(event) {
    var searchParams = this.$('#search-in-store').val();
    this.$('#search-in-store').val('');
    this.model.fetch({
      data: { find: searchParams },
      processData: true
    });
  }
});

export default MoviesView;
