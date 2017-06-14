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

  render: function() {
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
    'click .btn-add': 'addRental'
  },

  searchMovies: function(event) {
    event.preventDefault();

    var queryParams = $('#search').val();

    this.model.fetch({
      data: { 'query': queryParams }
    });
  },

  addToLibrary: function(movie) {
    var newMovie = {
      title: movie.get("title"),
      overview: movie.get("overview"),
      release_date: movie.get("release_date"),
      image_url: movie.get("image_url"),
      external_id: movie.get("external_id")
    }

    this.model.create(newMovie);
  }


  // addRental: function(event){
  //   let movie = event.currentTarget.id;
  //
  //   let addedMovie = this.model.findWhere({external_id: movie});
  //
  //   console.log(addedMovie);
  //   console.log(this.model);
  //   console.log(event.currentTarget.id);
  // }
});

export default MovieListView;
