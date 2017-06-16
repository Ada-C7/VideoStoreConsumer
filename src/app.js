import $ from 'jquery';
import _ from 'underscore';
import Movies from './collections/movies.js';
import DBMovies from './collections/db_movies.js';
import MoviesView from './views/movies_view.js';
import DBMoviesView from './views/db_movies_view.js';


var movies = new Movies();
var dbMovies = new DBMovies();


$(document).ready(function() {
     var moviesView = new MoviesView({
          model: movies,
          resultTemplate: _.template($('#movie-template').html(), {variable: 'movie'}),
          el: '#movies'
     });

     var dbMoviesView = new DBMoviesView({
          model: dbMovies,
          stockTemplate:  _.template($('#db-movie-template').html(), {variable: 'movie'}),
          el: '#db-movies'
     });

     moviesView.render();
     dbMoviesView.render();

});
