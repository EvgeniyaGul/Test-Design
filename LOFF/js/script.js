$(document).ready(function(){

	var $menu = $('#header-nav');

	$(window).scroll(function(){
		if ( $(this).scrollTop() > 144 && $menu.hasClass("default") ){
			$menu.removeClass("default").addClass("fixed");
		} else if($(this).scrollTop() <= 144 && $menu.hasClass("fixed")){
			$menu.removeClass("fixed").addClass("default");
		}
	}); //fixed menu
});