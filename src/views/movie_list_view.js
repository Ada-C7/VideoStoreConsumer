import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // other templates maybe?
    console.log('MoviewListView:',this.template);
    this.listenTo(this.model, "update", this.render);
    this.model.fetch();
  },
  render: function() {
    this.$('#movie-list').empty();

    this.model.each((movie) => {
      var movieView = new MovieView({
        model: movie,
        template: this.template
      });
      this.$('#movie-list').append(movieView.render().el);
    });

    return this;
  },
  events: {
    // "click .." : ".."
  }
});

export default MovieListView;
