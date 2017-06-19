import Backbone from 'backbone';
import Movie from '../models/movie';
import RentalLibrary from '../collections/rentalLibrary';
import MovieView from './movieView';
//templating
import _ from 'underscore';
//the power to select any html element within js, uing a dollar sign and then access additional methods
import $ from 'jquery';

//for initializing any backbone view:

var RentalLibraryView = Backbone.View.extend( {

  initialize: function(params) {
    this.template = params.template;
  },

  render: function(){
    console.log("hi");
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

export default RentalLibraryView;
