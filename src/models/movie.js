import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  initialize: function(params) {
  },
  sync: function(method, model, options) {
    // switch(method) {

      if (method == "read") {
        alert("create request");
        options.url = 'http://localhost:3000/movies/' + model.get('title');
      } else if (method == "create") {
        alert("create request");
        options.url = 'http://localhost:3000/movies/';
      } else if (method == "delete") {
        alert("delete request");
        options.url = 'http://localhost:3000/movies/';
      }
      return Backbone.sync(method, model, options);

      // case 'create':
      //   options.url = 'http://localhost:3000/movies/';
      //   return Backbone.sync(method, model, options);
      // case 'delete':
      //   options.url = 'http://localhost:3000/movies/';
      //   return Backbone.sync(method, model, options);
    // }
  }
});

export default Movie;
