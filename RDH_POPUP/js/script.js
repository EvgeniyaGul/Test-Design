$(window).load(function() {
	
	
	
	
    $(window).scroll(function(){
		

		/*         правые баннеры            */
		
		if ($(window).width() > 960)
		{
            $('.main-posts').each(function(){
                var rightblock = $(this).find('.right-block .sticked');
                var rightblock_top = rightblock.offset().top;
                var rightblock_bottom = rightblock_top+rightblock.height();
                
				if (rightblock.length)
				{
					/*var top_position = 25;
					я убрала*/
					var bottom_position = 0;//добавлено
					var window_top = $(window).scrollTop() /*+ top_position;*/
					var window_bottom = $(window).scrollTop()+$(window).height();
					
					var el_top = $(this).offset().top;
					var el_bottom = $(this).offset().top+$(this).height();
					var el_Tobottom = $(this).offset().bottom;//добавлено
					var w_height = $(window).height() //добавлено
					var scrolled = $(window).scrollTop()//добавлено
					

					//console.log('w_height = '+w_height); //добавлено
					//console.log('block height = '+ rightblock.height()); //добавлено
					//console.log('scrolled = '+ scrolled); //добавлено

                    //console.log('el_top = '+el_top+'; el_bottom='+el_bottom);
					//console.log('rightblock = '+rightblock_top + '; rightblock_bottom = '+rightblock_bottom);
                    //console.log('window_top = '+window_top+'; window_bottom='+window_bottom)
					
					/*if (el_top + top_position > window_top)
					{
						rightblock.css({position:'absolute', 'top': 0, 'right':'15px', 'left':'auto'})
						console.log('блок ушел вниз');
					}

					//if (el_bottom - rightblock.height() <= window_bottom)
                    /*if (el_bottom - rightblock.height() < window_top)
					{
						rightblock.css({position:'absolute', 'top': $(this).height()-rightblock.height(), 'right':'15px', 'left':'auto'})
						console.log('блок ушел вверх');
					}*/
					//if ((el_top <= window_top) && (el_bottom + rightblock.height() > window_bottom || el_bottom > rightblock_bottom)) // || el_bottom - rightblock.height() <= window_bottom
                    //if (el_top <= window_top && el_bottom - rightblock.height() >= window_top) //я убрала
					//if (rightblock.height() - window_top <= w_height)//я убрала свое

					if ( rightblock.height() - window_top <= w_height )
					{
						//var container = rightblock.parents('.container')||$('.container:first'); //я убрала
						//var right_position = container.offset().left + container.width() - rightblock.width()+15;//я убрала
						
						//rightblock.css({position:'fixed', top: top_position, 'left':right_position, 'right':'auto'})
						rightblock.css({position:'fixed', bottom: bottom_position, 'right':'auto'}) //добавлено
						
						console.log('блок в окне')
					}
//добавлено
					/*if (el_bottom - rightblock.height() < window_bottom)
					{
						var container = rightblock.parents('.container')||$('.container:first');
						var right_position = container.offset().left + container.width() - rightblock.width()+15;
						
						//rightblock.css({position:'fixed', top: top_position, 'left':right_position, 'right':'auto'})
						rightblock.css({position:'absolute', 'top': w_height-window_bottom, 'right':'15px', 'left':'auto'}) 
						
						console.log('блок ушел наверх')
					}*/
					/*if ((rightblock.css({position:'fixed'})) && (el_bottom - window_top >= w_height))
					{
						rightblock.css({position:'absolute', 'top': 0, 'right':'15px', 'left':'auto'})
						console.log('блок ушел вниз');
					}*/

                }
            })
		}

	})	
	$(window).scroll();




});