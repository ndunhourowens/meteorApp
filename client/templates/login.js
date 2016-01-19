Template.login.created = function(){

};

Template.login.rendered = function(){

};

Template.login.helpers({});

Template.login.events({
	'submit form': function(event, data){
		event.preventDefault();
		var email = data.find('#login-email').value;
		var password = data.find('#login-password').value;
		Meteor.loginWithPassword(email, password);
		Router.go('/marketPlace');
	}
});