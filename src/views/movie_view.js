import Backbone from 'backbone';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.movieListTemplate = params.movieListTemplate;
  },

  render: function() {
    var html = this.movieListTemplate({movie: this.model.toJSON()});
    // console.log(this.model.toJSON());
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  events: {
    'click #add-button': 'addSearchedMovie'
  },

  addSearchedMovie: function(){
    console.log("inside addSearchedMovie()");
    console.log(this.model.toJSON());
    // format as movies/:id/params
    // .save() put request to Rails API
  },
});

export default MovieView;
