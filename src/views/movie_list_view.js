import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieView from './movie_view';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    var self = this;

    this.templateList = _.template($('#movie-card-template').html());
    this.movieViewList = [];
  },

  render: function() {

    var self = this;
    self.$('.movie-cards').empty();
    this.movieViewList.forEach(function(movieView) {
      MovieView.render();
      self.$('.movie-cards').append(movieView.$el);
    });

    return this;
  }
});

export default MovieListView;
