import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import SearchResults from '../collections/search_results';

var SearchResultsView = Backbone.View.extend({
  initialize: function(params){
    this.template = _.template($('#movie-list-template').html());
    this.listenTo(this.model,"update", this.render);
  },

  render: function(){
    this.$('#movie-list').empty();

    return this;

  }
});
