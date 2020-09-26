$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
		items: 1,
		autoplay: true,
		loop: true,
		margin: 10,
		autoplayTimeout: 10000,
		nav: true,
		dots:false,
		animateIn: 'animate__fadeIn',
		animateOut: 'animate__fadeOut',
		navText: ["<i class='fas fa-angle-left'>", "<i class='fas fa-angle-right'>"]
	})
});

$(document).ready(function(){
	$('.menu').click(function(){
		$('ul li').toggleClass('active');
	});
});
