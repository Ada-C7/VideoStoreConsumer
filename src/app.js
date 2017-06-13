import $ from 'jquery';
import _ from 'underscore';
import Movies from './collections/movies';
import MoviesView from './views/movies_view';

var movies = new Movies();

$(document).ready(function() {
     var moviesView = new MoviesView({
          model: movies,
          template: _.resultTemplate($('#result-movie-template').html(), {variable: 'movie'}),
          templatePetInfo:  _.stockTemplate($('#stocked-movie-template').html(), {variable: 'movie'}),
          el: 'main'
     });

     moviesView.render();
});
