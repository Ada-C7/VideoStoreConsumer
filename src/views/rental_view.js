import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

var RentalView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    'click #delete-button': 'deleteRental'
  },

  render: function() {
    var html = this.template({rental: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  deleteRental: function() {
    console.log("IN DELETE RENTAL FUNCTION:")
    console.log(this.model.attributes.movie_id)
    // var title = this.movie_title;
    var title = "The Exorcist"

    this.model.save(null, {type: 'POST', url:'http://localhost:3000/rentals/' + title + '/return'});
      Backbone.pubSub.trigger('renderRentals', this.model);


    // this.model.trigger('renderRentals');
    // this.model.destroy();
    // this.model.destroy({url:'http://localhost:3000/rentals/' + title + '/return'});

  }
});

export default RentalView;
