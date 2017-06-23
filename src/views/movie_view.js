import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.addClass("movie columns small-12 medium-4 large-3").html(compiledTemplate);
    return this;
  },
  events: {
    'click' : 'showDetails'
  },
  showDetails: function () {
    this.trigger('showMovieDetails', this.model);
  }
});

export default MovieView;
