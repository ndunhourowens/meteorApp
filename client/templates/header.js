Template.header.created = function(){

};

Template.header.rendered = function(){

};

Template.header.helpers({});

Template.header.events({
	'click .js-logout': function(event){
		event.preventDefault();
		Meteor.logout();
	}
});