import Backbone from 'backbone';
import $ from 'jquery';

var MovieView = Backbone.View.extend({
  tagName: 'li',
  attributes: { 'data-open': "movie-details"},
  className: 'movie',
  initialize: function(params) {
    this.template = params.template;
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
    'click .btn-add': 'addRental',
    'click': 'showDetails'
  },

  addRental: function(event) {
    this.trigger('add', this.model);
    event.stopPropagation();
  },

  showDetails: function(event) {
    this.trigger('show', this.model)
  }
});

export default MovieView;
