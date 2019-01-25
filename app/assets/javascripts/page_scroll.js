$(document).ready(function() {
	$('#fullpage').fullpage({
		//options here
		anchors:['title','projects','skills'],
		lockAnchors:true,
		autoScrolling:true,
		navigation: true,
		loopBottom: true,
		controlArrows:false,
		verticalCentered: true,
	});

	//methods
	$.fn.fullpage.setAllowScrolling(true);

	$('#bionic').click(function(){
    	fullpage_api.moveTo('projects',1);
	});
	$('#energy').click(function(){
    	fullpage_api.moveTo('projects',2);
	});
	$('#game').click(function(){
    	fullpage_api.moveTo('projects',3);
	});
});