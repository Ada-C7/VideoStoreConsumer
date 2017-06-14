import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';
import MovieView from '../views/movie_view.js';


var MovieListView = Backbone.View.extend({
  initialize: function(params){
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'sync', this.render);

  },

  render: function(){
    this.$('.movie-library').empty();
    var self = this;
    console.log("====== IN RENDER ==== ");
    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: _.template($('#movie-template').html()),
         tagName: 'section'
      });
      self.$('.movie-library').append(movieView.render().$el);
    });
    return this;
  },

  events: {
    "click .search-button" : "getQuery"
  },

  getQuery: function() {
    var formQuery = this.$('.input-group-field').val();
    alert("hi! i'm searching" + formQuery);
    return {
      query: formQuery
    };
  }
});

export default MovieListView;
