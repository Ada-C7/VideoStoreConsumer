import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieView from './movie_view.js';
import Movie from '../models/movie.js';
import RentalFormView from './rental_form_view.js';
import Rental from '../models/rental.js';

const MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.details = false;
    this.template = params.template;
    this.model = params.model.movie;
    this.search = params.model.search;
    this.listenTo(this.model, "update", this.render);
    this.$("#search-header-section").hide();
    this.$("#library-header-section").hide();
    this.$("#side-bar").hide();
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
      this.$(".lib-buttons").hide();
    } else {
      this.$(".add-library").hide();
      this.$(".lib-buttons").show();
    }
  },

  render: function() {
    this.$("#customer-list").hide();
    this.$("#all-movie-stuff").show();
    this.$("#movie-headers").show();

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
      // console.log(movie);
      that.$("#list-content").append(movieView.render().el);
      that.listenTo(movieView, "showMovie", that.showMovieDetails);
      that.listenTo(movieView, "getRentForm", that.getRentalForm);

    });
    this.resetButtons();
    if (this.details === true) {
      this.$(".movie-card").removeClass("large-3");
      this.$(".movie-card").addClass("large-4");
    }
    return this;
  },

  events: {
    "click #search-button" : "getSearch",
    "click #return-library" : "returnToLib",
    "click #hide-details" : "hideSideBar",
    "click #cancel-rental": "hideSideBar",
    "click #confirm-rental": "rentMovie"
  },

  rentMovie: function(event) {
    event.preventDefault()
    console.log("Clicked confirm rental");
    var cust_id = this.$("#customer-select").val();
    var movie_title = this.$("#rent-movie-title").html();
    var duedate = this.$("#rental-duedate").val();
    var rentalDetails = {
      customer_id: cust_id,
      due_date: duedate
    };
    var newRental = new Rental();
    newRental.url = "http://localhost:3000/rentals/" + movie_title + "/check-out";
    newRental.save(rentalDetails, {
      success: function(data) {
        console.log("created rental");
        $("#rental-message").addClass("success");
        $("#rental-message").html("Successfully rented movie.");
      },
      // this is not logging when failing
      error: function(data) {
        console.log("failed to create rental");
        $("#rental-message").addClass("failure");
        $("#rental-message").html("Unable to rent movie. Please make sure duedate is not before today.");
      }
    });

  },

  getSearch: function() {
    this.model.url = "http://localhost:3000/movies";
    console.log("clicked search button");
    this.search = true;
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
  },
  showSideBar: function() {
    this.$("#side-bar").show();
    this.$("#list-main").addClass("large-9");
    this.$(".movie-card").removeClass("large-3");
    this.$(".movie-card").addClass("large-4");
  },

  showMovieDetails: function(movie) {
    this.details = true;
    console.log("inside showMovieDetails");
    this.showSideBar();
    this.$("#rental-form").hide();
    this.$("#movie-details").empty();
    this.$("#movie-details").show();

    var myDetailedMovie = new MovieView({
      model: movie.model,
      template: _.template($("#movie-details-template").html()),
      // search: false,
      el: "#movie-details"
    });
    this.$("#movie-details").append(myDetailedMovie.render().el);
  },

  hideSideBar: function() {
    this.details = false;
    this.$("#side-bar").hide();
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
  },

  getRentalForm: function(movie) {
    console.log("inside getRentalForm");
    // console.log(movie.model.title);
    this.showSideBar();
    this.$("#movie-details").hide();
    this.$("#rental-form").show();
    this.$("#rental-form").empty();

    var rentalForm = new RentalFormView({
      model: movie.model,
      template: _.template($("#rental-form-template").html()),
      tagName: "section"
    });
    this.$("#rental-form").append(rentalForm.render().el);
  }

});

export default MovieListView;
