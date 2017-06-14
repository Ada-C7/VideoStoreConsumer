import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';


var MovieView = Backbone.View.extend({

  tagName: 'li',
  // className: 'movie-item',


  initialize: function()
  {
    this.template = _.template($('#movie-card-template').html());
  },
  render: function () {

    var templateHTML = this.template(this.model.toJSON() );
    this.$el.html(templateHTML);

    return this;
  }
});

export default MovieView;
