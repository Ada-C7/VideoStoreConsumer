import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view';
import Movie from '../models/movie.js';
import MovieList from '../collections/movie_list.js';

var SearchListView = Backbone.View.extend({
  initialize: function(params){
    this.searchTemplate = params.searchTemplate;
    this.listenTo(this.model, 'update' , this.render)
  },

  render: function(){
    console.log('in render search')
    var self = this;
    this.$('#rental-library').empty();
    this.$('#search-library').empty();

    this.model.each(function(movie){
      var searchView = new MovieView({
        model: movie,
        movieTemplate: self.searchTemplate
      });

      self.$('#search-library').append(searchView.render().$el);
    });
    return this;
  }


});


export default SearchListView;
