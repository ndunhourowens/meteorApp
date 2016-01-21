Template.managePosts.created = function(){
	
};

Template.managePosts.rendered = function(){

};

Template.managePosts.helpers({
	firstName: function() {
		return Meteor.user().profile.firstName;
	}
});

Template.managePosts.events({});