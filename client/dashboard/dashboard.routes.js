Router.route('/dashboard', {
  template: 'dashboard',
  onBeforeAction: function () {
    if (!Meteor.user()) {
      this.redirect('/');
    }
  }
});