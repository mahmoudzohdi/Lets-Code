(function($){

    $.fn.slider = function(options){

        options = $.extend({
            slidesToShow: 1,
            autoplay: true,
            watingTime: 3000,
            arrows: true,
            dots: false
        }, options);


        var $this = $(this);

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
        
        function resizing(){

            sliderObj.sliderItem.width( parseInt( $this.width() / options.slidesToShow ) );
            sliderObj.sliderBanner.width(sliderObj.itemsLength * sliderObj.sliderItem.outerWidth());
            sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.width()) +'px)');
            console.log('resizing');
        }resizing();


        sliderObj.nextBtn.click(function(){
            if(!sliderObj.clicked){
                clearTimeout(timeout);
                sliderObj.clicked = true;
                sliderObj.move = sliderObj.move == (sliderObj.itemsLength - 1) ? sliderObj.itemsLength - 1 : sliderObj.move + 1;
                sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.width()) +'px)');
                setTimeout(function(){
                    sliderObj.clicked = false;
                    if(options.autoplay){
                        autoplay();
                    }
                }, 505);
            }
        });

        sliderObj.prevBtn.click(function(){
            if(!sliderObj.clicked){
                clearTimeout(timeout);
                sliderObj.clicked = true;
                sliderObj.move = sliderObj.move <= 0? 0 : sliderObj.move - 1;
                sliderObj.sliderBanner.css('transform', 'translateX('+ -(sliderObj.move*sliderObj.sliderItem.width()) +'px)');
                setTimeout(function(){
                    sliderObj.clicked = false;
                    if(options.autoplay){
                        autoplay();
                    }
                }, 505);
            }
        });

        // autoplay
        var timeout;
        function autoplay(){
            timeout = setTimeout(function(){
                sliderObj.nextBtn.trigger('click');
                autoplay();
            }, options.watingTime);
        }
        if(options.autoplay){
            autoplay();
        }
        

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
                    sliderObj.prevBtn.trigger('click');
                }else if(e.pageX - sliderObj.pageX < -100){
                    sliderObj.nextBtn.trigger('click');
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


        


        var windowResizing;
        $(window).on('resize', function(){
            clearTimeout(windowResizing);
            windowResizing = setTimeout(resizing, 200);
        });


        return this;
    }

}( jQuery ));