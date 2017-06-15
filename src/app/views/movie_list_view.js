import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';
import MovieView from '../views/movie_view.js';


var MovieListView = Backbone.View.extend({
  initialize: function(params){
    this.listenTo(this.model, 'update', this.render);
  },

  render: function(){
    this.clearLibrary();
    var self = this;

    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: _.template($('#movie-template').html()),
        tagName: 'section'
      });
      console.log("rendering ", movieView.model);
      self.$('.movie-library').append(movieView.render().$el);
    });

    return this;
  },

  events: {
    "click .search-button" : "getSearchResults"
  },

  clearLibrary: function(){
    this.$('.movie-library').empty();
  },

  getSearchResults: function() {
    var queryInput = this.$('.input-group-field').val();
    this.$('.input-group-field').val('');
    //console.log("Query: " + query);
    this.model.fetch({data: {query: queryInput}});
    // return this;
  },

});

export default MovieListView;
