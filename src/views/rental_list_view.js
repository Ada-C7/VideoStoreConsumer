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
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'add', this.addRental);
    this.listenTo(this.model, 'update', this.render);
  },


  render: function() {
    $('#rental-list').empty();
    $('#rental-list').append('<h3>Rental list </h3>');

    this.rentalList.forEach(function(rental){
      if (rental.model.attributes.returned == false){
        rental.render();
        $('#rental-list').append(rental.$el);
      }
    }, this);
    return this;
  },

  addRental: function(rental){
    if (rental.attributes.id != null){
      var rental = new RentalView ({
        model: rental,
        template: this.rentalTemplate
      });
      this.rentalList.push(rental);
    }
  }

});

export default RentalListView;
