import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Customer from '../models/customer.js';

var CustomerListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = _.template($('#customer-list-template').html());
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    var compiledTableTemplate = this.template({ customers: this.model });
    this.$('main').html(compiledTableTemplate);
    return this;
  }
});

export default CustomerListView;
