import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var MovieView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.isSearchResult = options.isSearchResult;
  },
  events: {
    "click .add-movie": "addMovie"
  },
  render: function(){
    var templateSettings = {
      movie: this.model.toJSON(),
      isSearchResult: this.isSearchResult
    };
    console.log(templateSettings);
    var generatedHtml = this.template(templateSettings);
    this.$el.html(generatedHtml);
    return this;
  },
  addMovie: function(event) {
    // console.log(this.model.attributes);
    var movieUrl = "http://localhost:3000/movies";
    var data = { movie: this.model.attributes };
    $.post(movieUrl, data, function(response){
      console.log(response);
      console.log("Made post request");
    });
  }
});

export default MovieView;
