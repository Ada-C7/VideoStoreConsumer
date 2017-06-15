import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Movie from '../models/movie.js';

var MovieView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    'click #add' : 'addMovie',
  },
  getInventory: function(){
    var inventory = this.$("input[type='number']").val();

    this.$("input[type='number']").val('');

    console.log('this is the input from', inventory);
    return inventory;
  },
  addMovie: function() {
    console.log(this.model);

    this.model.fetch({data: {
      title: this.model.get('title'),
      overview: this.model.get('overview'),
      release_date: this.model.get('release_date'),
      image_url: this.model.get('image_url'),
      inventory: this.getInventory()
    },
    type: 'POST'
  });
}});

export default MovieView;
