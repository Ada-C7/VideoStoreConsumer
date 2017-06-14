import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import RentalLibrary from '../collections/rental_library';

var RentalLibraryView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },

  events: {
    "click #search": "search"
  },

  search: function(){
    var query = this.getQueryTerm();
  },

  getQueryTerm: function(){
    var word = this.$("#query").val();

    return word;
  },

});


export default RentalLibraryView;
