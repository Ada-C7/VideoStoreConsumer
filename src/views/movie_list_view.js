import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';

var MovieListView = Backbone.ListView.extend ({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    this.$('.main-content').empty();
    var that = this;

    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
      that.$('.main-content').append(movieView.render().$el);
    });
  }
});

export default MovieListView;
