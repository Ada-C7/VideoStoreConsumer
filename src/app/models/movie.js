import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  logStatus: function(){
    // console.log('Created' + this.get('title'));
  },
  
  sync: function(method, model, options) {
     if (method=='read'){
         options.url = model.collection.url + '/' + model.attributes.title;
     }
     return Backbone.sync(method, model, options);
  },

  initialize: function(params){
    // this.logStatus();
  }
});

export default Movie;
