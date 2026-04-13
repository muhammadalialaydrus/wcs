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

	var swiper = new Swiper('.cat-news .sliders.thumb-4 .swiper-container', {
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
				slidesPerView: 3,
				spaceBetween: 30,
			},
			600: {
				slidesPerView: 2,
				spaceBetween: 30,
			},
		}
	});


})