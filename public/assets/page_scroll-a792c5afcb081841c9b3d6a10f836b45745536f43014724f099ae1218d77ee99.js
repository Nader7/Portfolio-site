$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['title','projects','skills'],
		sectionsColor: ['', '#3a3a3a', '#002a5e'],
		lockAnchors:true,
		autoScrolling: true,
		loopBottom: true,
		controlArrows: false,
		verticalCentered: true,
		scrollingSpeed: 850,
		navigation: true,
		navigationTooltips: ['Title', 'Projects', 'Skills'],
		showActiveTooltip: true,
		licenseKey: 'AA5B0793-878946C9-AD56A913-DD44D5FC',
		afterRender: function () { //defined in this block for compatibility with fullpage
			$('.lightbox_image').magnificPopup({type:'iframe'});
		}
	});
	
	$.fn.fullpage.setAllowScrolling(true);
});

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

$(document).on('click', '#title_down', function(){
	$.fn.fullpage.moveSectionDown();
});
