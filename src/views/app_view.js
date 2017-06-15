import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import MovieListView from './movie_list_view.js';
import MovieView from './movie_view.js';

import Library from '../collections/library.js';
import Search from '../collections/search.js';
import Movie from '../models/movie.js';


const AppView = Backbone.View.extend({
  initialize: function(params) {
    console.log("initializing appview");
    this.library_template = _.template($("#library-template").html());    this.search_template = _.template($("#search-results-template").html());
    this.$("#movie-details").hide();
    // this.library = params.library;
    // this.library = new Library();
    // console.log(this.library.url);
    // this.library.fetch();

  },

  render: function() {
    this.getLibrary();
  },

  events: {
    "click #search-button" : "getSearch"
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
    console.log("inside getLibrary");
    var myLibrary = new Library();
    console.log(myLibrary.url);
    myLibrary.fetch({
      success: function(data) {
        console.log("#1 it worked!", data);
      },
      failure: function(data) {
        console.log("#1 it sucks", data);
      }
    });
    var myLibraryView = new MovieListView({
      model: myLibrary,
      movie_template: _.template($("#movie-library-template").html()),
      el: "#list-main"
    });
    this.listenTo(myLibraryView, "sendMovie", this.showMovieDetails);

    var listContent = myLibraryView.render();
    console.log("#3 listContent is: ");
    console.log(listContent);
    this.$("#list-main").html(this.library_template({movie_list: listContent}));

    console.log("put contents in list (inside getlibrary function)");
  },

  getSearch: function() {
    console.log("inside getSearch");
    var mySearch = new Search();
    var myQuery = this.$("#query").val();
    console.log(myQuery);
    mySearch.url += myQuery;
    mySearch.fetch();

    var mySearchList = new MovieListView({
      model: mySearch,
      movie_template: _.template($("#movie-search-template").html()),
      el: "#list-main"
    });
    this.listenTo(mySearchList, "sendMovie", this.showMovieDetails);
    this.listenTo(mySearchList, "returnToLib", this.getLibrary);

    var listContent = mySearchList.render();

    this.$("#list-main").html(this.search_template({movie_list: listContent}));

    console.log("put contents in list (inside getSearch function)");


  }

  // getSearchQuery: function() {
  //   var myQuery = this.$("#query").val();
  //   return myQuery;
  // }



});

export default AppView;
