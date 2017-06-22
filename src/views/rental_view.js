import Backbone from 'backbone';
import Movie from '../models/rental.js';
import $ from 'jquery';
import _ from 'underscore';

var RentalView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
  events: {
    'click h5.button.check-in': 'checkinMovie'
  },
  checkinMovie: function(event) {
    this.$(".rental-due-date").addClass('hide');
    this.$(".button.check-in").addClass('hide');
    this.$(".rental-info").append('returned!');
    var title = this.model.get('title');

    var customer_id = this.model.get('customer_id');
    var options = {
        type: 'POST',
        url: 'http://localhost:3000/rentals/' + title + '/return',
        customer_id: customer_id,
        title: title,
      };

    var attributes = {title: title, customer_id: customer_id};

    this.model.save(attributes, options);
  }
});

export default RentalView;
