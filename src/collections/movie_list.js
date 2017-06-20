import Backbone from 'backbone';
import Movie from '../models/movie';
import $ from 'jquery';

var MovieList = Backbone.Collection.extend({
  model: Movie,
  url: 'http://localhost:3000/movies',
  parse: function(data) { // The parsing migth not be needed in this case
    return data;
  },
  comparator: function (model) {
        return model.get("title");
  },
  checkOut: function(data) {
          var url = "http://localhost:3000/rentals/" + this.get('title') + "/check-out";
           // note that these are just $.ajax() options

       // add any additional options, e.g. a "success" callback or data
      //  _.extend(options, opts);

       return (this.sync || Backbone.sync).call(this, null, this, _.extend({
         url: url,
         type: 'POST',
         data: data
       }, options));
   },
});


export default MovieList;
