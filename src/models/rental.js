import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var Rental = Backbone.Model.extend({
  url: 'http://localhost:3000/rentals/',
  sync: function(method, model, options) {
    options.data = JSON.stringify(this.attributes);
    options.contentType = 'application/json';
    return Backbone.sync(method, model, options);
  }

});

export default Rental;
