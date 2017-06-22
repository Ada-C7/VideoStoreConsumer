import Backbone from 'backbone';

var Rental = Backbone.Model.extend({
  initialize: function(params) {
  },
  // sync: function(method, model, options) {
  //   if (model.get('checkout_date') === null) {
  //     options.url = model.url + model.get('title') + '/check-out';
  //   } else {
  //     console.log("what the hey is model here", model);
  //     options.url = model.url + model.get('title') + '/check_in';
  //     // if
  //     // options.url = model.collection.url + '/overdue';
  //   }
  //
  //   return Backbone.sync(method, model, options);
  // }
});

export default Rental;
