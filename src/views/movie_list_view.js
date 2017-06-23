import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import MovieView from './movie_view';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    console.log("rendering the movie list view");
    this.$('#movie-list').empty();
    var self = this;
    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        template: self.template,
      });
      self.$('#movie-list').append(movieView.render().$el);
    });
    return this;
  }
});

export default MovieListView;
