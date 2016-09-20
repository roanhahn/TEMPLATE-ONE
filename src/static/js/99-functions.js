// SLIDESHOW

function cycleImages(){
  var $active = $('.background_cycler .active');
  var $next = ($('.background_cycler .active').next().length > 0) ? $('.background_cycler .active').next() : $('.background_cycler div:first');
	  $next.css('z-index',2);//move the next image up the pile
	  $active.fadeOut(1500,function(){//fade out the top image
	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
	  $next.css('z-index',3).addClass('active');//make the next image the top one
  });
}

$(window).load(function () {
	// Site Preloader
	$('#preloader').fadeOut('slow', function () {
		$(this).remove();
	});

	// Slideshow
	
	setInterval('cycleImages()', 5000);

});



$(document).ready(function() {

	$('.background_cycler').fadeIn("slow" );

	if ($( window ).width() > 991){
		$('.navbar').removeClass("mobile-nav");
	}
	else{
		$('.navbar').addClass("mobile-nav");
	}

	// replace html code
	// $( "docs-code" ).html();
	// alert("blaat");
	$( ".docs-code" ).click(function() {
		var htmlString = $( this ).html();
		$( this ).text( htmlString );
	});


	// Show Mobile Nav
	$( ".toggle-nav" ).click(function() {
		$( ".navbar" ).fadeToggle( "fast", "linear" );
	});

	// Scroll back to top
	$(".back-to-top").click(function(){;
		$('html, body').animate({scrollTop:0}, 1000);
		return false;
	});


	// LAZYLOAD
	$(".lazyload").unveil(200, function() {
		$(this).load(function() {
			this.style.opacity = 1;
		});
	});

	// MAPS
	$('.maps').click(function () {
		$('.maps iframe').css("pointer-events", "auto");
		$('.maps div').css("pointer-events", "auto");
	});

	// Fancybox

	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		},
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	// Scroll to anchors

	$(".scroll-to").click(function() {
		// alert($(this).data('level'));
		
		$('html, body').animate(
			{scrollTop: $('.' + $(this).data('level')).offset().top},
			{
				duration: 1000, // how fast we are animating
				easing: 'easeInOutCubic' // the type of easing
			}
			);
		$( ".mobile-nav" ).fadeOut( "fast", "linear" );
	});
});

$(window).resize(function(){
	// $( "body" ).prepend( "<div>" + $( window ).width() + siteWidth +  "</div>" );
	if ($( window ).width() > 991){
		$('.navbar').removeClass("mobile-nav");
	}
	else{
		$('.navbar').addClass("mobile-nav");
	}
});

// $(window).scroll(function(){
// 	if ($(this).scrollTop() > 400) {
// 		$('.back-to-top').fadeIn();
// 	} else {
// 		$('.back-to-top').fadeOut();
// 	}
// });










