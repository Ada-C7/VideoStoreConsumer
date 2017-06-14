import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieListView from './views/movie_list_view.js';
import Library from './collections/library.js';
import Search from './collections/search.js';

const AppView = Backbone.View.extend({
  initialize: function() {
    // hide details div
    // listenTo(movieListView, "returnToLib", getLibrary)
    // listenTo(movieListView, "sendMovie", showMovieDetails)
  },

  render: function() {
    // call getLibrary
    // should this render the library directly? or should it call the getLibrary? or in initialize?
  },

  events: {
    // search button click : passes query to getSearch
    // hide details click : hideMovieDetails
  },

  showMovieDetails: function() {
    // show details div
    // clear details div
    // render the template and all that crap
  },

  hideMovieDetails: function() {
    // hide the details div
  },

  getLibrary: function() {
    // makes a new movielist view with a library collection
  },

  getSearch: function() {
    // makes a new movielist view with a search collection
  }

});

export default AppView;
