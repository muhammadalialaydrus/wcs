(function($){

	$('.product-detail .image-primary').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});

	$('.product-detail .certificate-list').lightGallery({
		thumbnail: true,
		animateThumb: true,
		showThumbByDefault: false,
		exThumbImage: 'data-exthumbimage',
		selector: '.selector',
		download: false,
	});

	// $('.detail-avatar .video-area').lightGallery({
	// 	thumbnail: true,
	// 	animateThumb: true,
	// 	showThumbByDefault: false,
	// 	exThumbImage: 'data-exthumbimage',
	// 	selector: '.selector',
	// 	loadYoutubeThumbnail: true,
	// 	youtubeThumbSize: 'default',
	// 	loadVimeoThumbnail: true,
	// 	vimeoThumbSize: 'thumbnail_medium',
	// 	download: false,
	// });

	// $('.video-listing').lightGallery({
	// 	thumbnail: true,
	// 	animateThumb: true,
	// 	showThumbByDefault: false,
	// 	exThumbImage: 'data-exthumbimage',
	// 	selector: '.selector',
	// 	loadYoutubeThumbnail: true,
	// 	youtubeThumbSize: 'default',
	// 	loadVimeoThumbnail: true,
	// 	vimeoThumbSize: 'thumbnail_medium',
	// 	download: false,
	// });

	// $('main').lightGallery({
	// 	thumbnail: true,
	// 	animateThumb: false,
	// 	showThumbByDefault: false,
	// 	exThumbImage: 'data-exthumbimage',
	// 	selector: '.selector',
	// 	loadYoutubeThumbnail: true,
	// 	youtubeThumbSize: 'default',
	// 	loadVimeoThumbnail: true,
	// 	vimeoThumbSize: 'thumbnail_medium',
	// 	download: false,
	// 	autoplayVideoOnSlide: true,
	// });

})(jQuery);