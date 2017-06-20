import Backbone from 'backbone';
import Movie from '../models/movie';
import MovieView from './movieView';
//templating
import _ from 'underscore';
//the power to select any html element within js, uing a dollar sign and then access additional methods
import $ from 'jquery';

var SearchResultsView = Backbone.View.extend({

  initialize: function(params){
    this.template = params.template;
  },

  render: function(){
    this.$('#movie-list').empty();

    var that = this;

    this.model.each(function(movie) {
      var movieView = new MovieView ({
        model: movie,
        template: that.template
      });

      that.$('#movie-list').append(movieView.render().el);
    });
  },

  events: {

  }

});

export default SearchResultsView;
