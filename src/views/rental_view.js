import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import InventoryList from '../collections/inventory_list'

var RentalView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.listenTo(this.model, 'change', this.render);
    //this.movie_title = options.movie_title; // NEED TO REMOVE THIS
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
    console.log("IN DELETE RENTAL FUNCTION:");
    console.log(this.model.attributes.movie_id);

    // var title = movies.find(function(movie){return movie.get('id') === this.model.attributes.movie_id; });
    // var title = movies.find(function(movie){return movie.get('id') === this.model.attributes.movie_id; });
    // var rentals = this.model.find(function(model){return model.get('title') === movie.attributes.title && model.get('release_date') === movie.attributes.release_date; });
    var id = this.model.attributes.movie_id;

    // console.log(title);
    this.model.save(null, {type: 'POST', url:'http://localhost:3000/rentals/' + id + '/return'});
    // this.model.trigger('update');
    // this.model.destroy();
    // this.model.destroy({url:'http://localhost:3000/rentals/' + title + '/return'});

  }
});

export default RentalView;
