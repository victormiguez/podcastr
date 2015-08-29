Template.dashboard.onRendered(function () {
  Meteor.call('importPodcasts', function (err, res) {
    if (err)
      return console.log(err);
    Session.set('podcastsList', res.data.results);
  });
});