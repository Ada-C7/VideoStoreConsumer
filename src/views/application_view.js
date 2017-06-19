import Backbone from 'backbone';
import MovieList from '../collections/movie_list.js';
import MovieListView from './movie_list_view.js';
import MovieDetailsView from './movie_details_view.js';

const ApplicationView = Backbone.View.extend({
  initialize: function (params) {
    this.movieTemplate = params.movieTemplate;
    this.movieDetailsTemplate = params.movieDetailsTemplate;
    this.alertTemplate = params.alertTemplate;
  },
  events: {
    'click h1' : 'showAllMovies'
  },
  showAllMovies: function () {
    var movieList = new MovieList();
    movieList.fetch();

    var movieListView = new MovieListView({
      model: movieList,
      movieTemplate: this.movieTemplate,
      movieDetailsTemplate: this.movieDetailsTemplate,
      alertTemplate: this.alertTemplate,
      el: 'body'
    });
    movieListView.render();
  }
});

export default ApplicationView;
