

var swiper = new Swiper(".swiper", {
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
});



$('#open').on('click', function (event){
	$('.block-1').toggleClass('details-block-active');
});