var currentX = 0;
var currentY = 0;
var followCursor = (function() {
    var pichu = document.createElement('div');
    pichu.style.position = 'absolute';
    pichu.style.margin = '0';
    pichu.style.padding = '5px';
    pichu.style.height = '19vh'
    pichu.style.width = '14vh'
    pichu.style.backgroundImage = 'url(pichugif.gif)';

    return {
        init: function() {
            document.body.appendChild(pichu);
        },
        run: function(e) {
            var e = e || window.event;
            currentX = e.clientX;
            pichu.style.left = (e.clientX) + 'px';
            pichu.style.top = '80vh';
        }
    };
}());

window.onload = function() {
    followCursor.init();
    document.body.onmousemove = followCursor.run;
}