
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


var Movie = Backbone.Model.extend({
  logStatus: function(){
    console.log('Created' + this.get('title'));
  },
  initialize: function(params){
    this.logStatus();
  }

});
 export default Movie;
