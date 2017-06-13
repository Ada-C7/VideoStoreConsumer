import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var MovieView = Backbone.View.extend({
  initialize: function(params){
    this.template = params.template;
  },
  render: function(){
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  }
});

export default MovieView;
