Template.adForm.created = function(){

};

Template.adForm.rendered = function(){

};

Template.adForm.helpers({});

Template.adForm.events({
	'submit form': function(event) {
		event.preventDefault();

		var newAd = {
			name: event.target.name.value,
			phone: event.target.phone.value,
			fish: event.target.fish.value,
			size: event.target.size.value,
			quantity: event.target.quantity.value,
			price: event.target.price.value,
			createdAt: new Date(),
			owner: Meteor.userId(),
			username: Meteor.user()
		}
		Meteor.call("addData", newAd, function(error, success) {
			if(error) {
				console.log(error);
			}
			if(success) {
				Router.go('/managePosts');
			}
		});
	}
});
