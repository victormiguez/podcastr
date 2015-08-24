'use strict';


Meteor.methods({
  importPodcasts: function () {
    return HTTP.call('GET', 'https://itunes.apple.com/search?term=podcast&entity=podcast&country=BR');
  },
  findPodcastByName: function (name) {
    return HTTP.call('GET', 'https://itunes.apple.com/search?term=' + name + '&entity=podcast')
  }
});