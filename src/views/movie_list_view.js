import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieView from './movie_view';
import Movie from '../models/movie.js'

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.rentals = this.model
    this.listenTo(this.model, "update", this.render);
  },

  render: function(options) {
    this.$('#movie-list').empty();
    var that = this;
    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: that.template,
      });

      that.$('#movie-list').append(movieView.render().$el);
      that.listenTo(movieView, 'add', that.addToLibrary)
    });
    return this;
  },

  events: {
    'submit #searchbar' : 'searchMovies',
    'click .btn-add': 'addRental',
    'click #rental-library': 'viewLibrary'
  },

  searchMovies: function(event) {
    event.preventDefault();

    var queryParams = $('#search').val();
    this.model.fetch({ data: { 'query': queryParams } });
  },

  addToLibrary: function(movie) {
    var newMovie = {
      title: movie.get("title"),
      overview: movie.get("overview"),
      release_date: movie.get("release_date"),
      image_url: movie.get("image_url")
    }

    var model = this.model.create(newMovie,  { silent: true } );

    if (model.validationError){
      // console.log('was it created?')
    } else {
      // console.log(model);
      // console.log(model.ajax);
      // console.log('Yay?')
    };
  },

  viewLibrary: function(event) {
    this.model.fetch();
  }
});

export default MovieListView;
