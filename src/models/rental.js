import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var Rental = Backbone.Model.extend({
  url: 'http://localhost:3000/rentals/',
//   sync: function (method, model, options) {
//   options.data = _.pick(this.attributes, 'foo', 'bar', 'baz');
//   return Backbone.sync.call(this, method, model, options);
// }
  sync: function(method, model, options) {
    if (method == "create") {
      // console.log("inside sync!");
      method = 'check-out';
      // console.log(method);
      options.url =  this.url + this.get('title') + '/check-out';
      // this = this.toJSON();
      options.data["customer_id"] = this.get('customer_id');
      // console.log(options.data);
      // console.log(options.url);
      console.log(options);
      return Backbone.sync(method, model, options);
    }
  }
});

export default Rental;
