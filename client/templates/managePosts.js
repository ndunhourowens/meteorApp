Template.managePosts.created = function(){
	
};

Template.managePosts.rendered = function(){

};

Template.managePosts.helpers({
	profile: function() {
		return Meteor.user().profile;
	}
});

Template.managePosts.events({});