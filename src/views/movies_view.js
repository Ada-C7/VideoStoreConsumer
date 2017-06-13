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
  }
});

export default MoviesView;
