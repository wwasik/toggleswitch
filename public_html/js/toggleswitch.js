jQuery.fn.extend({
    toggleswitch: function(onCallback, offCallback) {
        this.addClass("switch");
        this.html('<div class="switch_rail"><div class="switch_lever"></div></div>');
        this.click(function() {
            var lefty = $('.switch_lever');
            lefty.animate({
                left: (parseInt(lefty.css('left'), 10) === 0) ? lefty.outerWidth() : 0
            },
            function() {
                var rail = $('.switch_rail');
                if (rail.hasClass('on')) {
                    rail.removeClass('on');
                    offCallback === undefined ? null : offCallback();
                } else {
                    rail.addClass('on');
                    onCallback === undefined ? null : onCallback();
                }
            });
        });
    }
});