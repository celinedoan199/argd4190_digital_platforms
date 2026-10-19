function setup() {
    createCanvas(500, 500);
    frameRate (30)
}
function draw() {
    background('turquoise');
    fill ("white")
    textSize(20)
    textStyle(BOLD)
    textAlign(CENTER)
    text ("Press for Fish", 300, 70)

    noStroke()
    fill ("gray")
    
    ellipse (250, 250, 200, 150)
    rect (200, 250, 150, 300)

    fill ("maroon")
    rect (200, 320, 150, 25)

    // right ear //
    fill ("gray")
    triangle (350, 250, 350, 100, 200, 250)
        fill ("pink")
        triangle (300, 180, 330, 150, 330, 190)

    // left ear //
    fill ("gray")
    triangle (250, 250, 250, 100, 150, 250)

    fill ("pink")
    triangle (160, 260, 177, 280, 190, 260)

    fill ("black")
    ellipse (250, 250, 30, 40)

    if (mouseIsPressed === true) {
        fill ("black")
            ellipse (250 + random(-1, 2), 250, 30, 40)
        fill ("white")
        circle (250, 240 + random(-1, 2), 20)
            circle (250, 265 + random(-1, 2), 10)
        fill ("orange")
        ellipse(80, 200, 70, 150)
        triangle (50, 330, 80, 260, 110, 330)
    } 

    fill ("yellow")
    circle (230, 360, 30)
    // console.log(mouseX, mouseY)
}