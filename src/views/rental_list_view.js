import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Rental from '../models/rental.js';

var RentalListView = Backbone.View.extend({
  initialize: function(params) {
    this.rentalsTableTemplate = params.rentalsTableTemplate;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    var compiledTableTemplate = this.rentalsTableTemplate({ rentals: this.model });
    this.$('main').html(compiledTableTemplate);
    return this;
  }
});

export default RentalListView;
