
import Backbone from 'backbone';

var VideoStore = Backbone.Model.extend({
  initialize: function(params) {
    this.set("library", params.library);
    this.set("searchResults", params.searchResults);
  }
});

export default VideoStore;
