import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import RentalView from './rental_view';

var RentalListView = Backbone.View.extend({
  initialize: function(options) {
    this.rentalTemplate = _.template($('#rental-template').html());
    this.rentalList = [];

    this.model.forEach(function(rawRental){
      this.addRental(rawRental);
    }, this);

    this.listenTo(this.model, 'add', this.addRental);
    this.listenTo(this.model, 'update', this.render);

    this.listenTo(Backbone.pubSub, 'addToInventory', this.createRental);
  },
  //
  // events: {
  //   'submit #add-button': 'createRental'
  // },

  render: function() {
    $('#rental-list').empty();
    this.rentalList.forEach(function(rental){
      rental.render();
      $('#rental-list').append(rental.$el);
    }, this);
    return this;
  },

  addRental: function(rental){
    var rental = new RentalView ({
      model: rental,
      template: this.rentalTemplate
    });

    this.rentalList.push(rental);
  },

  createRental: function(movie) {
    console.log("We are in Create Rental");

    var existingMovie = this.model.find(function(model){return model.get('title') === movie.attributes.title && model.get('release_date') === movie.attributes.release_date; });
    console.log(existingMovie);
    if (existingMovie == null) {
      this.model.create(movie);
    }
    else{
      alert("You have already added this movie")
    }
  }

});

export default RentalListView;
