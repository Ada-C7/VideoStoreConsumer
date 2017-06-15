import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import MovieView from 'views/movie_view';
import SearchList from 'collections/search_list';

var MovieSearchView = Backbone.View.extend({
  initialize: function(params) {
    var self = this;

    this.movieListTemplate = params.movieListTemplate;

    this.movieSearchViewList = [];

    this.listenTo(this.model, 'add', this.addSearchMovie);
    this.listenTo(this.model, 'update', this.render);
  },
  events: {
    'click #search-button': 'search'
  },
  search: function(event) {
    console.log("Working");
    console.log(event);

    var query = this.$('input[name="search"]').val();

    var newSearch = new SearchList();
    newSearch.fetch({data: {query: query}});
  }
});

export default MovieSearchView;
