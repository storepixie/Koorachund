(function () {
  'use strict';
	
	var contact = document.querySelectorAll('.contact-items');
	var contactLen = contact.length;
	for (var i = 0; i < contactLen; i++) {
	  contact[i].addEventListener('click', showCard, false);
	}
	
	var closeContact = document.getElementById('close_contact_card');
	closeContact.addEventListener('click', hideCard, false);
	function showCard( event ){
		var contentBox = event.currentTarget.querySelector('.contact-box-hide');
		if(contentBox !== null){
			var cardContents = contentBox.outerHTML;
			var cardModal = document.getElementById("contact_card");
			cardModal.style.display = 'block';
			var cardModalTarget = cardModal.querySelector('.contact-contents');
			if( cardModalTarget !== null ){
				cardModalTarget.innerHTML = cardContents;
			}
		}
  	}

  	function hideCard( event ){
		document.getElementById("contact_card").style.display = 'none';
  	}

})();