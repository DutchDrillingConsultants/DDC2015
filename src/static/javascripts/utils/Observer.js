Namespace.register('Observer');

Observer.subscribe = function(obj,type,fn) {

    if (!obj._listeners) {
            obj._listeners = [];
        }

        var test,i,l = obj._listeners;
        for (i = 0; i < l; i++) {
            test = obj._listeners[i];
            if (test.type === type && test.fn === fn) {
                return;
            }
        }

        obj._listeners.push({'type':type,'fn':fn,'capture':false});

};

Observer.remove = function(obj,type,fn) {

    if (!obj._listeners) {
            return;
        }

        var test;
        for (var i=obj._listeners.length-1; i>=0; i--) {
            test = obj._listeners[i];
            if (test.type === type && test.fn === fn) {
                obj._listeners.splice(i,1);
                return;
            }
        }

};

Observer.publish = function(obj,type,data) {

    Observer._dispatch(obj,Observer.create(type),data);

};

Observer.create = function(type) {

    var myEvent = null;

    if (document.createEvent) {
    	myEvent = document.createEvent('Events');
    	myEvent.initEvent(type,true,true);
    }
    else if (document.createEventObject) {
    	myEvent = document.createEventObject();
    	myEvent.type = type;
    }

    return myEvent;
};

Observer._dispatch = function(obj,event,data) {

    if (!obj._listeners) {
        obj._listeners = [];
    }

    var test,i,l = obj._listeners.length;

    for (i = 0; i < l; i++) {

        test = obj._listeners[i];

        if (test && test.type === event.type) {

            if (typeof test.fn === 'function') {
                test.fn(data);
            }
            else if (test.fn.handleEvent) {
                test.fn.handleEvent(event,data);
            }

        }
    }

};