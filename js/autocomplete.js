jQuery(document).ready(function() {


	var datosd;
	chrome.runtime.sendMessage("getData", function(response) {
		if(response.user && response.user != "") {
			datos = response;
			mostrarMensaje();
		}
	});

	function mostrarMensaje() {
		jQuery("head").append("<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>");
		jQuery("body").prepend('<div style="display:none" class="directuc-bar">Ingresar como <span class="user">'+datos.user+ '</span></div>');
		jQuery(".directuc-bar").fadeIn();
	}

	jQuery(document).on('click', '.directuc-bar', function(e) {
		e.preventDefault();
		jQuery("#username").val(datos.user);
		jQuery("#password").val(datos.pass);
		var submit = jQuery("input[type=submit]");
		submit.click();
		jQuery("body").fadeOut();
	});

});

