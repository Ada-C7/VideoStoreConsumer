import Backbone from 'backbone';
import Customer from '../models/customer.js';
import Rental from '../models/rental.js';
import RentalView from './rental_view.js';
import $ from 'jquery';
import _ from 'underscore';

var CustomerView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    this.delegateEvents();
    return this;
  },
  events: {
    "click h4.customer": "showRentals",
    "click h5.button.check-in": "checkinMovie"
  },
  showRentals: function(event) {

    var name = this.model.get('name').split(' ')[0];
    var info = this.model.get('current_rentals');
    var rentals = info[0];
    var movies = info[1];

    $('#' + name).empty();

    rentals.forEach(function(rental, index)  {
      // console.log(titles[index]);
      rental.title = movies[index].title;
      var newRental = new Rental(rental);
      var rentalView = new RentalView ({
        model: newRental,
        template: _.template($("#rental-template").html())
      });
      $('#' + name).append(rentalView.render().el);
    });





  },
  checkinMovie: function(event) {
    console.log(this.model);
  }

});

export default CustomerView;
