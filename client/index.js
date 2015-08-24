'use strict';

Template.podcasts.helpers({
  podcastsLists: function () {
    return Session.get('podcastsLists');
  }
});

Template.podcasts.onRendered(function () {
  Meteor.call('importPodcasts', function (err, res) {
    if (err)
      return console.log(err);
    console.log(res);
    Session.set('podcastsLists', res.data.results);
  });
});

Template.podcasts.events({
  'submit #podcast-search': function (event) {
    let name = event.target.name.value;

  }
})