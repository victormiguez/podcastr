function loginRequired () {
  if (!Meteor.userId())
    return this.render('signIn');
  this.next();
}

Router.onBeforeAction(loginRequired, {
  only: ['dashboard']
});

Router.route('/', {
  template: 'home'
});

Router.route('/sign-up', {
  template: 'sign-up'
});

Router.route('/dashboard', {
  name: 'dashboard',
  template: 'dashboard'
});