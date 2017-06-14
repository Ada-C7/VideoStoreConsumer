import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieListView from './movie_list_view.js';
import Library from '../collections/library.js';
import Search from '../collections/search.js';

const AppView = Backbone.View.extend({
  initialize: function(params) {
    console.log("initializing appview");
    this.library_template = params.library_template;
    this.search_template = params.search_template;
    this.$("#movie-details").hide();
    this.listenTo(this.model, "update", this.render);
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

    var myLibraryList = new MovieListView({
      model: this.model,
      template: this.library_template,
      el: "#list-main"
    });
    this.listenTo(myLibraryList, "sendMovie", this.showMovieDetails);

    var listContent = myLibraryList.render(_.template($("#movie-library-template").html()));
    this.$(".list-content").empty();
    this.$(".list-content").html(listContent);
    console.log("put contents in list (inside getlibrary function)");
    // makes a new movielist view with a library collection
  },

  getSearch: function() {
    listenTo(movieListView, "returnToLib", getLibrary);
    listenTo(movieListView, "sendMovie", showMovieDetails);
    // makes a new movielist view with a search collection
  }

});

export default AppView;
