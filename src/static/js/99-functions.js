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

// PRELOADER
$(window).load(function () {
	// Site Preloader
	$('#preloader').delay( 1000 ).fadeOut('slow', function () {
		$(this).remove();

		// WOW EFFECT
		new WOW().init();
	});

	// Slideshow
	
	setInterval('cycleImages()', 5000);

});

$(window).scroll(function(){
	if ($(this).scrollTop() > 400) {
		$('.back-to-top').fadeIn('slow');
	} else {
		$('.back-to-top').fadeOut('slow');
	}
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
		$.scrollLock( true );
	});

	$( ".close-nav" ).click(function() {
		$.scrollLock( false );
	});
	
	// Scroll back to top
	$(".back-to-top").click(function(){;
		$('html, body').animate({scrollTop:0}, 1000);
		return false;
	});

	$(".logo").click(function(){;
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
				locked: false,
				css: { 'background' : 'rgba(255, 255, 255, 0)' }
			}
		},
		padding : 0,
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
		$.scrollLock( false );
		$( ".mobile-nav" ).fadeOut( "fast", "linear" );
	});

	// MASONRY
	$("#gallery-mansory").mpmansory(
		{
			childrenClass: 'item', // default is a div
			columnClasses: 'padding', //add classes to items
			breakpoints:{
				lg: 3, 
				md: 3, 
				sm: 4,
				xs: 6
			},
			distributeBy: { order: false, height: false, attr: 'data-order', attrOrder: 'asc' }, //default distribute by order, options => order: true/false, height: true/false, attr => 'data-order', attrOrder=> 'asc'/'desc'
			onload: function (items) {
				//make somthing with items
			} 
		}
	);


	// Responsive preview
	$(".preview-btn").click(function() {
		// alert($(this).data('level'));
		$("#preview").width( $(this).data('width'));
		$("#preview").height( $(this).data('height'));
		$("#preview").addClass("preview-scaled");
		$("#preview").removeClass("preview-phone");
	});
	$(".preview-phone-btn").click(function() {
		$("#preview").addClass("preview-phone");
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











