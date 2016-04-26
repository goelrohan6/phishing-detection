var gmail = null;
/*
 * Wait for the Gmail object to be ready
 */
function refresh(f) {
	if( (/in/.test(document.readyState)) || (typeof Gmail === undefined) ) {
		setTimeout('refresh(' + f + ')', 10);
	} else {
    	f();
  	}
}

var check_failure = function() {
	var id = null,
		raw_email = null,
		spoof = false;
	
	console.log('[Phish Detect] Scanning email...');

	// Get the email ID from the url
	id = window.location.hash.split('/').pop(),

	// Get the "original email", which contains headers
	raw_email = gmail.get.email_source(id),

	// Check for softfail and hardfail
	spoof = (/=fail/.test(raw_email) || /=softfail/.test(raw_email));

	// If failure, alert user
	if(spoof) {
		alert('This email may be a phishing attempt. Please take caution when handling the contents of the email, such as clicking links.');
		console.log('This could be a phishing email!');
	}
};

var main = function(){
	console.log('[Phish Detect] Gmail object defined. Ready to protect.');

	gmail = new Gmail();
	gmail.observe.after('open_email', check_failure);
};

// Wait for for document and Gmail objects to be ready
refresh(main);

