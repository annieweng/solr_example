
$(document).ready(function() {
	$('[data-event]').live('click',function(e){
		var data = $(this).attr('data-event').split(',');
		var category = (typeof data[0] != 'undefined') ? data[0].replace(/^\s+|\s+$/g, '') : '';
		var action = (typeof data[1] != 'undefined') ? data[1].replace(/^\s+|\s+$/g, '') : '';
		var label = (typeof data[2] != 'undefined') ? data[2].replace(/^\s+|\s+$/g, '') : '';
		var value = (typeof parseInt(data[3]) == 'number') ? parseInt(data[3].replace(/^\s+|\s+$/g, '')) :0;
		var nonInteraction = (typeof data[4] != 'undefined') ? data[4].replace(/^\s+|\s+$/g, '') : false;
		
		if(category != ''){
			_gaq.push(['_trackEvent',category,action,label,value,nonInteraction]);
		}
	});
});