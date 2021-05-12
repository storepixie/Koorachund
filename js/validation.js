(function () {
  'use strict';
	
	var contactButton = document.querySelector('#contact_submit');
	contactButton.addEventListener('click', validateForm, false);
	var validationColor = ["#cc0000", "#0000001a"];

	function validateForm( event ){
		var results = [];
		var menuIconElement = document.querySelector('#contact_form').elements ;
		for (var i = 0, element; element = menuIconElement[i++];) {
	    	if (element.id === "" || element.id === "contact_submit"){
	        	continue;
			}
			validationStyles( element.id, element.value === "" );
			if( element.value === "" ){
				results.push(element.id);
			}
		}
		if( validationAction( results ) ){
			event.preventDefault();
			return;
  		}
  	}

  	function validationStyles( elm, failed ){
  		var color = failed ? 0 : 1;

  		document.querySelector('#'+elm).style.borderColor = validationColor[color] ;
  	}

  	function validationAction( results ){
  		var response = true;
  		var validationBox = document.querySelector('.validation-messages');
  		if( results.length > 0 ){
			validationBox.innerHTML = '<p class="error">Please fill all the required fields</p>';
		}else{
			validationBox.innerHTML = '';
			response = false;
		}
		return response;
  	}

})();