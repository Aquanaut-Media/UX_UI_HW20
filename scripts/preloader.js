
window.onload = function() {

setTimeout(function(){  
    $('.preloader').css('background-color','#161616');
    }, 1000);

setTimeout(function(){
    $('.preloader p').css('display','block');
    }, 2800);

  setTimeout(function(){
		$('.preloader').addClass('loaded');
	}, 3000);
};

function fade() {
    $('.preloader').fadeOut("slow");
  }
    setTimeout(fade, 5000);

    