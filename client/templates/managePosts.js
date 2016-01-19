Template.managePosts.created = function(){

};

Template.managePosts.rendered = function(){

};

Template.managePosts.helpers({
	userEmail: function() {
    	return Meteor.user().emails[0].address;
  	}
});

Template.managePosts.events({});