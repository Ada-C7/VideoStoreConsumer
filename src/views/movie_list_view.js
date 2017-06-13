import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieView from './movie_view';
import Movie from '../models/movie.js'

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);

  },
  render: function(){
    this.$('#movie-list').empty();

    var that = this;

    this.model.each(function(movie){

      var movieView = new MovieView({
        model: movie,
        template: that.template,
      });

      that.$('').append(movieView.render().$el);
    });
    return this;
  },
