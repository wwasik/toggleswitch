function ToggleSwitch(container, onCallback, offCallback) {
    var _SWITCH_CLASS = 'switch';
    var _LEVER_CLASS = 'switch_lever';
    var _RAIL_CLASS = 'switch_rail';
    var _ON_CLASS = 'on';
    var _toggleSwitch = $(container);

    _toggleSwitch.addClass("switch");
    _toggleSwitch.html('<div class="switch_rail"><div class="switch_lever"></div></div>');
    _toggleSwitch.click(function() {
        var lefty = _toggleSwitch.find('.' + _LEVER_CLASS);
        lefty.animate({
            left: (parseInt(lefty.css('left'), 10) === 0) ? lefty.outerWidth() : 0
        },
        function() {
            var rail = _toggleSwitch.find('.' + _RAIL_CLASS);
            if (rail.hasClass(_ON_CLASS)) {
                rail.removeClass(_ON_CLASS);
                offCallback === undefined ? null : offCallback();
            } else {
                rail.addClass(_ON_CLASS);
                onCallback === undefined ? null : onCallback();
            }
        });
    });

    this.reset = function() {
        if ($(_toggleSwitch).hasClass(_SWITCH_CLASS)) {
            var rail = _toggleSwitch.find('.' + _RAIL_CLASS);
            rail.removeClass(_ON_CLASS);
            var lefty = _toggleSwitch.find('.' + _LEVER_CLASS);
            lefty.css('left', 0);
        }
    };
}

jQuery.fn.extend({
    toggleswitch: function(onCallback, offCallback) {
        return new ToggleSwitch($(this), onCallback, offCallback);
    }
});