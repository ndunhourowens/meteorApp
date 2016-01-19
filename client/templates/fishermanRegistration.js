Template.fishermanRegister.created = function(){

};

Template.fishermanRegister.rendered = function(){

};

Template.fishermanRegister.helpers({});

Template.fishermanRegister.events({
	'submit form': function(event){
		event.preventDefault();
		var firstName = $('[name=firstName]').val();
		var lastName = $('[name=lastName]').val();
		var phone = $('[name=phone]').val();
		var licenceLoc = $('[name=licenceLoc]').val();
		var licenceName = $('[name=licenceName]').val();
		var licenceNum = $('[name=licenceNum]').val();
		var licenceEx = $('[name=licenceEx]').val();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
		Accounts.createUser({
			firstName: firstName,
			lastName: lastName,
			phone: phone,
			licenceLoc: licenceLoc,
			licenceName: licenceName,
			licenceNum: licenceNum,
			licenceEx: licenceEx,
			email: email,
			password: password
		});
		Router.go('/marketPlace');
	}
});