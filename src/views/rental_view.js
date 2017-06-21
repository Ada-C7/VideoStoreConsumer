import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import InventoryList from '../collections/inventory_list'

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
    var id = this.model.attributes.movie_id;
    this.model.save({returned: true}, {type: 'POST', url:'http://localhost:3000/rentals/' + id + '/return'});

  }
});

export default RentalView;
