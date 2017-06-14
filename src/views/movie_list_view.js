import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import MovieView from './movie_view.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    this.$('main').html('<ul></ul>');
    var that = this;

    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        template: that.template,
        tagName: 'li'
      });
      that.$('main ul').append(movieView.render().$el);
      that.listenTo(movieView, 'showMovieDetails', that.showMovieDetails);
    });
    return this;
  },
  showMovieDetails: function (movie) {
    this.trigger('showMovieDetails', movie);
  }
});

export default MovieListView;
