import Backbone from "backbone";
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';
import CustomerListView from './customer_list_view.js';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.customers = params.customers;
    this.listenTo(this.model, 'change', this.render);
  },
  render: function() {
    var compiledTemplate = this.template({movie: this.model.toJSON(), detailsClicked: this.detailsClicked});
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    'click .add-movie': 'addMovie',
    'click .rent-movie': 'rentMovie',
    'click .movie-image-details': 'showDetails',
  },
  rentMovie: function() {
    this.trigger("rentalForm", this.model);
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
