import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  defaults: {
    title: 'Mystery',
    inventory: 1,
    image: 'insert image here'
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
