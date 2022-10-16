/*
	Dopetrope by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center'
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);

// Log in also work with enter key 
var input = document.getElementById("ledenlogin");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("ledenloginbutton").click();
  }
});


// password
function pswd(form) {
	var somthing = idk("uryybjbeyq")
	if (form.pass.value==somthing) { 

		var sessionTimeout = 1;
		var loginDuration = new Date();
		loginDuration.setTime(loginDuration.getTime()+(sessionTimeout*60*60*1000));
		document.cookie = "CrewCentreSession=Valid; "+loginDuration.toGMTString()+"; path=/";

	location="https://svnull.nl/ledenpagina-protected"; 
	} 
	else { alert("Wrong Password") } 
}

  function idk (str) {
    var plainText = "";
    for(var i = 0; i < str.length; i++) {
        var encryptedCharacter = str.charCodeAt(i);
        if(encryptedCharacter >= 97 && encryptedCharacter <= 122) {
            plainText += String.fromCharCode((encryptedCharacter-97 - 13 + 26) %26 + 97 );
        } else if(encryptedCharacter >= 65 && encryptedCharacter <= 90) {
            plainText += String.fromCharCode((encryptedCharacter-65 - 13 + 26) %26 + 65 );
        } else {
            plainText += String.fromCharCode(plainCharacter);
        }
    }
    return plainText;
}