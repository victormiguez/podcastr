Template.signIn.events({
  'submit #sign-in': function (event) {
    event.preventDefault();
    
    var email = event.target.email.value;
    var password = event.target.password.value;

    Meteor.loginWithPassword(email, password, function (err) {
      if(err){
        Session.set('message', 'There is an error. Please, try again');
        Session.set('error', true);
        return;
      }

      Router.go('/dashboard');
    });
  }
});