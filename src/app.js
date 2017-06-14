// /src/app.js

// Import jQuery & Underscore
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import AppView from './views/app_view.js';
import Library from './collections/library.js';

var myLibrary = new Library();
myLibrary.fetch();
// ready to go
$(document).ready(function() {
  console.log("in document.ready");
  // create a new app_view
  var myAppView = new AppView({
    model: myLibrary,
    library_template: _.template($("#library-template").html()),
    search_template: _.template($("#search-results-template").html()),
    el: 'body'
  });

  myAppView.getLibrary();

});
