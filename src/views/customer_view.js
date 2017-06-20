import Backbone from 'backbone';
import Customer from '../models/customer.js';
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
  // events: {
  //   'click h3.button.add-rental': 'createRental'
  // "click h3.button.add-rental": "addRental"

  // },
  events: {
    "click h4.customer": "showRentals"
  },
  showRentals: function(event) {


    var name = this.model.get('name').split(' ')[0];
    var rentals = this.model.get('current_rentals');
    $('#' + name).empty();

    rentals.forEach(function(rental)  {
        $('#' + name).append("<li>" + rental.title + "</li>");
     });

  }

});

export default CustomerView;
