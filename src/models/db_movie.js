import Backbone from 'backbone';

var DBMovie = Backbone.Model.extend({
     defaults: {
          title: '',
          overview: '',
          release_date: '',
          image_url: '',
          external_id: ''
     },
});

export default DBMovie;
