
// HOW TO MOVE THE BOX ON THE SCREEN

// Starting coordinates of the box to be moved:

var x1 = 450;
var y1 = 150;
var sizeX = 402;
var sizeY = 580;
var headerWidth = 70;
var frameWidth = 2;
var headerColor =  "#DDDDDD";
var textColor =    "#FFFFFF";
var framesColor =  "#3D3D3D"; 
var xTextShift =     11;
var yHeaderShift =   29;
var yHeaderSpacer =  26;
var yTextShift =     28;
var yTextSpacer =    26;


window.onload=function(){
     
// I like to use "event streams" to solve problems like these. What is an "event stream"? It is a stream of events. So let's create our own "EventStream" constructor:     
     
function EventStream() {
    var listeners = this.listeners = [];

    return [this, function (event) {
        return listeners.map(function (listener) {
            return listener(event);
        });
    }];
}

// We won't be using the "EventStream" constructor directly. Instead we'll write a function which creates an event stream, subscribes it to a stream of events and returns the stream:

function getEventStream(event, target) {
    var pair = new EventStream;
    target.addEventListener(event, pair[1]);
    return pair[0];
}

// Now we can create event streams as follows:

// ??? var move = getEventStream("mousemove", window);

// ??? Now we have a stream of mousemove events stored in the variable move. So how do we use it? The beauty of event streams is that you can map over, filter, scan and merge them. This makes life much easier.

// First let's see the "map" method:

EventStream.prototype.map = function (f) {
    var pair = new EventStream;
    var dispatch = pair[1];

    this.listeners.push(function (x) {
        return dispatch(f(x));
    });

    return pair[0];
};

// The "map" method does two things:
//    1. It allows you to subscribe to an event.
//    2. It allows you to process an event stream, 
//       creating an entirely new event stream.

// Now let's look at the "filter" method:

EventStream.prototype.filter = function (f) {
    var pair = new EventStream;
    var dispatch = pair[1];

    this.listeners.push(function (x) {
        if (f(x)) return dispatch(x);
    });

    return pair[0];
};

// The "filter" method, as the name implies, filters the events in an event stream. It returns an entirely new event stream with the filtered events.

// Next up, the "scan" method:

EventStream.prototype.scan = function (a, f) {
    var pair = new EventStream;
    var dispatch = pair[1];
    dispatch(a);

    this.listeners.push(function (x) {
        return dispatch(a = f(a, x));
    });

    return pair[0];
};

// The scan method allows us to create "properties" which change from event to event, creating a new "property event stream". It's a very useful function which I'll demonstrate how to use below.

// Finally we have the merge method:

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

// The merge method takes two events streams and merges them into a single event stream. To distinguish which event stream originated which event we tag each event as either left or right.

// Now that we learned about event streams let's use them to create a draggable box on a canvas and see how they make life so simple.

// The first thing we do is set up the canvas:

var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var width = canvas.width;
var height = canvas.height;

var position = getPosition(canvas);

var left = position.left;
var top = position.top;

// The getPosition function is defined as follows:

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

// Next we create a constructor for a Box:

function Box(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Box.prototype.bind = function (context) {
    context.beginPath();
    context.rect(this.x, this.y, this.w, this.h);  // draws rectangle
    context.rect(this.x, this.y, this.w, headerWidth);      // draws rectangle for header
    // *** for unknown reason I can draw frames only here, not below with rectangles ???
    // context.font = "14px Arial";
    // context.fillStyle = "white";
    // context.fillText("October 17, 2018", this.x+this.w-109, this.y+this.h+14);
    // context.fillText("www.geekwire.com", this.x+1, this.y+this.h+14);
    // *** for unknown reason this code breaks the rectangles and font looks bad, pixelated ???
    return context;
};

// Then we create a box and draw it to the screen:

var box = new Box(x1, y1, sizeX, sizeY); 
// box.bind(context).fill();   // fills rectangle with black (default)

x1 = x1;
y1 = y1;
x2 = x1+sizeX;
y2 = y1+sizeY;
yHeader = y1+headerWidth;
var xT = x1+xTextShift;
var yH = y1+yHeaderShift;
var yT = y1+headerWidth+yTextShift;

box.bind(context).fillStyle = textColor;
box.bind(context).fillRect(x1, y1, sizeX, sizeY);

// Header grey rectangle
box.bind(context).fillStyle = headerColor;
box.bind(context).fillRect(x1, y1, sizeX, headerWidth);   

// Frames
box.bind(context).lineWidth = frameWidth;
box.bind(context).strokeStyle = framesColor;
box.bind(context).beginPath();
/*
box.bind(context).moveTo(x1, y1);
box.bind(context).lineTo(x1, y2);
box.bind(context).lineTo(x2, y2);
box.bind(context).lineTo(x2, y1);
box.bind(context).lineTo(x1, y1);
box.bind(context).moveTo(x1, yHeader);    // cannot draw ???
box.bind(context).lineTo(x2, yHeader);    // cannot draw ???
*/
box.bind(context).stroke();  

// Header text
box.bind(context).font = "20px Arial";
box.bind(context).fillStyle = "black";
box.bind(context).fillText("Boeing creates ‘Disruptive Computing", xT, yH);
box.bind(context).fillText("and Networks’ special unit", xT, yH+yHeaderSpacer);

box.bind(context).font = "20px Arial";
box.bind(context).fillStyle = "black";
box.bind(context).fillText("The new organization will be based in", xT, yT);
box.bind(context).fillText("Southern California and operate as part of", xT, yT+1*yTextSpacer);
box.bind(context).fillText("Boeing’s Engineering, Test & Technology", xT, yT+2*yTextSpacer);
box.bind(context).fillText("unit. Charles Toups is moving over from", xT, yT+3*yTextSpacer);
box.bind(context).fillText("his post as vice president and general", xT, yT+4*yTextSpacer);
box.bind(context).fillText("manager of Boeing Research & Technolo-", xT, yT+5*yTextSpacer);
box.bind(context).fillText("gy to lead DC&N as vice president and", xT, yT+6*yTextSpacer);
box.bind(context).fillText("general manager.", xT, yT+7*yTextSpacer);
box.bind(context).fillText("Boeing’s wants to stimulate innovations", xT, yT+8*yTextSpacer);
box.bind(context).fillText("in secure communications, AI and comp-", xT, yT+9*yTextSpacer);
box.bind(context).fillText("lex system optimization. AI has obvious", xT, yT+10*yTextSpacer);
box.bind(context).fillText("applications in autonomous flight, while", xT, yT+11*yTextSpacer);
box.bind(context).fillText("quantum computers could be tailor-made", xT, yT+12*yTextSpacer);
box.bind(context).fillText("for the network optimization challenges", xT, yT+13*yTextSpacer);
box.bind(context).fillText("for next-generation air traffic management", xT, yT+14*yTextSpacer);
box.bind(context).fillText("systems. DC&N will also focus on advan-", xT, yT+15*yTextSpacer);
box.bind(context).fillText("ced sensing as well as neuromorphic pro-", xT, yT+16*yTextSpacer);
box.bind(context).fillText("cessing, which aims to mimic the human", xT, yT+17*yTextSpacer);
box.bind(context).fillText("brain’s approach to information processing.", xT, yT+18*yTextSpacer);


box.bind(context).font = "14px Arial";
box.bind(context).fillStyle = "white";
box.bind(context).fillText("October 17, 2018", x2-109, y2+14);
box.bind(context).fillText("www.geekwire.com", x1+1, y2+14);







// Now we need to make it draggable. We start dragging by holding down the mouse button. So the first thing we do is create a mousedown event stream:

var down = getEventStream("mousedown", canvas);

// We want the coordinates of the mousedown events relative to the canvas. In addition we only want those mousedown events which occur on top the box. This can easily be handled using event streams as follows:

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
 
// Now you have a stream of mousedown events on top of your box.

// Next we get a stream of mouseup events because dragging stops once you pick up your finger from the mouse button:

var up = getEventStream("mouseup", window);
 
// We get mouseup events for the entire window because the user should be able to mouse the mouse outside the canvas and release it. 
 
// Next we merge the dragStart and up event streams to create a single dragStartStop event stream:

var dragStartStop = dragStart.merge(up).map(function (x) {
    return x.left;
});

// Events from the up event stream don't have any useful information. They only serve to mark that the user has stopped dragging. Hence we only care about events from the left event stream.

// Coming back, to actually drag the box we need mousemove events. So let's get a mousemove event stream:

var move = getEventStream("mousemove", canvas).map(function (event) {
    return {
        x: event.clientX - left,
        y: event.clientY - top
    };
});
// Like with the dragStart stream we only want the coordinates of mousemove events relative to the canvas.

// Now we can merge the dragStartStop and the move streams to create the final drag stream:

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

// Here we scan the events of the merged streams to create a "property event stream" of previous and current mouse positions when the user is dragging the box. We filter those mousemove events when the user is dragging the box and we get the difference in positions between the previous and current mousemove events.

//Now we can draw the box being dragged:

drag.map(function (position) {
    box.x += position.dx;
    box.y += position.dy;

    context.clearRect(0, 0, width, height);    // fills blue background
//  box.bind(context).fill();                  // cuts black in blue
           
    x1 = box.x;
    y1 = box.y;
    x2 = x1+sizeX;
    y2 = y1+sizeY;
    yHeader = y1+headerWidth;
    var xT = x1+xTextShift;
    var yH = y1+yHeaderShift;
    var yT = y1+headerWidth+yTextShift; 
             
    // White rectangle         
    box.bind(context).fillStyle = textColor;
    box.bind(context).fillRect(box.x, box.y, sizeX, sizeY);
    
    // Header grey rectangle
    box.bind(context).fillStyle = headerColor;
    box.bind(context).fillRect(box.x, box.y, sizeX, headerWidth);    
       
    // Frames
    box.bind(context).lineWidth = frameWidth;
    box.bind(context).strokeStyle = framesColor;
    box.bind(context).beginPath();
/*    
    box.bind(context).moveTo(x1, y1);
    box.bind(context).lineTo(x1, y2);
    box.bind(context).lineTo(x2, y2);
    box.bind(context).lineTo(x2, y1);
    box.bind(context).lineTo(x1, y1);
    box.bind(context).moveTo(x1+200, y1);    // cannot draw ???
    box.bind(context).lineTo(x2-200, y2);    // cannot draw ???
*/    
    box.bind(context).stroke();  
    
    // Header text
    box.bind(context).font = "20px Arial";
    box.bind(context).fillStyle = "black";
    box.bind(context).fillText("Boeing creates ‘Disruptive Computing", xT, yH);
    box.bind(context).fillText("and Networks’ special unit", xT, yH+yHeaderSpacer);
    
    box.bind(context).font = "20px Arial";
    box.bind(context).fillStyle = "black";
    box.bind(context).fillText("The new organization will be based in", xT, yT);
    box.bind(context).fillText("Southern California and operate as part of", xT, yT+1*yTextSpacer);
    box.bind(context).fillText("Boeing’s Engineering, Test & Technology", xT, yT+2*yTextSpacer);
    box.bind(context).fillText("unit. Charles Toups is moving over from", xT, yT+3*yTextSpacer);
    box.bind(context).fillText("his post as vice president and general", xT, yT+4*yTextSpacer);
    box.bind(context).fillText("manager of Boeing Research & Technolo-", xT, yT+5*yTextSpacer);
    box.bind(context).fillText("gy to lead DC&N as vice president and", xT, yT+6*yTextSpacer);
    box.bind(context).fillText("general manager.", xT, yT+7*yTextSpacer);
    box.bind(context).fillText("Boeing’s wants to stimulate innovations", xT, yT+8*yTextSpacer);
    box.bind(context).fillText("in secure communications, AI and comp-", xT, yT+9*yTextSpacer);
    box.bind(context).fillText("lex system optimization. AI has obvious", xT, yT+10*yTextSpacer);
    box.bind(context).fillText("applications in autonomous flight, while", xT, yT+11*yTextSpacer);
    box.bind(context).fillText("quantum computers could be tailor-made", xT, yT+12*yTextSpacer);
    box.bind(context).fillText("for the network optimization challenges", xT, yT+13*yTextSpacer);
    box.bind(context).fillText("for next-generation air traffic management", xT, yT+14*yTextSpacer);
    box.bind(context).fillText("systems. DC&N will also focus on advan-", xT, yT+15*yTextSpacer);
    box.bind(context).fillText("ced sensing as well as neuromorphic pro-", xT, yT+16*yTextSpacer);
    box.bind(context).fillText("cessing, which aims to mimic the human", xT, yT+17*yTextSpacer);
    box.bind(context).fillText("brain’s approach to information processing.", xT, yT+18*yTextSpacer);
    
    
    
    box.bind(context).font = "14px Arial";
    box.bind(context).fillStyle = "white";
    box.bind(context).fillText("October 17, 2018", x2-109, y2+14);
    box.bind(context).fillText("www.geekwire.com", x1+1, y2+14);
   
});

    
}

