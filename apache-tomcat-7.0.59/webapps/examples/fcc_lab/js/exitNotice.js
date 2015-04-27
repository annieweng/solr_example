var exitTimeout = 0;
var gtrans;
var href;

function exitNotice(url) {
	gtrans = url;
	var winwidth = $(document).width();
	var winheight = $(document).height();
	var boxleft = parseInt(winwidth/2) - 250;
	$('#coverimg').attr('width', winwidth);
	$('#coverimg').attr('height', winheight);
	$('#redirCover').css('height', winheight);

	$('#redirNotice').css('left', boxleft + 'px');
	$('#redirLink').attr('href', url).text(gtrans);
	
	$('#redirCover').show();
	$('#redirNotice').fadeIn();
	exitTimeout = setTimeout("doExit()", 10000);
}

function closeExitNotice() {
	clearTimeout(exitTimeout);
	$('#redirNotice').fadeOut();
	$('#redirCover').hide();
	
}

function doExit() {
	closeExitNotice();
	window.location.href = gtrans;
}

$(document).ready(function() {
	$('#redirLink').click( function() {
		closeExitNotice();
	});

	$('a[href^="http"]').not('#redirLink').click(function(event){
		if ( this.hostname != location.hostname && this.hostname != 'fccdotgov.uservoice.com' && this.hostname != 'translate.google.com' && !this.hostname.match(/(\.gov|\.mil|\.fed\.us)$/i) )  {
			if (event.preventDefault) { 
				event.preventDefault(); 
			} else { 
				event.returnValue = false; 
			}
			exitNotice( $(this).attr('href') );
		}
	});
});
