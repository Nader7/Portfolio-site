$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['title','projects','skills'],
		lockAnchors:true,
		autoScrolling:true,
		navigation: true,
		loopBottom: true,
		controlArrows:false,
		verticalCentered: true,
		licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
	});
	
	$.fn.fullpage.setAllowScrolling(true);

	$(document).on('click', '#back', function(){ //for the project partial back button
    	var slide = $('.fp-section.active').find('.slide.active');
    	$.fn.fullpage.moveSlideLeft();
    	
    	setTimeout(function(){
        	slide.remove();
    	},700);
	});
});