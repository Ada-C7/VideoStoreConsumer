import Backbone from 'backbone';

var DBMovie = Backbone.Model.extend({
  defaults: {
    title: 'Sci-Fi',
    inventory: 1,
    image: 'insert image there'
  },
});

export default DBMovie;
