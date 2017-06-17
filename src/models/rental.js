import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var Rental = Backbone.Model.extend({
  url: "http://localhost:3000/rentals/",
  sync: function(method, model, options) {
    console.log("inside sync!");
    if (method == 'check-out') {
      options.url = url + model.get('movie') + '/check-out';
      console.log(options.url);
      Backbone.sync('create', model, options);
    } else if (method == 'check-in') {

    }
  }
});

export default Rental;
