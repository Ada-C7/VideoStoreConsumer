import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Result from '../models/result.js';
import Movie from '../models/movie';


var ResultView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    // this.$el.addClass("task-item column column-block");
  // no parentheses on this.render because you're not calling it here... just telling listener, when 'change' happens, to call this.render
    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    var compiledTemplate = this.template({movie: this.model.toJSON()});

    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    "click #add-movie" : "addMovie"
  },
  addMovie: function() {
    // var movie = new Movie(this.model.attributes.title);
    // movie.save({data: {title: this.model.attributes.title}});
    // console.log(">>>>>>>>>>>>>>>>" + this.model.attributes.title);
    // this.model.create(movie);


    // console.log(">>>>>>>>>>>>>>> I'm in addMovie function");
    // this.trigger("adding", this.model);
    console.log(">>>>>>>>>>>>>>>>>> I'm in the trigger");
    // console.log(this.model);


    this.model.save();
  }
});

export default ResultView;
