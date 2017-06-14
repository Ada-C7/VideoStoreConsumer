import Backbone from 'backbone';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    // this.listenTo(this.model, "search", this.render);
  },
  // events: {
  //   "click": "searchMovie"
  // },
  render: function() {
    var compiledTemplate = this.template({movie: this.model.toJSON()});
    this.$el.html(compiledTemplate);

    // this.delegateEvents();
    return this;
  }
  // searchMovie: function(event) {
  //   this.trigger("selected", this.model);
  // }

});

export default MovieView;
