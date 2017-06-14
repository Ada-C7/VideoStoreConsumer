import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import DBMovie from '../models/db_movie.js';

var DBMovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template; // TODO: double check name of this template
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default DBMovieView;
