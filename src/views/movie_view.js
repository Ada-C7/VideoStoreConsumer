import Backbone from 'backbone';
import $ from 'jquery';

var MovieView = Backbone.View.extend({
  tagName: 'li',
  initialize: function(params) {
    this.template = params.template;
    // this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var movieHTML = this.template({movie: this.model.attributes});
    this.$el.html(movieHTML);

    if (!(this.model.attributes.external_id)) {
      this.$('.btn-add').hide();
    }
    
    return this;
  },

  events: {
    'click .btn-add': 'addRental'
  },

  addRental: function(event) {
    this.trigger('add', this.model);
    event.stopPropagation();
  }
});

export default MovieView;
