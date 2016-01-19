Accounts.onCreateUser(function(options, user) {
	user.firstName = options.firstName;
	user.lastName = options.lastName;
	user.phone = options.phone;
	user.licenceLoc = options.licenceLoc;
	user.licenceName = options.licenceName;
	user.licenceNum = options.licenceNum;
	user.licenceEx = options.licenceEx;
	user.email = options.email;
	user.password = options.password;
	user.isAdmin = false;
	return user;
});