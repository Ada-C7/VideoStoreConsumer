import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Customer from '../models/customer.js';

var CustomerDetailsView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$('main').html(compiledTemplate);
  },
  events: {
    'click #add-customer' : 'addCustomer'
  },
  addCustomer: function () {
    this.trigger('addCustomer', this.model.attributes);
  }
});

export default CustomerDetailsView;
