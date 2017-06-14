import Backbone from 'backbone';

var MovieView = Backbone.View.extend({
  // tagName: 'li',
  className: 'movieInfo',

  initialize: function(params) {
    this.template = params.template;
    // this.listenTo(this.model, "change", this.render);
// this.listenTo(this.model, "update", this.render);
  },

  render: function() {
    var compiledTemplate = this.template( this.model.toJSON() );
    this.$el.html(compiledTemplate);
    return this;
  }

});

export default MovieView;
