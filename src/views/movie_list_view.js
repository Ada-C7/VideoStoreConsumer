import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';

const MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.movie_template;
    this.model = params.model;
    console.log(params);
    // this.library_card_template = _.template($("#movie-library-template").html());
    // this.search_card_template = _.template($("#movie-search-template").html());

    // this.listenTo(this.model, "update", this.render);
  },

  render: function() {

    console.log("#2.1 this.model: ");
    // console.log(this.model);
    this.$("#list-main").empty();
    var that = this;
    var list = "";
    this.model.each(function(movie) {
      // console.log("movie: ");
      // console.log(movie);
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
      var renderedMovie = movieView.render().$el;
      list += renderedMovie.html();

      that.listenTo(movieView, "showMovie", that.sendMovie);
    });
    console.log("#2.2 list is: ");
    // console.log(list);
    return list;
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
