import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';

const MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    console.log("rendering indiv movie view");
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {
    "click .movie" : "sendMovie",
    "click .rent-movie" : "rentMovie",
    "click .add-library" : "addToLib",
    "click .remove-movie" : "removeFromLib"
  },
  removeFromLib: function() {
    console.log("remove clicked");
    // console.log(this.model.id);
    this.model.url = "http://localhost:3000/movies/" + this.model.id;
    this.model.destroy();
  },
  addToLib: function() {
    if (this.$(".add-library").hasClass("unclickable") === false) {
      console.log("clicked addtolib");
      this.$(".add-library").html("Added");
      this.$(".add-library").addClass("unclickable success");
      this.$(".small-poster").addClass("grayed_out");
      this.$(".movie-card").addClass("added-movie");

      this.model.url = "http://localhost:3000/movies";
      this.model.save();
    }
    // this.trigger("addToLib", this.model)
  },

  sendMovie: function(event) {
    console.log("in movie view clicked on movie");
    this.trigger("showMovie", this);
  },

  rentMovie: function() {
    console.log("you have inside movie view for rental");
    this.trigger("getRentForm",this);
  }

});

export default MovieView;
