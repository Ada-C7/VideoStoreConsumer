import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var RentalView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click #delete-button': 'deleteRental'
  },

  render: function() {
    var html = this.template({rental: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  deleteRental: function() {
    this.model.destroy({url:'http://localhost:3000/rentals/' + title + '/return'});

  }
});

export default RentalView;
