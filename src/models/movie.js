import Backbone from 'backbone';

var Movie = Backbone.Model.extend({

  initialize: function(params) {
    // this.title = this.model.get('title');

  },
  url: "http://localhost:3000/movies/"
  // destroy: function(options) {
  //   // options.data = JSON.stringify(this.attributes);
  //   // options.contentType = 'application/json';
  //   // // return Backbone.Model.prototype.destroy.call(this);
  //
  // },


});

export default Movie;
