import Backbone from 'backbone';
import MovieListView from './movie_list_view.js';
import MovieDetailsView from './movie_details_view.js';

const ApplicationView = Backbone.View.extend({
  initialize: function (params) {
    this.movieList = params.movieList;
    this.movieListTemplate = params.movieListTemplate;
    this.movieDetailsTemplate = params.movieDetailsTemplate;
  },
  events: {
    'click h1' : 'showList'
  },
  showList: function () {
    var movieListView = new MovieListView({
      model: this.movieList,
      template: this.movieListTemplate,
      el: 'body'
    });
    movieListView.render();
    this.listenTo(movieListView, 'showMovieDetails', this.showMovieDetails);
  },
  showMovieDetails: function (movie) {
    var movieDetailsView = new MovieDetailsView({
      model: movie,
      template: this.movieDetailsTemplate,
      el: 'body'
    });
    movieDetailsView.render();
  }
});

export default ApplicationView;
