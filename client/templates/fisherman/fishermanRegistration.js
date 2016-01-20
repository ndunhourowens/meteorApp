Template.fishermanRegister.created = function(){

};

Template.fishermanRegister.rendered = function(){

};

Template.fishermanRegister.helpers({});

Template.fishermanRegister.events({
	'submit form': function(event){
		event.preventDefault();
		var fisherman = {
			firstName: event.target.firstName.value,
			lastName: event.target.lastName.value,
			phone: event.target.phone.value,
			licenceLoc: event.target.licenceLoc.value,
			licenceName: event.target.licenceName.value,
			licenceNum: event.target.licenceNum.value,
			licenceEx: event.target.licenceEx.value,
			email: event.target.email.value,
			password: event.target.password.value,
		}
		Accounts.createUser({
			"email": fisherman.email,
			"firstName": fisherman.firstName,
			"lastName": fisherman.lastName,
			"phone": fisherman.phone,
			"licenceLoc": fisherman.licenceLoc,
			"licenceName": fisherman.licenceName,
			"licenceNum": fisherman.licenceNum,
			"licenceEx": fisherman.licenceEx,
			"password": fisherman.password,
		}, function(err) {
			if(err) {
				alert(err.reason)
			} else {
				var fishermanId = Meteor.UserId;
			}
		});
		Meteor.loginWithPassword(fisherman.email, fisherman.password);
		Router.go('/marketPlace');
	}
});