import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  defaults: {
    image_url: "http://articleonepartners.com/wp-content/uploads/2015/06/1000px-Clapboard.svg_.png"
  }
});

export default Movie;
