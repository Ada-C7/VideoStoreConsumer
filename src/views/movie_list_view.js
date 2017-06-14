import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import MovieView from './movie_view';
import Movie from '../models/movie';

var MovieListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    console.log(this.el);
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    this.$("#movie-list").empty();
    var that = this;

    this.model.each(function(movie) {
      var movieView = new MovieView( {
        model: movie,
        template: that.template,
      });
      that.$('#movie-list').append(movieView.render().$el);
    });

    return this;
  },
  events: {
    "click #submit-search" : "search"
  },
  getFormData: function() {
    var formTitle = this.$("#title").val();
    this.$("#title").val('');

    return {
      title: formTitle
    };
  },
  search: function() {
    // var movie = new Movie(this.getFormData());
    //
    // this.model.create(movie);
  }
});

export default MovieListView;
