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
			username: Meteor.user().username
		}
		Meteor.call("addData", newAd);
		event.target.name.value = "",
		event.target.phone.value = "",
		event.target.fish.value = "",
		event.target.size.value = "",
		event.target.quantity.value = "",
		event.target.price.value = ""
	}
});
