import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  initialize: function(params) {
  },
  sync: function(method, model, options) {
    if (model.get('external_id') === null) {
      // options.url = 'http://localhost:3000/movies/' + model.get('title');
      options.url = model.collection.url + model.get('title');
    } else {
      // options.url = 'http://localhost:3000/movies/';
      options.url = model.collection.url;
    }

    return Backbone.sync(method, model, options);
  }
});

export default Movie;
