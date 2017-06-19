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

    this.listenTo(Backbone.pubSub, 'customerChosen', this.createRental);
    this.listenTo(Backbone.pubSub, 'inventoryChosen', this.createRental);

    // this.listenTo(Backbone.pubSub, 'all', function(event_name, data ){
    //
    //   if( event_name == "customerChosen"  && event_name == "inventoryChosen" ){
    //     createRental();
    //   }
    // });
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
    if (Backbone.pubSub.selectedMovie && Backbone.pubSub.selectedCustomer){
    console.log("Movie and Customers are selected")

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var due = new Date();
    var msDueDate = new Date(due.setTime( due.getTime() + 14 * 86400000 ));
    var dueDate = msDueDate.getFullYear()+'-'+(msDueDate.getMonth()+1)+'-'+msDueDate.getDate();

    var params = {
      customer_id: Backbone.pubSub.selectedCustomer.attributes.id,
      movie_id: Backbone.pubSub.selectedMovie.attributes.id,
      checkout_date: date,
      due_date: dueDate
    }

    // console.log(params);
    var title = Backbone.pubSub.selectedMovie.attributes.title;
    this.model.create(params, {url:'http://localhost:3000/rentals/' + title + '/check-out'});
    // this.model.create(params);
    // console.log(this.model);
    // console.log(this.model);
  }

    }

  });

  export default RentalListView;
