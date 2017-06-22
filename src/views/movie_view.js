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
    'click #delete': 'deleteMovie',
    'click #poster, #title' : 'onClick'
  },
  getInventory: function(){
    var inventory = this.$("input[type='number']").val();

    this.$("input[type='number']").val('');

    console.log('this is the input from', inventory);
    return inventory;
  },
  addMovie: function() {
    console.log("#1");
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
  },
  deleteMovie: function(){
    console.log("#1");
    this.model.fetch({
      data: {
        id: this.model.get("id"),
        // title: this.model.get('title')
      },
      type: 'DELETE'
    });
    // NOTE this does not bubble up to any other collection the moview belongs to. Acoordint to `oak-tree`
    this.model.collection.remove(this.model);
  },
  onClick: function(event){
    event.stopPropagation();
    self = this;
    console.log("#1");
    this.model.fetch({
      success: function(data) {
        console.log("It worked (details)!", data);
        self.trigger('selectedMovie', data);

      },
      failure: function(data) {
        console.log("Failure", data);
        this.$('#movie-list').append("<h2>Request failed.</h2>");
      }
    });
  }
});

export default MovieView;
