var maxSubCount = [5, 5, 5, 2, 0];

var mainCats = [
		"Discrete Entry",
		"Batch Entry",
		"Account Credentials/Access",
		"Enrollment Assistance",
		"Other",
	];

var DISCRETE = [
		"How to File",
		"Submission Status ",
		"How to Amend/Correct",
		"Form Functionality",
		"BSA ID",
	];	

var BATCH = [
		"How to File",
		"Submission Status",
		"How to Amend/Correct",
		"Batch Documentation",
		"Batch Validation Error",
	];	

var ACCOUNT = [
		"How to Reset Password",
		"Forgot User ID",
		"Where to Locate PIN",
		"Account Locked",
		"Account Roles",
	];	

var ENROLL = [
		"How to Enroll",
		"Enrollment Confirmation Email",
	];	


var getSubCat = {
		"Discrete Entry": DISCRETE,
		"Batch Entry": BATCH,
		"Account Credentials/Access": ACCOUNT,
		"Enrollment Assistance": ENROLL,
	};

var catNameValDict = {
		"Discrete Entry":"Discrete",
		"Batch Entry":"Batch",
		"Account Credentials/Access":"Account",
		"Enrollment Assistance":"Enrollment",
		"Other":"General",
		"How to File":"How to Submit",
		"Submission Status ":"Status of Submission",
		"How to Amend/Correct":"Amend/Correction Process",
		"Form Functionality":"Form Functionality",
		"BSA ID":"Needs BSA ID/RMSB Number",
		"How to File(B)":"How to Submit (B)",
		"Submission Status(B)":"Status of Submission (B)",
		"How to Amend/Correct(B)":"Amend/Correction Process (B)",
		"Batch Documentation(B)":"Batch Specification (B)",
		"Batch Validation Error(B)":"Validation Error (B)",
		"How to Reset Password":"Password Reset",
		"Forgot User ID":"Forgot Userid",
		"Where to Locate PIN":"Needs Pin",
		"Account Locked":"Account Locked",
		"Account Roles":"User Roles",
		"How to Enroll":"How to Enroll",
		"Enrollment Confirmation Email":"Resend Confirmation",
	};	