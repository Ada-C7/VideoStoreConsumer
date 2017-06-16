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

  resetHeaders: function() {
    if (this.search === true) {
      this.$("#search-header-section").show();
      this.$("#library-header-section").hide();
      this.$("#query-text").html(this.$("#query").val());
      if (this.model.length === 0) {
        this.$("#search-header-section h3").html("No Movies found");
      }
    } else {
      this.$("#library-header-section").show();
      this.$("#search-header-section").hide();
    }
  },

  resetButtons: function() {
    if (this.search === true) {
      this.$(".add-library").show();
      this.$(".rent-movie").hide();
    } else {
      this.$(".add-library").hide();
      this.$(".rent-movie").show();
    }
  },

  render: function() {
    console.log(this.search);
    this.resetHeaders();

    console.log("inside movie list render ");
    this.$("#list-content").empty();
    var that = this;
    this.model.each(function(movie) {
      var movieView = new MovieView({
        model: movie,
        template: that.template
      });
      that.$("#list-content").append(movieView.render().el);
      that.listenTo(movieView, "showMovie", that.showMovieDetails);
    });
    this.resetButtons();
    return this;
  },

  events: {
    "click #search-button" : "getSearch",
    "click #return-library" : "returnToLib",
    "click #hide-details" : "hideMovieDetails"
  },

  getSearch: function() {
    this.model.url = "http://localhost:3000/movies";
    console.log("clicked search button");
    console.log(this.model.url);
    console.log(this.search);
    this.search = true;
    console.log(this.search);
    var text= this.$("#query").val();
    this.model.query = text;
    this.model.url += "?query=" + this.$("#query").val();
    this.model.fetch({
      success: function(data) {
        console.log("It worked!", data);
      },
      failure: function(data) {
        console.log("Failure", data);
      }
    });
    console.log(this.model.url);

  },

  showMovieDetails: function(movie) {
    console.log("inside showMovieDetails");
    this.$("#movie-details").show();
    this.$("#list-main").removeClass("large-12");
    this.$("#list-main").addClass("large-9");
    this.$(".movie-card").removeClass("large-3");
    this.$(".movie-card").addClass("large-4");
    this.$("#movie-details").empty();
    var myDetailedMovie = new MovieView({
      model: movie.model,
      template: _.template($("#movie-details-template").html()),
      // search: false,
      el: "#movie-details"
    });
    this.$("#movie-details").append(myDetailedMovie.render().el);
  },

  hideMovieDetails: function() {
    this.$("#movie-details").hide();
    this.$("#list-main").addClass("large-12");
    this.$("#list-main").removeClass("large-9");
    this.$(".movie-card").addClass("large-3");
    this.$(".movie-card").removeClass("large-4");
  },

  returnToLib: function(event) {
    console.log("clicked on return to lib button");
    this.$("#query").val("");
    this.search = false;
    this.model.url = "http://localhost:3000/movies";
    this.model.fetch();
  }

});

export default MovieListView;
