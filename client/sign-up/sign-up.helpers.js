Template.signUp.helpers({
  error: function () {
    return Session.get('error');
  },
  message: function () {
    return Session.get('message');
  }
});