$(function() {
	var inProgress = false;
	
	
	$('.bars').click(function(){
		
		$(this).parents('header').siblings('nav').toggleClass('menu-on').find('.top-menu').toggleClass('on');
		return false;
		
	})
	
    $(window).scroll(function(){
		

		/*         правые баннеры            */
		
		if ($(window).width() > 960)
		{
            /*
			$('.main-posts, .article').each(function(){
				var rightblock = $(this).find('.right-block .sticked');
				var wdy = $(window).scrollTop() - $(this).offset().top +25;
				if (wdy > 0) {
					var dy = (rightblock.height()+25 + wdy < $(this).height())?wdy:$(this).height()-rightblock.height()
					rightblock.css({position:'absolute','top': dy, 'left':40})
				}
				else
					rightblock.css({'top': 0})
			})
            */
            $('.main-posts').each(function(){
                var rightblock = $(this).find('.rightblock .sticked');
                var rightblock_top = rightblock.offset().top;
                var rightblock_bottom = rightblock_top + rightblock.height();
                
				if (rightblock.length)
				{
					var window_top = $(window).scrollTop() /*+ top_position;*/
					var window_bottom = $(window).scrollTop() + $(window).height();
					
					var el_top = $(this).offset().top;
					var el_bottom = $(this).offset().top + $(this).height();
					var w_height = $(window).height() //добавлено
					
					//console.log('el_top = '+el_top+'; el_bottom='+el_bottom);
					//console.log('rightblock = '+rightblock_top + '; rightblock_bottom = '+rightblock_bottom);
                    //console.log('window_top = '+window_top+'; window_bottom='+window_bottom)
					
					if ( rightblock.height() - window_top + el_top <= w_height )
					{
						var container = rightblock.parents('.container')||$('.container:first');
						var right_position = container.offset().left + container.width() - rightblock.width() + 15;
						var top_fixed = rightblock_top - window_top; 

						rightblock.css({position:'fixed', top: top_fixed, 'left': right_position, 'right':'auto'}) 
						//console.log('блок в окне')
					}

					if ( el_bottom - window_top <= w_height )
					{
						var top_absolute = el_bottom - el_top - rightblock.height(); 
						
						rightblock.css({position:'absolute', top: top_absolute, 'right': 15, 'left':'auto'}) //добавлено
						//console.log('блок ушел вверх')
					}

					if (  rightblock.height() - window_top > w_height )
					{
						rightblock.css({position:'absolute', top: 0, 'right': 15, 'left':'auto'}) //добавлено
						//console.log('блок ушел вниз')
					}
					
                }
            })
		}


		/*        загрузка материалов        */	
		//console.log('w='+$(window).scrollTop()+$(window).height())
		//console.log($('.posts').offset().top+$('.posts').height()-100)

		if(typeof type_page != 'undefined') {
				if(type_page == 'search' || type_page == 'tags') inProgress = true; // если это Поиск, то не подгружаем скроллом
		}
		
		if ($(window).scrollTop()+$(window).height() > $('.posts').offset().top+$('.posts').height()-100  && !inProgress ) {
			
			$('.loading').remove();
			
			var last_article = $('.posts li:last');
			var c = $('li.post').length; //add
			
			$loading = $('<div class="loading"></div>');
			$('.posts').after($loading);
			inProgress = true;
			
			var urlPage = "/ajax/add_posts.php?new=Y&c="+c;
			if(typeof page != 'undefined') {
    				
					if(typeof page.iblock != 'undefined') urlPage += "&iblock="+page.iblock;
					if(typeof page.sid != 'undefined') urlPage += "&sid="+page.sid;
					if(typeof page.id != 'undefined') urlPage += "&id="+page.id;
			}			
			console.log(urlPage);
			$.ajax({
				url: urlPage,  //"_articles.html",
			}).success(function(data){
				
				last_article.after(data);
				$loading.remove();
				
				var c_new = $('li.post').length;
								
				if(c_new != c) {
						inProgress = false;
				}
				
				
			})
		}
		
    })
    $(window).scroll();
    
    
    
	/*     обновление счетчиков галереи ()    */

	$(document).on('slid.bs.carousel', '.article .carousel', function () {
		$(this).find('.count').text($(this).find('.item').length);
        
        var active_item=$(this).find('.item.active');
        
		$(this).find('.current_num').text($(this).find('.item').index(active_item)+1);

		
	})    
    
    
    
    
    
    

});