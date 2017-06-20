
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import MovieDetailsView from "./movie_details_view";
import Movie from '../models/movie';

var MovieView = Backbone.View.extend({

  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change",
    this.render);
  },

  render: function() {
    var compiledTemplate = this.template(this.model.toJSON() );
    this.$el.html(compiledTemplate);
    return this;
  },

  events:  {
    "click #add-to-library": "add",
    "click #movie-card": "renderModal",
  },

  selected: function(event) {
    this.trigger("selected", this.model);
    event.stopPropagation();
  },

  add: function(){
    console.log(this.model);
    this.model.save();
  },


  renderModal: function(event){
    event.stopPropagation();

    $('#movie-details').empty();
    $("#movie-details").removeClass('hidden');

    // console.log(this.model);
    var myDetailsView = new MovieDetailsView({
      model: this.model,
      template: _.template($('#movie-details-template').html())
    });

    // console.log(myDetailsView.render());
    $("#movie-details").append(myDetailsView.generateHTML());

  }


});


  export default MovieView;
