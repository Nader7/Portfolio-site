$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['title','projects','skills'],
		sectionsColor: ['', '#0097f3', '#176fdc'],
		lockAnchors:true,
		autoScrolling:true,
		loopBottom: true,
		controlArrows:false,
		verticalCentered: true,
		scrollingSpeed: 850,
		navigation: true,
		navigationTooltips: ['Home', 'Projects', 'Skills'],
		showActiveTooltip: true,
		responsiveSlides: true,
		licenseKey: 'AA5B0793-878946C9-AD56A913-DD44D5FC'
	});
	
	$.fn.fullpage.setAllowScrolling(true);

	$(document).on('click', '#project_back', function(){ //for the project layout back button
    	var slide = $('.fp-section.active').find('.slide.active');
    	$.fn.fullpage.moveSlideLeft();
    	
    	setTimeout(function(){
        	slide.remove();
    	},700);
	});

	$(document).on('click', '#back_title', function(){
		$.fn.fullpage.moveSlideLeft();
	});
	
	$(document).on('click', '#features', function(){
		$.fn.fullpage.moveSlideRight();
	});

	$(document).on('click', '#home_nav', function(){
		$.fn.fullpage.moveSlideRight();
	});
});