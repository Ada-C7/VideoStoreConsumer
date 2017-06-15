import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';

const MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.model = params.model;
    this.search = params.search;
    console.log(params);
    this.listenTo(this.model, "update", this.render);
  },

  render: function() {

    console.log("#2.1 ");
    this.$("#list-content").empty();
    var that = this;
    var list = "";
    this.model.each(function(movie) {

      var movieView = new MovieView({
        model: movie,
        template: that.template
      });

      that.$("#list-content").append(movieView.render().el);

      that.listenTo(movieView, "showMovie", that.sendMovie);
    });
    return this;
  },

  events: {

  },

  returnToLib: function(event) {
    console.log("clicked on return to lib button");
    // trigger("returnToLib");
  },

  sendMovie: function(event) {
    console.log("triggered sendMovie: clicked on movie");
    // trigger sendMovie that appview is listening for
    this.trigger("sendMovie", this);
  }

});

export default MovieListView;
