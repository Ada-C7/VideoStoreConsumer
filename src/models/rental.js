import Backbone from 'backbone';

var Rental = Backbone.Model.extend({
  initialize: function(params) {
  },
  // sync: function(method, model, options) {
  //   switch(method) {
  //     case 'read':
  //       options.url = 'http://localhost:3000/rentals/overdue';
  //
  //       return Backbone.sync(method, model, options);
  //     case 'create':
  //       options.url = 'http://localhost:3000/rentals/' + this.model.title + '/check-out';
  //
  //       return Backbone.sync(method, model, options);
  //     case 'update':
  //       options.url = 'http://localhost:3000/rentals/' + this.model.title + '/return';
  //
  //       return Backbone.sync(method, model, options);
  //   }
  // }
});

export default Rental;
