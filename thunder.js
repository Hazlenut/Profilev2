var thunderr = (function() {
    var ball = document.createElement("div");
    ball.style.height = "25px";
    ball.style.width = "25px";
    ball.style.borderRadius = "50%";
    ball.style.backgroundColor = "yellow";
    ball.style.position = "absolute";

    return {
        init: function() { 
            ball.style.left = getCurrentXCoordinates() + "px";
            ball.style.top = "85vh";
            document.body.appendChild(ball);
            console.log("here")
        },
        run: function() {
            ball.style.transform = "scale(20)";
        }
    };

}());
function thunder() {
    thunderr.init();
}