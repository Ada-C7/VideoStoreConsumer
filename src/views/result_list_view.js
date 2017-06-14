import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ResultView from './result_view.js';
import Result from '../models/result.js';

var ResultListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    // this.template2 = params.detailsTemplate;

    this.listenTo(this.model, "update", this.render);
  },
  render: function() {

  this.$('#result-list').empty();
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
    that.$('#result-list').append(myResultView.render().$el);
  });
  return this;

}

});


export default ResultListView;
