import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Rental from '../models/rental';

var RentalList = Backbone.Collection.extend({
  model: Rental,
  url: "localhost:3000/rentals"
});

export default RentalList;
