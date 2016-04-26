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

	id = window.location.hash.split('/').pop(),
	raw_email = gmail.get.email_source(id),
	spoof = /=fail/.test(raw_email);
	if(spoof) {
		$("body").prepend('<div class="phish_detect"><div class="modal fade" id="popupModal" tabindex="-1" role="dialog"> <div class="modal-dialog"> <div class="modal-content"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button> <h4 class="modal-title">Modal title</h4> </div><div class="modal-body"> <p>One fine body&hellip;</p></div><div class="modal-footer"> <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> <button type="button" class="btn btn-primary">Save changes</button> </div></div></div></div></div>');
		$("#popupModal").modal('show');	
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

