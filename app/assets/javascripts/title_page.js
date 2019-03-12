$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors:['title','projects','skills'],
		lockAnchors: true,
		autoScrolling: true,
		loopBottom: true,
		controlArrows: false,
		verticalCentered: true,
		scrollingSpeed: 850,
		navigation: true,
		navigationTooltips: ['Title', 'Bionic Sim', 'Energy System', 'Zorkish', 'Skills', 'Education'],
		showActiveTooltip: true,
		scrollOverflow: true,
		licenseKey: 'AA5B0793-878946C9-AD56A913-DD44D5FC',
		afterRender: function () { //defined in this block for compatibility with fullpage
			$('.lightbox_image').magnificPopup({type:'iframe'});
		}
	});
	
	$.fn.fullpage.setAllowScrolling(true);
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