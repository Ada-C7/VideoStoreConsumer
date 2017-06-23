import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  defaults: {
    title: '',
    overview: '',
    release_date: '',
    image_url: '',
    external_id: '',
    inventory: 1
  }
});

export default Movie;
