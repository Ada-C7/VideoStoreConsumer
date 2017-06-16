import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Movie from '../models/movie';
import MovieView from './movie_View';

var MovieCardView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.model = params.model;
    this.listenTo(this.model, "change",
    this.render);

  },
  render: function() {
    var compiledTemplate =
    this.template(this.model.toJSON() );
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default MovieCardView;
