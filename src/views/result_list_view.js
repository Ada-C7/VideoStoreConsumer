import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ResultView from './result_view';
import Result from '../models/result';


var ResultListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, "update", this.render);
  },
  render: function() {
    this.$('#movie-list').empty();
    this.$('#result-list').empty();
    this.$('#movie-details').empty();

    var that = this;

    this.model.each(function(result) {
      var myResultView = new ResultView({
        model: result,
        template: that.template
      });
      that.$('#result-list').append(myResultView.render().$el);
    });
    return this;

  }
});

export default ResultListView;
