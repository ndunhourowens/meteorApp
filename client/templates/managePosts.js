Template.managePosts.created = function(){

};

Template.managePosts.rendered = function(){

};

Template.managePosts.helpers({});

Template.managePosts.events({
	userEmail: function() {
    	return Meteor.user().emails[0].address;
  	}
});