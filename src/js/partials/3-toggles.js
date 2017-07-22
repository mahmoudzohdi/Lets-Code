$(document).on('click', '.toggle-active-parent', function(){
    $(this).parent().toggleClass('active');
});


$(document).on('click', function(event){
    var $target = $(event.target);

    $('.click-outside').each(function(index){
        var $this = $(this);
        if($this.hasClass('active') && $target.closest('.click-outside').length == 0 ){
            $this.removeClass('active');
        }
    });
    
});