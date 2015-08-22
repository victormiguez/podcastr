Meteor.methods({
  importPodcasts: function () {
    return HTTP.call('GET', 'https://itunes.apple.com/search?term=podcast&entity=podcast&country=BR');
  }
});