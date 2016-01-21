Template.loginButton.created = function(){
};

Template.loginButton.rendered = function(){
};

Template.loginButton.helpers({});

Template.loginButton.events({
	'submit form': function(event, data){
		event.preventDefault();
		var email = event.target.loginEmail.value;
		var password = event.target.loginPassword.value;
		Meteor.loginWithPassword(email, password);
		Router.go('/marketPlace');
	}
});