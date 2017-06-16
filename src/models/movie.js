import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
     defaults: {
          title: '',
          overview: '',
          release_date: '',
          image_url: '',
          external_id: ''
     },
  // logStatus: function() {
  //   console.log('Model ' + this.cid);
  //   console.log('Title ' + this.get('title'));
  //   console.log('Inventory ' + this.get('inventory'));
  // },
  // initialize: function(params) {
  //   console.log('Starting ', params);
  //   this.logStatus();
  // }
});

export default Movie;
