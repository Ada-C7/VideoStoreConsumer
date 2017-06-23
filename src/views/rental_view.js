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
    var title = this.model.get('title');
    $("#returned-movies").append('<li>' + title + ' returned! </li>');

    var customer_id = this.model.get('customer_id');
    var options = {
        type: 'POST',
        url: 'http://localhost:3000/rentals/' + title + '/return',
        customer_id: customer_id,
        title: title,
      };

    var attributes = {title: title, customer_id: customer_id};

    this.model.save(attributes, options);
    console.log("about to remove model from collection!");
    this.trigger("movieReturned", this.model);
  }
});

export default RentalView;
