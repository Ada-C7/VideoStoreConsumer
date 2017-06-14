import Backbone from 'backbone';
import Video from '/models/video';

var SearchVideoList = Backbone.Collection.extend({
  model: Video,
  url: url
});

export default VideoList;
