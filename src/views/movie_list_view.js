import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import MovieView from './movie_view.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
    console.log(">>> Breadcrumbs #2 (Movie list view init)");
  },
  render: function() {
    console.log(">>> Breadcrumbs #3 (Movie list render start)");
    this.$('#movie-list').html('<ul></ul>');
    var that = this;

    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        template: that.template,
        tagName: 'li'
      });
      that.$('#movie-list ul').append(movieView.render().$el);
    });
    console.log(">>> Breadcrumbs #4 (Movie list render end)");
    return this;
  }
});

export default MovieListView;
