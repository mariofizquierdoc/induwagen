$(function() {
	$('.mouse-link').on('mouseenter', function() {
		var brand = $(this).attr('id').substring('link-'.length);

		$('body').addClass('bg-' + brand);
		$('body').removeClass('bg-white');

		$('#img-audi').attr('src', $('#img-audi').attr('src').replace('off', 'on'));
		$('#img-mg').attr('src', $('#img-mg').attr('src').replace('off', 'on'));
		$('#img-induwagen').attr('src', $('#img-induwagen').attr('src').replace('off', 'on'));
	});
	$('.mouse-link').on('mouseleave', function() {
		var brand = $(this).attr('id').substring('link-'.length);

		$('body').removeClass('bg-' + brand);
		$('body').addClass('bg-white');

		$('#img-audi').attr('src', $('#img-audi').attr('src').replace('on', 'off'));
		$('#img-mg').attr('src', $('#img-mg').attr('src').replace('on', 'off'));
		$('#img-induwagen').attr('src', $('#img-induwagen').attr('src').replace('on', 'off'));
	});
});