import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieView from './movie_view';
import Movie from '../models/movie.js'

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.movieDetailsTemplate = _.template($('#movie-details-template').html());
    // fix
    this.template = params.template;
    this.rentals = this.model
    this.listenTo(this.model, "update", this.render);
  },

  render: function(options) {
    this.$('#movie-list').empty();

    if (this.model.length < 1){
      alert("No movies match your search!");
      this.model.fetch();
    } else {
    this.model.each((movie)=>{
      var movieView = new MovieView({
        model: movie,
        template: this.template,
      });

      this.$('#movie-list').prepend(movieView.render().$el);
      this.listenTo(movieView, 'add', this.addToLibrary);
      this.listenTo(movieView, 'show', this.showDetails)

    });
  }
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

    this.model.create(newMovie,
      {error: function (model, response){
        if (response.status == 500) {
        alert(model.get("title") + ' is already in the rental library!');
      }
    },
    success: function(model, response){
      alert('Successfully added ' + model.get("title") + ' to the rental library!')
    },
    silent: true
  });
},

  viewLibrary: function(event) {
    this.model.fetch();
  },

  showDetails: function(movie) {
    console.log(movie);
    var movieHTML = this.movieDetailsTemplate({ movie: movie.attributes });
    $('#movie-details').html(movieHTML);
    // $('#popup-backdrop').fadeIn(500);
    // $('#movie-details').foundation('reveal', 'open');
    $('#movie-details').show();
  }
});

export default MovieListView;
