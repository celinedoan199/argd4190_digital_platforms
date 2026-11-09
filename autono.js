
// function setup() {
//     createCanvas(500, 500);
//     frameRate(60)
// }

// function draw() {
//     background(220)
// }

let bubbles = []
let pulse = 100

function setup() {
    createCanvas(windowWidth, windowHeight)
    for (let i = 0; i < 14; i++) {
        bubbles.push(makeBubble(random(width), random(height)))
    }
}

function makeBubble(x, y) {
    return {
        x: x,
        y: y,
        size: random(40, 80),
        seed: random(1000),    // its own place in the noise landscape
        t: 0,                  // its own noise "time"
        life: random(900, 1800),
  }
}

function draw() {
    background(100, 60, 80, 5)

    if (frameCount % 25 === 0 && bubbles.length < 100) {
        bubbles.push(makeBubble(random(width), height))*2
    }

    for (let i = bubbles.length - 1; i >= 0; i--) {
        let c = bubbles[i]
        let d = dist(c.x, c.y, mouseX, mouseY)
        let scared = d < 170
        //MOVEMENT//
        c.x += map(noise(c.seed, c.t), 0, 1, -3, 2)
        c.y += map(noise(c.seed + width, c.t), 0, 1, -3, -5)
        //MOVE AWAY FROM MOUSE//
        if (scared) {
        let away = atan2(c.y - mouseY, c.x - mouseX)
        c.x += cos(away) * 5
        c.y += sin(away) * 5
        }
        //LIMIT X MOVEMENT//
        c.x = constrain(c.x, 0, width)

        c.life -= 1
        drawBubble(c)
        if (c.life <= 0) {
        bubbles.splice(i, 1)
        }
    }
}   
function drawBubble(c) {
    let fade = c.life < 180
    let alphaValue = 255
    if (fade) {
        alphaValue = map(c.life/2, 0, 180, 0, 255)
    }

    push()
        
        
    translate(c.x, c.y)
        //SHINES//
        // noStroke()
        // fill(255, 255, 255,25)
        // ellipse(40,-40,20,50)
        // circle(40,20,20)

    //COLOR//
    let r = map(c.x, 0, width, 80, 200);
    let b = map(0, c.y, height*2, 150, 300)
    fill(r, 120, b, 30)
    stroke(r, 50, b, alphaValue)

    strokeWeight(2)

    //PULSING//
    let noiseSize = map(noise(pulse), 0, 2, 15, width/1.5);
        pulse += 0.0001;
    circle(0,0,noiseSize)
    pop()
}

//CLICK ADDS BUBBLE//
function mousePressed() {
  bubbles.push(makeBubble(mouseX, mouseY))
}