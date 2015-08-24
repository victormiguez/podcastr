Template.layout.events({
  'click #btn-sign-out': function () {
    Meteor.logout();
    Router.go('/');
  }
})