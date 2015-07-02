Namespace.register('pggm.helpers').ResponsiveWindow = (function() {

    'use strict';

    /**
     * Constructs BehaviourController singleton objects.
     * @constructor BehaviourController
     */

    var ResponsiveWindow = function() {

        // Not in 'redactie' mode
        if (!document.documentElement.classList.contains('redactie')) {

            this._timer = null;

            // Listen to window resize event
            window.addEventListener('resize', this, false);


        }

    };

    var p = ResponsiveWindow.prototype;

    /**
     * Native handleEvent
     * @method handleEvent
     * @param {Event} e
     */

    p.handleEvent = function(e) {

        switch(e.type) {

            case 'resize':
                this._onResize(e);
                break;
            default:
                break;

        }

    };

    /**
     * On resize event handler, delays events.
     * @method _onResize
     */

    p._onResize = function() {

        if (this._timer) {

            clearTimeout(this._timer);

        } else {

            var body = document.body,
                html = document.documentElement;

            this._height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
            this._width = Math.max( body.scrollWidth, body.offsetwidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

        }

        var self = this;

        this._timer = setTimeout(function()
        {
            if (self._isActualResize()) {
                self._onStable();
            }
        },200);
    };

    /**
     * Dispatches resize event.
     * @method _onStable
     */

    p._onStable = function() {

        this._timer = null;
        Observer.publish(this,'resize');

    };

    /**
     * Check if the window is actually resized
     * @method _isActualResize
     */

    p._isActualResize = function() {

        var body = document.body,
            html = document.documentElement;

        var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var width = Math.max( body.scrollWidth, body.offsetwidth, html.clientWidth, html.scrollWidth, html.offsetWidth);

        return (this._height !== height || this._width !== width);

    };

    /**
     * Singleton pattern
     * @method getInstance
     */

    var _instance;
    return {
        getInstance: function () {
            if (!_instance) {
                _instance = new ResponsiveWindow();
            }
            return _instance;
        }
    };

}());