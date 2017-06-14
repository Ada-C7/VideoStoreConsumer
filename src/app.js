import $ from 'jquery';
import _ from 'underscore';


var myMovieList = new MovieList();
myMovieList.fetch();

var myMovieListView = new MovieListView({
  model: myMovieList,
  template: _.template($('').html()),
  el: 'main'
});

$(document).ready(function() {
  myMovieListView.render();
  // $('section.main-content').append('<p>Hello World!</p>');

});
