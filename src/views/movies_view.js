import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieView from './movie_view.js';
import Movie from '../models/movie.js';

var MoviesView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.resultTemplate;
    this.detailsTemplate = params.
  }
});

export default MoviesView;
