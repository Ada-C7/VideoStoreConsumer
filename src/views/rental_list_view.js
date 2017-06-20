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
  },


  render: function() {
    // this.rentalList.shift();
    $('#rental-list').empty();
    $('#rental-list').append('<h3>Rental list for </h3>');
    this.rentalList.forEach(function(rental){
      rental.render();
      $('#rental-list').append(rental.$el);
    }, this);
    return this;
  },

  addRental: function(rental){
    var rental = new RentalView ({
      model: rental,
      template: this.rentalTemplate //,
      //movie_title: "Psycho"  // NEED TO REMOVE THIS
    });

    this.rentalList.push(rental);
  },

  // showRentals: function(){
  //   console.log("IN SHOW RENTALS FUNCTON:")
  //   console.log(Backbone.pubSub.selectedCustomerId)
  //   var customerId = Backbone.pubSub.selectedCustomerId
  //   console.log(this.model)
  //   this.rentalList = this.model.where({customer_id: customerId})
  //   console.log(this.rentalList);
  // },



});

export default RentalListView;
