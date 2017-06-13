import Backbone from 'backbone';
import Movie from '../models/movie';
import $ from 'jquery';

var   findUrl = function(){
    var html =   $('#movieName').val();
        // var html =  $("input[name=movietitle]").val();
        // alert(html);
    // var html = "Jaws"
    return html;
  }


var MovieList = Backbone.Collection.extend({

  model: Movie,
  url: 'http://localhost:3000/movies?query=' + findUrl()
});

export default MovieList;
