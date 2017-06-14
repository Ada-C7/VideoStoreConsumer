import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';
import MovieView from '../views/movie_view.js';

var MovieListView = Backbone.View.extend({
  initilaize: function(params){
    this.listenTo(this.model, 'update', this.render);
  },

  render: function(){
    this.$('.movies').empty();
    var self = this;
    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: _.template($('#movie-template').html()),
        tagName: 'li'
      });
      self.$('.movies').append(movieView.render().$el);
    });
    return this;
  }
});

export default MovieListView;
