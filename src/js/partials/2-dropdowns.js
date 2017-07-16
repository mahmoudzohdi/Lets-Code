var dropdown = $('.dropdown-select');

function dropdownFun(){
    dropdown.each(function(){
        var $this = $(this);

        var defaultText = $this.find('.list-item:first-child').addClass('active').find('a').text();
        $this.find('.selected-item .item-text').text(defaultText);
    });
    dropdown.on('click', '.list-item', function(){
        var $this = $(this);
        $this.addClass('active').siblings().removeClass('active')
            .parents('.dropdown-select').find('.selected-item .item-text')
            .text($this.find('a').text());
    });
}

if(dropdown.length){
    dropdownFun();
}