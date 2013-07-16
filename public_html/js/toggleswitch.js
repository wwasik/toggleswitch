jQuery.fn.extend({
    toggleswitch: function(onCallback, offCallback) {
        this.addClass("switch");
        this.html('<div class="switch_rail"><div class="switch_lever"></div></div>');
        this.click(function() {
            var leverClass = 'switch_lever';
            var railClass = 'switch_rail';
            var onClass = 'on';
            
            var toggleswitch = $(this);
            var lefty = toggleswitch.find('.'+leverClass);
            lefty.animate({
                left: (parseInt(lefty.css('left'), 10) === 0) ? lefty.outerWidth() : 0
            },
            function() {
                var rail = toggleswitch.find('.'+railClass);
                if (rail.hasClass(onClass)) {
                    rail.removeClass(onClass);
                    offCallback === undefined ? null : offCallback();
                } else {
                    rail.addClass(onClass);
                    onCallback === undefined ? null : onCallback();
                }
            });
        });
    }
});