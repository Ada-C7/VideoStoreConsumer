import Backbone from 'backbone';

import Video from '/models/video';

var VideoList = Backbone.Collection.extend({
  model: Video,
  url: 'http://localhost:3000/movies', // ??
});

export default VideoList;
