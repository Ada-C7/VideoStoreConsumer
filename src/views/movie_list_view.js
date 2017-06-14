import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieView from './views/movie_view.js';
import Movie from './models/movie.js';

const MovieListView = Backbone.View.extend({
  initialize: function() {
    // listenTo(this.model, "update", this.render)
  },

  render: function() {
    // make a movieView given the passed-in template and collection
    // empty out the list div
    // var that = this;
    // this.model.each(function(movie) {
    //   var movieView = new MovieView({
    //     model: movie,
    //     template: that.template
    //   });
    // })

    // listenTo(movieView, "showMovie", sendMovie)

  },

  events: {
    // click returnToLib button :
  },

  returnToLib: function(event) {
    // trigger("returnToLib");
  },

  sendMovie: function(event) {
    // trigger sendMovie that appview is listening for
    // trigger("sendMovie", this);
  }

});

export default MovieListView;
