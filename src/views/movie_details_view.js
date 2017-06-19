import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';

var MovieDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$('main').html(compiledTemplate);
  },
  events: {
    'click #add-movie' : 'addMovie'
  },
  addMovie: function () {
    this.trigger('addMovie', this.model.attributes);
  }
});

export default MovieDetailsView;
