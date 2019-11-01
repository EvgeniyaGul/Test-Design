$(function () {

	$("#navbarToggle").blur(function(event) {
		var screenWidth = window.innerWidth;
		if (screenWidth < 768) {
			$("#collapsable-nav").collapse('hide');
		} 
	});
	//slider
	/*function htmSlider(){
		var slideWrap = jQuery('.slidewrapper');
		/* ссылки на предудыщий иследующий слайд
		var nextLink = jQuery('#next');
		var prevLink = jQuery('#prev');
		var is_animate = false;
		/* ширина слайда с отступами 
		var slideWidth = jQuery('.slider-item').outerWidth();
		/* смещение слайдера 
		var newLeftPos = slideWrap.position().left - slideWidth;
		/* Клик по ссылке на следующий слайд 
		nextLink.click(function(){
			if(!slideWrap.is(':animated')) {
	
				slideWrap.animate({left: newLeftPos}, 1000, function(){
					slideWrap
						.find('.slider-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});
			}
		});
		/* Клик по ссылке на предыдующий слайд 
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {
			
				slideWrap
					.css({'left': newLeftPos})
					.find('.slider-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);
			}
		});
	}
      /*Показ, закрытие слайдера и затемнение контента
	  $('a[name=modal]').click(function(e) {
	        e.preventDefault();
	        var id = $(this).attr('href');
	        var maskHeight = $(document).height();
	        var maskWidth = $(window).width();
	        $('#mask').css({'width':maskWidth,'height':maskHeight});
	        $('#mask').fadeIn(1000);
	        $('#mask').fadeTo("slow",0.8);
	        
	        $(id).fadeIn(2000);
	    });
	    $('.slider-box #close').click(function (e) {
	        e.preventDefault();
	        $('#mask, .slider-box').hide();
	    });
	    $('#mask').click(function () {
	        $(this).hide();
	        $('.slider-box').hide();
	    });

	htmSlider();*/
});
