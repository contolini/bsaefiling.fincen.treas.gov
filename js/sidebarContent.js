	var tagsDb = {
			"Discrete": ["DISCRETE"],
			"Batch": ["BATCH"],
			"Account": ["ACCOUNT"],
			"Enrollment": ["ENROLL"],
			"General": ["OTHER"],
			"How to Submit": ["HOW_SUBMIT_D"],
			"Status of Submission": ["SUBMIT_STATUS_D"],
			"Amend/Correction Process": ["CORRECT_D"],
			"Form Functionality": ["FORM_FUNC"],
			"Needs BSA ID/RMSB Number": ["BSA_ID"],
			"How to Submit (B)": ["HOW_SUBMIT_B"],
			"Status of Submission (B)": ["SUBMIT_STATUS_B"],
			"Amend/Correction Process (B)": ["CORRECT_B"],
			"Batch Specification (B)": ["BATCH_SPEC"],
			"Validation Error (B)": ["VALID_ERROR"],
			"Password Reset": ["PSSWD"],
			"Forgot Userid": ["ID"],
			"Needs Pin": ["PIN"],
			"Account Locked": ["ACCLCK"],
			"User Roles": ["ROLES"],
			"How to Enroll": ["HOW_ENROLL"],
			"Resend Confirmation": ["RESEND_CONFIRM"]
	};
	
	var helpBlockArr = [];
	helpBlockArr = helpBlockArr.concat(discreteContent, batchContent, acctContent, enrollContent, generalContent);
	