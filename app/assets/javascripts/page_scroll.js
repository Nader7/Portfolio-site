$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		autoScrolling:true,
		navigation: true,
		loopBottom: true,
		controlArrows:false,
		verticalCentered: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);
});