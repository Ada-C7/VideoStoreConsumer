import Backbone from 'backbone';
import Movie from '../models/movie.js';
import $ from 'jquery';
import _ from 'underscore';

var RentMovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    console.log(this.template);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  selectedMovie: function () {
    var movie = this.model.get('title');
    return movie;
  }
});

export default RentMovieView;
