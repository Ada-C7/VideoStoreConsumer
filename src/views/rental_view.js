import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var RentalView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click #add-button': 'rentalResult'
  },

  render: function() {
    var html = this.template({movie: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  // rentalResult: function(event) {
  //   console.log("AAAAAAAAA rentalResult:")
  //   Backbone.pubSub.trigger('addToInventory', this.model)
  // }
});

export default RentalView;
