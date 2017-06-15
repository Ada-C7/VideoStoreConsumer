import Backbone from 'backbone';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.movieListTemplate = params.movieListTemplate;
  },

  render: function() {
    var html = this.movieListTemplate({movie: this.model.toJSON()});
    // console.log(this.model.toJSON()); // look at JSON
    this.$el.html(html);

    this.delegateEvents();
    return this;
  }
});

export default MovieView;
