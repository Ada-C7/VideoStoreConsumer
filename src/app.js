import $ from 'jquery';
import _ from 'underscore';
import Movies from './collections/movies';
import MoviesView from './views/movies_view';

var movies = new Movies();

$(document).ready(function() {
     var moviesView = new MoviesView({
          model: movies,
          resultTemplate: _.template($('#result-movie-template').html(), {variable: 'movie'}),
          stockTemplate:  _.template($('#stocked-movie-template').html(), {variable: 'movie'}),
          el: 'main'
     });

     moviesView.render();
});
