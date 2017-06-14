import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import MovieView from './movie_view';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.movieTemplate = _.template($('#movie-card-template').html());
    this.movieList = [];

    this.model.forEach(function(rawMovie){
      this.addMovie(rawMovie);
    });

    this.input = {
      title: this.$('.new-movie-form input[name="title"]'),
      overview: this.$('.new-movie-form input[name="overview"]'),
      release_date: this.$('.new-movie-form input[name="release_date"]'),
      image_url: this.$('.new-movie-form input[name="image_url"]'),
      external_id: this.$('.new-movie-form input[name="external_id"]')
    };

    this.listenTo(this.model, 'add', this.addMovie);
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    $('#movie-list').empty();
    this.movieList.forEach(function(movie){
      movie.render();
      $('#movie-list').append(movie.$el);
    });
    return this;
  },

  events: {
    'click .add-movie': 'createMovie',
    'click .cancel-add-movie': 'clearInput',
    'click .movie-list': 'showList'
  },

  addMovie: function(movie){
    var movie = new MovieView ({
      model: movie,
      template: this.movieTemplate
    });
    this.movieList.push(movie);
  },
  getInput: function() {
    var movie = {
      title: this.input.title.val(),
      overview: this.input.overview.val(),
      release_date: this.input.release_date.val(),
      image_url: this.input.image_url.val(),
      external_id: this.input.external_id.val()
    };
    return movie;
  },
  createMovie: function(event) {
    event.preventDefault();

    var rawMovie = this.getInput();
    console.log(rawMovie);

    this.model.create(rawMovie);

    alert("You have added a movie named: "+rawMovie.name);
    this.clearInput();
  },

  clearInput: function(event) {
    console.log("clearInput called!");
    this.input.title.val('');
    this.input.overview.val('');
    this.input.release_date.val('');
    this.input.image_url.val('');
    this.input.external_id.val('');
  },
});

export default MovieListView;
