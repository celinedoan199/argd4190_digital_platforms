function setup() {
    createCanvas(800, 500);
    frameRate (60)
}

function draw() {
    background(220)
    push()
        stroke("black")
        strokeWeight(4)
        line(width/2,25 , width/2,height-25)
    pop()

    text("2026", width/2 -50, 30)
    text("1970", width/2 +20, height-25)

    push()
    pop()

    // push()
    // pop()
}