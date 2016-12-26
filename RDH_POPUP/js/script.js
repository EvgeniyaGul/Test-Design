$(window).load(function() {
	
	
	
	
    $(window).scroll(function(){
		

		/*         правые баннеры            */
		
		if ($(window).width() > 960)
		{
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

	})	
	$(window).scroll();




});