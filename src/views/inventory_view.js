import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

Backbone.pubSub = _.extend({}, Backbone.Events);

var InventoryView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click #choose-movie-button': 'inventorySelected'
  },

  render: function() {
    var html = this.template({inventory: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  inventorySelected: function(event) {
    console.log("In inventorySelected")
    Backbone.pubSub.trigger('inventoryChosen', this.model)
    // console.log(this.model);
  }
});

export default InventoryView;
