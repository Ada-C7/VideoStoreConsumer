import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var RentalView = Backbone.View.extend({

  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'change', this.render);
    // this.render();
  },

  render: function() {
    var html = this.template({movie: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  events: {
    'click .btn-checkout': 'checkout'
  },

  checkout: function(){
    console.log("inside of checkout function");
    var movieTitle = this.$('#rental-title').val();
    this.model.checkoutUrl(movieTitle);

    // var that = this;
    this.model.save({}, {
      success: function(model, response){
        alert("Movie Checked Out!");
       },

      error: function(model, response){
        console.log(response);
        alert( "Something went wrong:\n" + response.responseText);
      }
    });
    this.model.url = 'http://localhost:3000/rentals/';
  }
});

export default RentalView;
