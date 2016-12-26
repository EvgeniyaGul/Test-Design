$(function() {
	
	
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
					var window_top = $(window).scrollTop()
					var window_bottom = $(window).scrollTop() + $(window).height();
					
					var el_top = $(this).offset().top;
					var el_bottom = $(this).offset().top + $(this).height();
					var w_height = $(window).height() //добавлено
					
					console.log('el_top = '+el_top+'; el_bottom='+el_bottom);
					console.log('rightblock = '+rightblock_top + '; rightblock_bottom = '+rightblock_bottom);
                    console.log('window_top = '+window_top+'; window_bottom='+window_bottom)

					console.log('w_height = ' + w_height);

					
					if ( rightblock.height() - window_top + el_top <= w_height )
					{
						var container = rightblock.parents('.container')||$('.container:first');
						var right_position = container.offset().left + container.width() - rightblock.width() + 15;
						//var top_fixed = rightblock_top - window_top;
						//var top_fixed = window_bottom - window_top - rightblock_top; 

						rightblock.css({position:'fixed', top: window_top, 'left': right_position, 'right':'auto'}) 
						console.log('блок в окне')
					} 

					//if ( el_bottom - window_top <= w_height )
					if ( rightblock_top - w_height >= rightblock.height() )
					{
						var top_absolute = el_bottom - el_top - rightblock.height(); 
						//var top_absolute = rightblock_top - window_top - el_top;
						
						rightblock.css({position:'absolute', top: top_absolute, 'right': 15, 'left':'auto'}) //добавлено
						console.log('блок ушел вверх')
					}

					if (  rightblock.height() - window_top > w_height )
					{
						rightblock.css({position:'absolute', top: 0, 'right': 15, 'left':'auto'}) //добавлено
						console.log('блок ушел с контентом')
					}

					//для высоты баннера меньше высоты окна

					if ( rightblock.height() < w_height && (  el_bottom - window_top > w_height ))
					{
						rightblock.css({position:'absolute', top: window_top, 'right': 15, 'left':'auto'}) //добавлено
						console.log('блок ушел с контентом_2')

					}


					
                }
            })
		}


		
				
			
    })
    $(window).scroll();
    
    
    
	    

});