import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';



var CustomerView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click #choose-customer-button': 'customerSelected',
    'click #customer-name' : 'customerNameSelected'
  },

  render: function() {
    var html = this.template({customer: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  customerSelected: function(event) {
    console.log("In customerSelected")
    Backbone.pubSub.selectedCustomer = this.model
    Backbone.pubSub.trigger('customerChosen', this.model)
  },

  customerNameSelected: function(event){
      console.log("In customer NAME Selected")

    Backbone.pubSub.selectedCustomerId = this.model.attributes.id;
    Backbone.pubSub.trigger('displayRentals', this.model);
  }




});

export default CustomerView;
