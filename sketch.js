function setup() {
    createCanvas(1000, 400);
    frameRate (60)
}

function draw() {
    background('#c19cd9');
    noStroke ()
    // fill ("blue")
    if (mouseIsPressed === true) {
        stroke (random(255), random(255), random(255))
        noFill
    } else {
        fill ("blue")
    }
    circle(mouseX, mouseY, 100);
    // circle(mouseX, mouseY, random(255));

    fill ("black")
    text ("hey there guys", 200, 200)

    stroke ("red")
    strokeWeight(4);

    fill ("orange")
    rect (300, 200, 100, 500, 50)

    frameRate (2)
    // fill (random(255), random(255), random(255))
    // stroke (random(255), random(255), random(255))
    square (-1, 300, 150)
    // console.log (mouseX, mouseY)

    frameRate (30)
    stroke ("purple")
    fill ("pink")
    square (800, 350, 100)

    fill ("brown")
    rect (250, 350, 300, 100)
// 3d Box (& add WEBGL to createCanvas) //
    // orbitControl();
    // box(100, 100, 50, 5, 5);
}

function mousePressed() {
    background("#fffff0")
}