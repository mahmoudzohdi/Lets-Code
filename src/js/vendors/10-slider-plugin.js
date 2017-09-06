(function($){

    $.fn.slider = function(options){
        return this.each(function(){

            var sliderOptions = $.extend({
                slidesToShow: 1,
                autoplay: true,
                watingTime: 3000,
                arrows: true,
                dots: false,
								responsive: false,
								mouseDrag: true
						}, options);
						
            var $this = $(this);
            $this.addClass('slider-plugin');
            var sliderObj = {
                sliderBanner: $this.find('.slider-banner'),
                sliderItem: $this.find('.slider-item'),
                itemsLength: $this.find('.slider-item').length,
                nextBtn: $this.find('.next'),
                prevBtn: $this.find('.prev'),
                move: 0,
                clicked: false,
                mousedown: false,
                pageX: 0
            }

            var reponsiveScreenFound = false;
            function reponsiveFn(){
                if(sliderOptions.responsive){
                    $.each(sliderOptions.responsive, function (index, item){
                        if($(window).width() <= item.breakpoint){
                            $.extend(sliderOptions, item.settings);
                            reponsiveScreenFound = true;
                        }else if(!reponsiveScreenFound){
                            $.extend(sliderOptions, options);
                        }
                    });
                    reponsiveScreenFound = false;
                }
            }reponsiveFn();
            
            function resizing(){

                reponsiveFn();

                sliderObj.sliderItem.outerWidth( parseInt( $this.outerWidth() / sliderOptions.slidesToShow ) );
                sliderObj.sliderBanner.outerWidth(sliderObj.itemsLength * sliderObj.sliderItem.outerWidth());
                sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.outerWidth()) +'px)');
            
            }resizing();

            function nextFn(){
                if(!sliderObj.clicked){
                    sliderObj.clicked = true;
                    var lastSlide = ((sliderObj.itemsLength - 1) - (sliderOptions.slidesToShow - 1));
                    sliderObj.move = sliderObj.move ==  lastSlide? lastSlide : sliderObj.move + 1;
                    sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.outerWidth()) +'px)');
										activeDots(sliderObj.move);
                    setTimeout(function(){
                        sliderObj.clicked = false;
                        if(sliderOptions.autoplay){
                            autoplay();
                        }
                    }, 505);

                    if(sliderObj.move == lastSlide){
                        sliderObj.nextBtn.addClass('disabled');
                    }else{
                        $this.find('.slider-controllers .icon').removeClass('disabled');
                    }
                }
            }
                
            function prevFn(){
                if(!sliderObj.clicked){
                    sliderObj.clicked = true;
                    sliderObj.move = sliderObj.move <= 0? 0 : sliderObj.move - 1;
                    sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.outerWidth()) +'px)');
										activeDots(sliderObj.move);
                    setTimeout(function(){
                        sliderObj.clicked = false;
                        if(sliderOptions.autoplay){
                            autoplay();
                        }
                    }, 505);

                    if(sliderObj.move <= 0){
                        sliderObj.prevBtn.addClass('disabled');
                    }else{
                        $this.find('.slider-controllers .icon').removeClass('disabled');
                    }
                }
            }

            sliderObj.nextBtn.click(nextFn);

            sliderObj.prevBtn.click(prevFn);

            // autoplay
            var timeout;
            function autoplay(){
                clearTimeout(timeout);
                timeout = setTimeout(function(){
                    nextFn();
                    autoplay(); // should be removed
                }, sliderOptions.watingTime);
            }
            if(sliderOptions.autoplay){
                autoplay();
            }
            
						function mouseDrag(){

							$this.on('mousedown', function(e){
									e.preventDefault();
									sliderObj.mousedown = true;
									sliderObj.pageX = e.pageX;
									clearTimeout(timeout);
	
							});
							$(document).on('mouseup', function(e){
									e.preventDefault();
									if(sliderObj.mousedown){
											sliderObj.mousedown = false;
											if(e.pageX - sliderObj.pageX > 100){
													prevFn();
											}else if(e.pageX - sliderObj.pageX < -100){
													nextFn();
											}else{
													autoplay();
											}
											sliderObj.sliderBanner.css('margin-left','0px');
									}
							});
							$(document).on('mousemove', function(e){
									e.preventDefault();
									if(sliderObj.mousedown){
											sliderObj.sliderBanner.css('margin-left', (e.pageX - sliderObj.pageX) +'px');
									}
							});
						}
						if(sliderOptions.mouseDrag){
							mouseDrag();
						}

						function activeDots(index){
							$this.find('.slider-dots .dot').removeClass('active').eq(index).addClass('active');
						}
						
						function drawDots(){
							
							var slidesNum = sliderObj.itemsLength / sliderOptions.slidesToShow;
							liArray = [];
							for(var i = 1; i <= slidesNum; i++){
								liArray.push('<li class="dot '+(i == 1? "active": "")+'"></li>');	
							}
							$this.append('<ul class="slider-dots">'+liArray.join('')+'</ul>');
							
							$this.on('click', '.slider-dots .dot', function(){
								sliderObj.move = $(this).index();
								activeDots(sliderObj.move);

								sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.outerWidth()) +'px)');
		
								if(sliderOptions.autoplay){
									autoplay();
								}
							})
							
						}
						if(sliderOptions.dots){
							drawDots();
						}


            


            var windowResizing;
            $(window).on('resize', function(){
                clearTimeout(windowResizing);
                windowResizing = setTimeout(resizing, 200);
            });


        });
    }

}( jQuery ));