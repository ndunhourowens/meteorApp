Template.login.created = function(){

};

Template.login.rendered = function(){

};

Template.login.helpers({});

Template.login.events({
	'submit form': function(event, data){
		event.preventDefault();
		var email = $('[name=loginEmail]').val();
		var password = $('[name=loginPassword]').val();
		Meteor.loginWithPassword(email, password);
		Router.go('/marketPlace');
	}
});