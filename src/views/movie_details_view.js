import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Movie from '../models/movie';
import MovieView from './movie_View';

var MovieDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.model = params.model;
  },
  generateHTML: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    console.log(compiledTemplate);
    return compiledTemplate;


  }
});

export default MovieDetailsView;
