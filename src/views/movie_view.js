import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template({movie: this.model.toJSON()});

    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    "click .movie" : "detailsHandler"
  },
  detailsHandler: function() {
    console.log("I'm in the detailsHandler");
    this.trigger("selected", this.model);
  }
});

export default MovieView;
