import Backbone from "backbone";
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';



var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click .add-movie': 'addMovie',
    'click .rent-movie': 'rentMovie'
  },

  rentMovie: function() {
    console.log(this.model);
    var rentalTemplate = _.template($("#rental-template").html());
    var compiledRentalTemplate = rentalTemplate(this.model.toJSON());
    $("#create-rental").html(compiledRentalTemplate);
    return this;
  },

  addMovie: function() {

    var successHandler = function() {
      $(".messages").html("<h4>Movie successfully added.</h4>");
    };

    var errorHandler = function() {
      $(".messages").html("<h4>Movie could not be added.</h4>");
    };

    this.model.save(null, {
      type: 'POST',
      success: successHandler,
      error: errorHandler
      }
    );
  }
});

export default MovieView;
