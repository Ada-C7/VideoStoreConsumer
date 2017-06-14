import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Movie from '../models/movie.js';
import MovieView from '../views/movie_view.js';

var MovieListView = Backbone.View.extend({
  initilaize: function(params){
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },

  render: function(){
    // this.$('main').empty();
    console.log("MovieListView render");
    var self = this;
    this.model.each(function(movie){
      var movieView = new MovieView({
        model: movie,
        template: self.template,
        tagName: 'li'
      });
      self.$('main').append(movieView.render().el);
    });
    return this;
  }
});

export default MovieListView;
