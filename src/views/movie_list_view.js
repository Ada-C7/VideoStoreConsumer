import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import MovieView from './movie_view.js';
import MovieDetailsView from './movie_details_view.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'addMovie', this.addMovie);
  },
  render: function() {
    this.$el.html("<section id='movie-list'></section>");
    var that = this;

    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        tagName: 'article'
      });
      that.$('#movie-list').append(movieView.render().$el);
      that.listenTo(movieView, 'showMovieDetails', that.showMovieDetails);
    });
    return this;
  },
  events: {
    'click #search-button' : 'searchMovies'
  },
  showMovieDetails: function (movie) {
    this.$el.empty();
    this.$el.append('<section id="movie-details"></section>');
    var movieDetailsView = new MovieDetailsView({
      model: movie,
      el: this.$('#movie-details')
    });
    movieDetailsView.render();

    this.listenTo(movieDetailsView, 'addMovie', this.addMovie);
  },
  searchMovies: function () {
    var searchTerm = $('#search-box').val();
    $('#search-box').val('');

    this.model.fetch({
      data: { query: searchTerm },
      processData: true
    });
  },
  addMovie: function (movieAttributes) {
    this.model.create(movieAttributes);
    this.$('main').prepend("Successfully added " + movieAttributes.title + " to inventory.");
  }
});

export default MovieListView;
