$('.slider').slider();
$('.featured-products-slider').slider({
	slidesToShow: 4,
	responsive: [
		{
			breakpoint: 767,
			settings:{
				slidesToShow: 3
			}
		},
		{
			breakpoint: 450,
			settings:{
				slidesToShow: 1
			}
		}
	]
});

$('.testimonials-slider').slider({
	dots: true,
});
