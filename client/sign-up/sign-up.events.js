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
        Session.set('message', 'There was an error. Please try again.')
        Session.set('error', err);
        return;
      }
      Router.go('/dashboard');
    });
  }
});