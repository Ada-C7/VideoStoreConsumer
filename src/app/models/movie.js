import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var Movie = Backbone.Model.extend({
  logStatus: function(){
    // console.log('Created' + this.get('title'));
  },

  initialize: function(params){
    // this.logStatus();
  }
});

export default Movie;
