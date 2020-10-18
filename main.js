var mouseEvent = "";

var last_position_of_x, last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = " violet";
width = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown() {

    mouseEvent = "mouseDown";


}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup() {

    mouseEvent = "mouseUp";


}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave() {

    mouseEvent = "mouseLeave";


}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {

    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y = e.clientY-canvas.offsetTop;

    if (mouseEvent == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth= width;


console.log("last position: x: "+ last_position_of_x + " y: " +last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("current position: x: "+ current_position_of_x + " y: " +current_position_of_y);
        ctx.arc(current_position_of_x,current_position_of_y,40,0,360);
        ctx.stroke();


    }

     last_position_of_x = current_position_of_x;
     last_position_of_y = current_position_of_y;




}