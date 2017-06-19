import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  initialize: function(params) {
  },
  sync: function(method, model, options) {
    switch(method) {
      case 'read':
        options.url = 'http://localhost:3000/movies/' + model.get('title');

        return Backbone.sync(method, model, options);
      case 'update':
        // handle update ...
        // check in
      case 'create':
        // handle create ...
        // check out
    }
  }
});

export default Movie;
