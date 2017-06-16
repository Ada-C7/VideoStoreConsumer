import Backbone from 'backbone';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "change", this.render);
  },
  events: {
    'click': 'showDetails',

  },
  render: function() {
    var compiledTemplate = this.template({rental: this.model.toJSON()});
    this.$el.html(compiledTemplate);
    return this;
  },
  showDetails: function(event) {
    this.trigger("selected", this.model);
  },
  // returnHome: function(event) {
  //     console.log("I am triggered");
  //   this.trigger("home", this.model);

  // }
});

export default MovieView;
