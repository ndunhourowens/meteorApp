Template.header.created = function(){

};

Template.header.rendered = function(){

};

Template.header.helpers({
	id: function() {
		return Meteor.user()._id;
	}
});

Template.header.events({
	'click .js-logout': function(event){
		event.preventDefault();
		Meteor.logout();
	}
});