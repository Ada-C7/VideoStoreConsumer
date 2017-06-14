import Backbone from 'backbone';
import Movie from '../models/movie.js';
import $ from 'jquery';
import _ from 'underscore';
import MovieView from './movie_view.js';

var MoviesView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);

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
    });
    return this;
  },
  events: {
  "click h3.button.btn-query": "searchMovies"
  },
  searchMovies: function(event) {
    var searchParams = this.$('#search-item').val();
    this.$('#search-item').val('');
    this.model.fetch({
      data: { query: searchParams },
      processData: true
    });
  }
});

export default MoviesView;
