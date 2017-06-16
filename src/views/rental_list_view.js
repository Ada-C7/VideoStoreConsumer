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

    // this.listenTo(Backbone.pubSub, 'customerChosen', this.createRental);
    // this.listenTo(Backbone.pubSub, 'inventoryChosen', this.createRental);

    this.listenTo(Backbone.pubSub, 'all', function(event_name, data ){

      if( event_name == "customerChosen"  && event_name == "inventoryChosen" ){
        createRental();
      }

    });
  },

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
    //
    //   params = {
    //     customer_id: 1,
    //     movie_id: 2,
    //     checkout_date: "2017-06-16",
    //     due_date: "2017-06-26"
    //   }
    //
    //   this.model.create(params);
    //   console.log(this.model);
    }

  });

  export default RentalListView;
