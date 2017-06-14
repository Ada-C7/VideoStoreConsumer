import Backbone from 'backbone';
import MovieListView from './movie_list_view.js';

const ApplicationView = Backbone.View.extend({
  initialize: function (params) {
    this.movieList = params.movieList;
    this.movieListTemplate = params.movieListTemplate;
    this.movieDetailsTemplate = params.movieDetailsTemplate;
  },
  showList: function () {
    var movieListView = new MovieListView({
      model: this.movieList,
      template: this.movieListTemplate,
      el: 'body'
    });
    movieListView.render();
  }
});

export default ApplicationView;
