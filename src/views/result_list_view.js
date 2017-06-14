import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ResultView from './result_view';
import Result from '../models/result';


var ResultListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    console.log("something's happening in result_list_view");

    // this.template2 = params.detailsTemplate;

    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    // console.log("I'm in the result_list_view render!!!!");
  this.$('#movie-list').empty();
  // this.$('#result-list').empty();
  var that = this;

  // looped through collection
  this.model.each(function(result) {
    // created a new view for each pet
    var myResultView = new ResultView({
      model: result,
      template: that.template
      // tagName: 'li'
    });

    // that.listenTo(myResultView, "selected", that.petDeets);
    that.$('#movie-list').append(myResultView.render().$el);
  });
  return this;

}

});


export default ResultListView;
