var mouseEvent = "";
var sx, sy;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", my_mousedown);
    console.log(screen.width)
    if (screen.width < 997) {
        console.log("canvas is this")
        canvas.width=screen.width/2
        canvas.height=screen.height/2
        document.body.style.overflow="hidden"
    }
    function my_mousedown(e)
    {
        sx=e.touches[0].clientX-canvas.offsetLeft;
        sy=e.touches[0].clientY-canvas.offsetTop;
        //Addictonal Activity start
        //Addictonal Activity ends

        mouseEvent = "touchstart";
    }
    canvas.addEventListener("touchmove", my_mousemove);
    function my_mousemove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;

        if (mouseEvent == "touchstart") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + sx + "y = " + sy);
        ctx.moveTo(sx, sy);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        }

        sx = current_position_of_mouse_x; 
        sy = current_position_of_mouse_y;
    }

