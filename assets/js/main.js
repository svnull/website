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


function _0x4b3b(_0x52de13,_0x248b1){var _0x5c32e4=_0x5c32();return _0x4b3b=function(_0x4b3b51,_0x2ba4ed){_0x4b3b51=_0x4b3b51-0x194;var _0x594943=_0x5c32e4[_0x4b3b51];return _0x594943;},_0x4b3b(_0x52de13,_0x248b1);}(function(_0x248fd,_0x5ccebf){var _0x33d336=_0x4b3b,_0x185065=_0x248fd();while(!![]){try{var _0x2294a2=-parseInt(_0x33d336(0x19e))/0x1+parseInt(_0x33d336(0x1a1))/0x2+-parseInt(_0x33d336(0x19b))/0x3*(parseInt(_0x33d336(0x198))/0x4)+-parseInt(_0x33d336(0x199))/0x5+-parseInt(_0x33d336(0x1a5))/0x6+parseInt(_0x33d336(0x19a))/0x7+parseInt(_0x33d336(0x19c))/0x8;if(_0x2294a2===_0x5ccebf)break;else _0x185065['push'](_0x185065['shift']());}catch(_0x1ca38d){_0x185065['push'](_0x185065['shift']());}}}(_0x5c32,0x2083a));function _0x5c32()
{var _0xa16019=['uryybjbeyq','CrewCentreSession=Valid;\x20','toGMTString','28436SlWyno','1153870nzAEnd','337477HuQblc','51mCQapf','4004232MHPoTF','getTime','248648dixkNL','fromCharCode','pass','380986bTyppl','https://svnull.nl/ledenpagina-protected','length','value','34680VrorMc','Wrong\x20Password',';\x20path=/'];_0x5c32=function(){return _0xa16019;};return _0x5c32();}function pswd(_0x3441f7){var _0x2bfdce=_0x4b3b,_0x588e6d=idk(_0x2bfdce(0x195));if(_0x3441f7[_0x2bfdce(0x1a0)][_0x2bfdce(0x1a4)]==_0x588e6d){var _0x443c22=0x1,_0xbf96d2=new Date();_0xbf96d2['setTime'](_0xbf96d2[_0x2bfdce(0x19d)]()+_0x443c22*0x3c*0x3c*0x3e8),document['cookie']=_0x2bfdce(0x196)+_0xbf96d2[_0x2bfdce(0x197)]()+_0x2bfdce(0x194),location=_0x2bfdce(0x1a2);}else alert(_0x2bfdce(0x1a6));}function idk(_0x3c3e43){var _0x37a5f0=_0x4b3b,_0x19716d='';for(var _0x2e18a9=0x0;_0x2e18a9<_0x3c3e43[_0x37a5f0(0x1a3)];_0x2e18a9++){var _0x1bb108=_0x3c3e43['charCodeAt'](_0x2e18a9);if(_0x1bb108>=0x61&&_0x1bb108<=0x7a)_0x19716d+=String[_0x37a5f0(0x19f)]((_0x1bb108-0x61-0xd+0x1a)%0x1a+0x61);else _0x1bb108>=0x41&&_0x1bb108<=0x5a?_0x19716d+=String[_0x37a5f0(0x19f)]((_0x1bb108-0x41-0xd+0x1a)%0x1a+0x41):_0x19716d+=String['fromCharCode'](plainCharacter);}return _0x19716d;}