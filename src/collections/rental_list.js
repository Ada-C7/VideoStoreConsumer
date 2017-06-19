import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Rental from '../models/rental';

var RentalList = Backbone.Collection.extend({
  model: Rental,
  // initialize: function(params) {
  //   this.query = params.query;
  // },
  url: function(title) {
    return 'http://localhost:3000/movies?query=' + title
  }

});

export default RentalList;
