import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Inventory from '../models/inventory'

Backbone.pubSub = _.extend({}, Backbone.Events);

var MovieView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click #add-button': 'movieSelected'
  },

  render: function() {
    var html = this.template({movie: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  movieSelected: function(event) {
    console.log("In movieSelected")
    Backbone.pubSub.trigger('addToInventory', this.model)
    // console.log(this.model);
  }
});

export default MovieView;
