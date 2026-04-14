$(function() {

	// $('.swiper-slide.swiper-slide-active [data-aos]').removeClass('aos-animate');

	var swiper = new Swiper('.focus-info .sliders.thumb-1 .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: false,
		loop: false,
		// centeredSlides: true,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1000: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		}
	});

	var swiper = new Swiper('.focus-info .sliders.thumb-2 .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: false,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1000: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		}
	});

	var swiper = new Swiper('.other-thumbnails .sliders.thumb-3 .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoHeight: false,
		loop: false,
		loopFillGroupWithBlank: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		scrollbar: {
			el: ".swiper-scrollbar",
			hide: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
				spaceBetween: 30,
			},
			1000: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		}
	});

	var galleryThumbs = new Swiper('.product-detail .image-thumb .thumb-slider .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		slidesPerView: 4,
		loop: false,
		loopFillGroupWithBlank: true,
		spaceBetween: 10,
		// centeredSlides: true,
		// centeredSlidesBounds: true, 
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		pagination: false,
		breakpoints: {
			767: {
				spaceBetween: 10,
				slidesPerView: 4,
				pagination: false,
			},
			1023: {
				spaceBetween: 10,
				slidesPerView: 5,
				pagination: false,
			},
		}
	});

	var galleryMain = new Swiper('.product-detail .image-primary .primary-slider .swiper-container', {
		keyboard: {
			enabled: true,
		},
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 1,
		autoHeight: true,
		effect: 'coverflow',
		loop: false,
		loopFillGroupWithBlank: true,
		watchOverflow: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		preventInteractionOnTransition: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: false,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 150,
			modifier: 4,
			slideShadows : false,
		},
		thumbs: {
			swiper: galleryThumbs,
		},
		breakpoints: {
			1200: {
				slidesPerView: 2,
			},
			1000: {
				slidesPerView: 2,
			},
		},
	});


})