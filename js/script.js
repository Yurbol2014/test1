$( document ).ready(function() {
	$('.header_burger').click(function(event) {
    $('.header_burger,.header-top,.father_burger').toggleClass('active');
    $('body').toggleClass('lock');
});
	});

