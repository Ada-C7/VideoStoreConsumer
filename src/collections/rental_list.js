import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Rental from '../models/rental';

var RentalList = Backbone.Collection.extend({
  model: Rental,
  initialize: function(params) {
    params || (params = {});
    this.query = params.query;
  },
  url: function() {
    return 'http://localhost:3000/movies?query=' + this.query
  }

});

export default RentalList;
