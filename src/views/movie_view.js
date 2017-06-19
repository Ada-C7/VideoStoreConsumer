import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var MovieView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },
  events: {
    "click .add-movie": "addMovie"
  },
  render: function(){
    var compiledTemplate = this.template({
      movie: this.model.toJSON()
    });
    this.$el.html(compiledTemplate);
    return this;
  },
  addMovie: function(event) {
    //console.log this.model attributes cause when we click on the
    // console.log(event);
    console.log(this.model.attributes);
    var movieUrl = "http://localhost:3000/movies";
    var data = { movie: this.model.attributes };
    $.post(movieUrl, data, function(response){
      console.log(response);
      console.log("Made post request");
    });
  }
});

export default MovieView;
