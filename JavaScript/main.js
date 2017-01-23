$(document).ready(function(){

	$(".owl-carousel").owlCarousel({
		items:1,
		responsive : {
			0:{ 
				items:1 
			}, //from zero to 600 screen
			600:{
				items:2 
			}, //from 600 to 1050 screen
			1240:{ 
				items:4
			} //from 1050 to 1240 screen
		}


	})
});