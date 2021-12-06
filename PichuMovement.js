function getCurrentXCoordinates(e) {
    var e = e || window.event;
    return e.clientX;
}
var currentX = 0;
var currentY = 0;
var followCursor = (function() {
    var pichu = document.createElement('div');
    pichu.style.position = 'absolute';
    pichu.style.margin = '0';
    pichu.style.padding = '0px';
    pichu.style.height = '40vh'
    pichu.style.width = '30vh'
    pichu.style.backgroundImage = 'url(pichu/BlinkingIdlePichu.gif)';
    pichu.style.backgroundSize = "100%"
    pichu.style.backgroundRepeat = "no-repeat";

    return {
        init: function() {
            document.body.appendChild(pichu);
        },
        run: function(e) {
            var e = e || window.event;
            currentX = e.clientX;
            pichu.style.left = (e.clientX) + 'px';
            pichu.style.top = '72vh';
        }
    };
}());

window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
}