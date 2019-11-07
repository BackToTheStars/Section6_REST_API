window.onload=function(){
      
      
function EventStream() {
    var listeners = this.listeners = [];

    return [this, function (event) {
        return listeners.map(function (listener) {
            return listener(event);
        });
    }];
}

function getEventStream(event, target) {
    var pair = new EventStream;
    target.addEventListener(event, pair[1]);
    return pair[0];
}

EventStream.prototype.map = function (f) {
    var pair = new EventStream;
    var dispatch = pair[1];

    this.listeners.push(function (x) {
        return dispatch(f(x));
    });

    return pair[0];
};

EventStream.prototype.filter = function (f) {
    var pair = new EventStream;
    var dispatch = pair[1];

    this.listeners.push(function (x) {
        if (f(x)) return dispatch(x);
    });

    return pair[0];
};

EventStream.prototype.scan = function (a, f) {
    var pair = new EventStream;
    var dispatch = pair[1];
    dispatch(a);

    this.listeners.push(function (x) {
        return dispatch(a = f(a, x));
    });

    return pair[0];
};

EventStream.prototype.merge = function (stream) {
    var pair = new EventStream;
    var dispatch = pair[1];

    this.listeners.push(function (x) {
        return dispatch({left: x});
    });

    stream.listeners.push(function (x) {
        return dispatch({right: x});
    });

    return pair[0];
};

var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

var width = canvas.width;
var height = canvas.height;

var position = getPosition(canvas);

var left = position.left;
var top = position.top;

function getPosition(element) {
    if (element) {
        var position = getPosition(element.offsetParent);

        return {
            left: position.left + element.offsetLeft,
            top:  position.top  + element.offsetTop
        };
    } else {
        return {
            left: 0,
            top:  0
        };
    }
}

function Box(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Box.prototype.bind = function (context) {
    context.beginPath();
    context.rect(this.x, this.y, this.w, this.h);
    return context;
};

var box = new Box(100, 100, 150, 150);
box.bind(context).fill();

var down = getEventStream("mousedown", canvas);

var dragStart = down

.map(function (event) {
    return {
        x: event.clientX - left,
        y: event.clientY - top
    };
})

.filter(function (cursor) {
    return box.bind(context).isPointInPath(cursor.x, cursor.y);
});

var up = getEventStream("mouseup", window);

var dragStartStop = dragStart.merge(up).map(function (x) {
    return x.left;
});

var move = getEventStream("mousemove", canvas).map(function (event) {
    return {
        x: event.clientX - left,
        y: event.clientY - top
    };
});

var drag = dragStartStop.merge(move)

.scan(null, function (prev, event) {
    if (event.hasOwnProperty("left")) {
        var left = event.left;
        return left && [left, left];
    } else if (prev) return [prev[1], event.right];
})

.filter(function (x) {
    return x;
})

.map(function (position) {
    var prev = position[0];
    var current = position[1];

    return {
        dx: current.x - prev.x,
        dy: current.y - prev.y
    };
});

drag.map(function (position) {
    box.x += position.dx;
    box.y += position.dy;

    context.clearRect(0, 0, width, height);
    box.bind(context).fill();
});

    
}

