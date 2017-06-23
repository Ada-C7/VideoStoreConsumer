import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Rental from '../models/rental.js';

var RentalListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = _.template($('#rentals-table-template').html());
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    var compiledTableTemplate = this.template({ rentals: this.model });
    this.$('main').html(compiledTableTemplate);
    return this;
  }
});

export default RentalListView;
