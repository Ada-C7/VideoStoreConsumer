import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import SearchResults from '../collections/search_results';
import MovieView from '../views/movie_view';
console.log("crumb 7");


var SearchResultsView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model,"update", this.render);
  },

  render: function(){

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

});

export default SearchResultsView;
