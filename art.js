function setup() {
    createCanvas(500, 500);
    frameRate (30)
    // noLoop() 
}

function draw() {
    // background(random(255), random(255), random(255));
    background("turquoise")
    fill ("white")
    textSize(32)
    textStyle(BOLD)
    textAlign(CENTER)
    stroke("black")
    strokeWeight(3)
    text ("Click & Hold for Fish", 300, 70)

    noStroke()
    // right ear //
    fill ("gray")
    triangle (350, 250, 350, 100, 200, 250)
        fill ("pink")
        triangle (300, 180, 330, 150, 330, 190)
    // left ear //
    fill ("#636363")
    triangle (250, 250, 250, 100, 150, 250)

    // head //
    fill ("gray")
    ellipse (250, 250, 200, 150)
    rect (200, 250, 150, 300)
    triangle (300, 200, 300, 500, 400, 500)
    // collar //
    fill ("maroon")
    rect (200, 320, 150, 25)

    // nose //
    fill ("pink")  
    triangle (165, 270, 177, 280, 185, 270)
    // eye //
    fill ("black")
    ellipse (250, 250, 30, 40)

    noStroke()
    fill ("yellow")
    circle (230, 360, 30)

    strokeWeight(2); 
    stroke('black');
    line (178, 285, 185, 295)
    line (178, 285, 175, 295)

    
    if (mouseIsPressed === true) {
        fill ("black")
            ellipse (250, 250, 30 + random(-5, 5), 40 + random(-5, 5))
        fill ("white")
        circle (250, 240 + random(-1, 2), 20)
            circle (250, 265 + random(-1, 2), 10)
        
        // blush //
        noStroke()
        fill ("pink")
        ellipse (250, 285, 30, 15)
        // tail //
        fill ("gray")
        rect (425, 300, 45, 250, 50)

        // Fishing line //   
        push()
        translate(mouseX, mouseY)
        ///animation?
        // let eyeAngle = map(sin(frameCount*0.1), -1, 1, radians(-60), radians((60)))
        // push()
        //     translate(-gridSize*0.1, -gridSize*0.1)
        //     rotate(eyeAngle)
        //     rect(0,0, gridSize*0.05, gridSize*0.2) // leftE
        // pop()
            strokeWeight(3);     
            stroke('brown');
            line(0, -1000, 0, 150)
            // Fish //
            noStroke()
            fill ("orange");
            ellipse(0, 200, 70, 150);
            triangle (-35, 320, 0, 250, 35, 320);
            // Fish Details //
            fill ("black");
            circle (0, 150, 10);
            strokeWeight(2);
            stroke('black');
            line(-25, 170, 25, 170)
        pop()
        // text //
        stroke("black")
        strokeWeight(3)
        fill ("white")
        text ("He\n Hungers", 85, 390)
    } 
    // else if (mousePressed === false) {}

    // // hand following cursor //
    // stroke(2)
    // fill("#FFD3AC")
    // // angleMode(DEGREES)
    // // rotate(-45)
    // ellipse(mouseX, mouseY, 50, 60)

    // console.log(mouseX, mouseY)

}