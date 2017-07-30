$(document).on('click', '.toggle-active-parent', function(){
    var $this = $(this);
    $this.parent().toggleClass('active');

    if($this.parent('.accordion').length){
        $this.parent().siblings().removeClass('active').find('.accordion-body').slideUp(300);
        $this.parent().find('.accordion-body').slideToggle(300);
    }
});


$(document).on('click', function(event){
    var $target = $(event.target);

    $('.click-outside').each(function(index){
        var $this = $(this);


        var hasClass = $this.hasClass('remove-from-parent') ? $this.parent().hasClass('active') : $this.hasClass('active');
        
        if(hasClass && $target.closest('.click-outside').length == 0 && !$target.hasClass('click-outside-btn') ){

            $this.hasClass('remove-from-parent') ? $this.parent().removeClass('active').parents('body').removeClass('sidebar-oppend') : $this.removeClass('active');
        
        }

    });
    
});