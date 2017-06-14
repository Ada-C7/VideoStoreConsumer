import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Movie from '../models/movie.js';
console.log("crumb 4");


var MovieView = Backbone.View.extend({

  initialize: function(params) {
    this.template = params.template;
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

export default MovieView;
