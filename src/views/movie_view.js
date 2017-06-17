import Backbone from 'backbone';

var MovieView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(options) {
    this.template = options.template;
    this.movieSearchTemplate = options.movieSearchTemplate;
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log(this.model.attributes.type);
    if (this.model.attributes.type === "rental") {
      let html = this.template({movie: this.model.toJSON()});
      this.$el.html(html);
      // console.log("in movie render");
      this.delegateEvents();
    }else if (this.model.attributes.type === "search"){
      let html = this.movieSearchTemplate({movie: this.model.toJSON()});
      console.log("in search render");
      console.log(this.model);
      this.$el.html(html);
      this.delegateEvents();
    }

    return this;
  },
  events: {
    "click .show-details": "onClick",
    "click .delete-button": "deleteMovie",
    // "click #rent: "
  },
  deleteMovie: function(event) {
    console.log("deleteMovie called!");
    if (window.confirm("Are you sure you want to delete this movie?")) {
      console.log("going to delete it!");
      this.model.destroy();
    }
  }
});

export default MovieView;
