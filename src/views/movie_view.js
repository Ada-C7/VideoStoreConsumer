import Backbone from 'backbone';
import Movie from '../models/movie.js';
import $ from 'jquery';
import _ from 'underscore';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);

  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    "click h3.button.add-collection": "addMovie"
  },

  addMovie: function(event) {

    event.stopPropagation();
    this.trigger("movieAdded", this.model.attributes);
  }
});

export default MovieView;
