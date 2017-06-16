import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';

const MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.model = params.model.movie;
    this.search = params.model.search;
    this.listenTo(this.model, "update", this.render);
    this.$("#search-header-section").hide();
    this.$("#library-header-section").hide();
    this.$("#movie-details").hide();
    this.$("#list-main").removeClass("large-9");
    this.$("#list-main").addClass("large-12");
  },

  render: function() {
    console.log(this.search);
    if (this.search === true) {
      this.$("#search-header-section").show();
      this.$("#library-header-section").hide();
    } else {
      this.$("#library-header-section").show();
      this.$("#search-header-section").hide();
    }

    console.log("inside movie list render ");
    this.$("#list-content").empty();
    var that = this;
    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
      that.$("#list-content").append(movieView.render().el);
      that.listenTo(movieView, "showMovie", that.sendMovie);
    });

    if (this.search === true) {
      this.$(".add-library").show();
      this.$(".rent-movie").hide();
    } else {
      this.$(".add-library").hide();
      this.$(".rent-movie").show();
    }

    return this;
  },

  events: {
    "click #search-button" : "getSearch",
    "click #return-library" : "returnToLib"
    // hide details click : hideMovieDetails
  },

  getSearch: function() {
    this.model.url = "http://localhost:3000/movies";
    console.log("clicked search button");
    console.log(this.model.url);
    console.log(this.search);
    this.search = true;
    console.log(this.search);
    this.model.query = this.$("#query").val();
    this.model.url += "?query=" + this.$("#query").val();
    this.model.fetch();
    console.log(this.model.url);

  },

  showMovieDetails: function() {
    // show details div
    // clear details div
    // render the template and all that crap
  },

  hideMovieDetails: function() {
    // hide the details div
  },

  returnToLib: function(event) {
    console.log("clicked on return to lib button");
    this.model.url = "http://localhost:3000/movies";
    this.model.fetch();
  }

});

export default MovieListView;
