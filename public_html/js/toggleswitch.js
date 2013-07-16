jQuery.fn.extend({
    toggleswitch: function() {
        this.addClass("switch");
        this.html('<div class="switch_rail"><div class="switch_lever"></div></div>');
        this.click(function() {
            var lefty = $('.switch_lever');
            lefty.animate({
                left: (parseInt(lefty.css('left'), 10) === 0) ? lefty.outerWidth() : 0
            },
            function() {
                $('.switch_rail').toggleClass('on');
            });
        });
    }
});