let cols, rows
let gridSize = 100
function setup() {
    createCanvas(500, 500);
    frameRate (60);
    cols = int(width/gridSize);
    rows = int(height/gridSize);
}
function draw() {
    rectMode(CENTER)
    background(190, 172, 223, 15);
    // for(let i = 0; i < width; i+40) {
    //     circle(i+ 20, 0 , 40)
    // }
    // noFill()
    for(let i = 0; i < cols; i++) {
        for(j = 0; j < cols; j++) {
            let x = i * gridSize + gridSize/2;
            let y = j * gridSize + gridSize/2;
            
            if (i % .5 === 0) {
                fill(150, 98, 158, 10)
                rect(x,y, gridSize/2, gridSize*1.8)
            }

            if (i % 2 === 0) {
                push()
                let upValue = map(sin(frameCount*0.1+i+j), -10, 5, -60, 15)
                translate(0,upValue)
                    // translate(width/2, height/2)
                    // translate(x,y)
                    // rotate(radians(10, 0))
                    // rotate(frameCount * 0.02) 

                    fill(255, 255, 240, 80)
                    rect(x,y, gridSize*2, gridSize/2.5)
                pop()
            } else {
                noStroke()
            }


            push()
                push()
                let d = dist(x, y, mouseX, mouseY);
                let size = map(d, 0, 400, gridSize/1.5, gridSize*0.5);
                let r = map(x, 0, width, 150, 100);
                let b = map(y, 0, height*2, 100, 240)

                    let upValue = map(cos(frameCount*0.05+i+j), 1, -1, 10, -10)
                    translate(0,upValue)

                    fill(r, 80, b, 180)
                    circle(x,y, size)
                    // arc(x,y, size,size, 0, PI + HALF_PI, PIE)
                pop()

                noFill()
                stroke(255, 255, 240, 80)
                strokeWeight(4)
                square(x,y, 100)
            pop()

        // push()
        //     strokeWeight(10)
        //     stroke(r,80,b)
        //     rotate(i/.5 * TWO_PI)
        //     translate (x,y)
        //      //dist from center//
        //     rotate(frameCount * 0.05) //animation speed//
        //     // rotate(radians(lines2SpinSlider.value(), 0)) //indiv angle of lines//
        // line(size,size , size,size)
        // pop()
        
        }
    }
}
