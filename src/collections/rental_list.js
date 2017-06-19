import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Rental from '../models/rental';


var RentalList = Backbone.Collection.extend({
  model: Rental,
  url: 'http://localhost:3000/movies?query='
});

export default RentalList;
