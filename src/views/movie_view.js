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
    var compiledTemplate = this.template({movie: this.model.toJSON(), detailsClicked: this.detailsClicked});
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click .add-movie': 'addMovie',
    'click .movie-image-details': 'showDetails'
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
  },
  showDetails: function() {

    if (this.model.attributes.id) {
      this.model.fetch();
      this.detailsClicked = !this.detailsClicked;
      this.render();
    }
  }
});

export default MovieView;
