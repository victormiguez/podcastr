Template.signUp.events({
  'submit #sign-up': function (event) {
    event.preventDefault();
    
    var name = event.target.name.value;
    var email = event.target.email.value;
    var password = event.target.password.value;

    Accounts.createUser({
      password: password,
      email: email,
      profile: {
        name: name
      }
    }, function (err) {
      if (err){
        Session.set('message', err.reason)
        Session.set('error', true);
        return;
      }
      Router.go('/dashboard');
    });
  }
});