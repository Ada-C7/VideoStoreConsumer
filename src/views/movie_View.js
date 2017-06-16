
import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Movie from '../models/movie.js';


var MovieView = Backbone.View.extend({

  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "change",
    this.render);
  },
  render: function() {
    var compiledTemplate =
    this.template(this.model.toJSON() );
    this.$el.html(compiledTemplate);
    return this;
  },

  events:  {
    "click #add-to-library": "add"
  },

  add: function(){
    console.log(this.model);

    this.model.save();



    // t.string   "title"
    // t.text     "overview"
    // t.date     "release_date"
    // t.integer  "inventory"
    // t.datetime "created_at",   null: false
    // t.datetime "updated_at",   null: false
    // t.string   "image_url"


    // use fetch with data: JSON

    // adjust rails route for create, controller for create method
    // newMovie.fetch({
    //   data: $.params({
    //     title: newMovie.get('title');
    //   })
    // })
  },

});

export default MovieView;
