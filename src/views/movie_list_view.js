import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import MovieView from './movie_view.js';
import MovieDetailsView from './movie_details_view.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.movieTemplate = params.movieTemplate;
    this.movieDetailsTemplate = params.movieDetailsTemplate;
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'addMovie', this.addMovie);
  },
  render: function() {
    this.$('main').html('<ul></ul>');
    var that = this;

    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        template: that.movieTemplate,
        tagName: 'li'
      });
      that.$('main ul').append(movieView.render().$el);
      that.listenTo(movieView, 'showMovieDetails', that.showMovieDetails);
    });
    return this;
  },
  events: {
    'click #search-button' : 'searchMovies'
  },
  showMovieDetails: function (movie) {
    var movieDetailsView = new MovieDetailsView({
      model: movie,
      template: this.movieDetailsTemplate,
      el: 'body'
    });
    movieDetailsView.render();

    this.listenTo(movieDetailsView, 'addMovie', this.addMovie);
  },
  searchMovies: function () {
    var searchTerm = this.$('#search-box').val();
    this.$('#search-box').val('');

    this.model.fetch({
      data: { query: searchTerm },
      processData: true
    });
  },
  addMovie: function (movieAttributes) {
    this.model.create(movieAttributes);
  }
});

export default MovieListView;
