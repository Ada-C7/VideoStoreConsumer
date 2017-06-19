import Backbone from 'backbone';
import Movie from '../models/movie';
//templating
import _ from 'underscore';
//the power to select any html element within js, uing a dollar sign and then access additional methods
import $ from 'jquery';


var MovieView = Backbone.View.extend({

  initialize: function(params){
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },

  render: function(){
    var compiledTemplate = this.template(this.model.toJSON() );
    //put the above in this particular view object's`el`, we assign 'el' to the html element we're working in - jq .html
    this.$el.html(compiledTemplate);
    return this;
  },

  events: {

  }

});



export default MovieView;
