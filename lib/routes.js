Router.route('/', {
  template: 'home'
});

Router.route('/sign-up', {
  template: 'sign-up'
});

Router.route('/dashboard', {
  template: 'dashboard',
  onBeforeAction: function () {
    if (!Meteor.user()){
      Router.go('/');
      return false;
    }
    this.next();
  }
});