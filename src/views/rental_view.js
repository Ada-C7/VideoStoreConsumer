import Backbone from 'backbone';
import Movie from '../models/rental.js';
import $ from 'jquery';
import _ from 'underscore';

var RentalView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
});

export default RentalView;
