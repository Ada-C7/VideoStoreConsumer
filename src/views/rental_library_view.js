import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import RentalLibrary from '../collections/rental_library';
import MovieView from '../views/movie_view';
import Movie from '../models/movie.js';

var RentalLibraryView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  render: function(){
    console.log("crumb 3");

    this.$('#movie-list').empty();

    var that = this;

    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
      that.$("#movie-list").append(movieView.render().el);
    });
  },

  events: {
    "click #search": "search"
  },

  search: function(){
    var query = this.getQueryTerm();

    var searchResults = new SearchResults();
    searchResults.fetch(query);

    var searchResultsView = new SearchResultsView({
      model: searchResults,
      template: _.template($('#movie-list-template').html()),
      el: 'main'
  });
},

  getQueryTerm: function(){
    var word = this.$("#query").val();
    return word;
  }

});


export default RentalLibraryView;
