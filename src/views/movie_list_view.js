import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';

const MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.movie_template;
    // this.library_card_template = _.template($("#movie-library-template").html());
    // this.search_card_template = _.template($("#movie-search-template").html());

    // this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    // make a movieView given the passed-in template and collection
    // empty out the list div
    var libraryTemplate = this.template;
    // console.log(this.model.length);
    this.$("#list-main").empty();
    var that = this;
    var list = "";
    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        template: libraryTemplate
      });
      var renderedMovie = movieView.render().$el;
      // console.log(renderedMovie);
      list += renderedMovie.html();
      // that.$(".list-content").append(renderedMovie);
      // console.log(renderedMovie);
      // that.listenTo(movieView, "showMovie", that.sendMovie);
    });

    // console.log(list);

    return list;

  },

  events: {
    // "#" button :
  },

  returnToLib: function(event) {
    console.log("clicked on return to lib button");
    // trigger("returnToLib");
  },

  sendMovie: function(event) {
    console.log("triggered sendMovie: clicked on movie");
    // trigger sendMovie that appview is listening for
    // trigger("sendMovie", this);
  }

});

export default MovieListView;
