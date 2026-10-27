let cols, rows
let gridSize = 50
function setup() {
    createCanvas(500, 500);
    frameRate (60);
    cols = int(width/gridSize);
    rows = int(height/gridSize);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function draw() {
    background('rgba(255, 209, 220, 20)');
    // for(let i = 0; i < width; i+40) {
    //     circle(i+ 20, 0 , 40)
    // }
    // noFill()
    for(let i = 0; i < cols; i++) {
        for(j = 0; j < cols; j++) {
            let x = i * gridSize + gridSize/2;
            let y = j * gridSize + gridSize/2;

      let upValue = map(sin(frameCount*0.1+i+j), -1, 1, -10, 10)
      translate(0,upValue)

            if (i % 2 === 0) {
                noStroke()
                fill("rgba(255, 255, 240, 20)")
                rect(x,y, gridSize)
                noStroke()
            } else {
                noStroke()
                // fill("teal")
                // circle(x,y,gridSize*0.5)
                // noFill()
                // strokeWeight(3)
            }
            // if (j % 1 === 0) {
            //     noStroke()
            //     fill("#fffff0")
            //     rect(x,y, gridSize)
            //     fill("#c19cd9")
            // } else {
            //     noStroke()
            //     stroke("#c19cd9")
            //map function////
            //distance btwn mouse & shape
            let d = dist(x, y, mouseX, mouseY);
            let size = map(d, 0, 500, gridSize, gridSize*0.1);
            let r = map(x, 0, width, 20, 250);
            let b = map(y, 0, height, 0, 250)
            
            // circle(x, y, gridSize * 0.8);
            // stroke("yellow")
            // noFill()

            rectMode(CENTER)
            fill(r, 150, b)
            rect(x, y, size/2, size/2, 5);
            // rotate(j/num * 2)
            // rotate(-radians(100, 0))
            // rect(x, y, size);
            // rect(x, y, gridSize*10);
            // triangle(x*10, y*10, gridSize);
            
        }
    }
}
// circle(i * s + s/2, 0, s * 0.5) <- one row, s is gridSize

// let gridSize = 50
// let cols, rows
// function setup() {
//   createCanvas(400, 400);
//   cols = int(width/gridSize)
//   rows = int(height/gridSize)
//   noLoop() 
// }

// function draw() {
//   background("purple");
//   stroke("#c19cd9")
//   strokeWeight(5)
//   strokeCap(PROJECT)
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x = i * gridSize + gridSize/2
//       let y = j * gridSize + gridSize/2
//       // circle(x, y, gridSize)
//       if (random() > 0.5) {
//         line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
//         // square(x-gridSize/2, y-gridSize/2, gridSize * 0.5)
//       } else {
//         rect(x-gridSize/2, y+gridSize/2, x+gridSize/2, y-gridSize/2)
//         // square(x, y, gridSize * 0.5)
//       }

//       // TRUTCHET TILES
//       noFill()
//       if (random() < 0.5) {
//         square(x-gridSize/2, y-gridSize/2, gridSize,gridSize, 0, HALF_PI) // top-left
//         arc(x+gridSize/2, y+gridSize/2, gridSize,gridSize, PI, PI + HALF_PI) // right-bottom
//       } else {
//         arc(x-gridSize/2, y+gridSize/2, gridSize,gridSize, -HALF_PI, 0) // bottom-left
//         arc(x+gridSize/2, y-gridSize/2, gridSize,gridSize, HALF_PI, PI) // top-right
//       }
      
//     }
    
//   }
// }

// let gridSize = 100
// let cols, rows
// function setup() {
//   createCanvas(800, 800);
//   cols = int(width/gridSize)
//   rows = int(height/gridSize)
// }

// function star(x, y, radius1, radius2, npoints) {
//   let angle = TWO_PI / npoints;
//   let halfAngle = angle / 2.0;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sx = x + cos(a) * radius2;
//     let sy = y + sin(a) * radius2;
//     vertex(sx, sy);
//     sx = x + cos(a + halfAngle) * radius1;
//     sy = y + sin(a + halfAngle) * radius1;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }

// function draw() {
//   background("#231F20");
  
//   for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x = i * gridSize + gridSize/2
//       let y = j * gridSize + gridSize/2
//       // star(x, y, gridSize*0.3, gridSize*0.5, 5) // don't do this, use push(), pop(), and translate()
//       noStroke()
//       push()
//       translate(x, y) // (0,0) is now this cell's new center
//       // star face
//       fill("#F3DFA2")
//       rect(0,0,gridSize*0.25, gridSize*0.4, 5) 
//       // mouth
//       fill("#BB4430")
//       ellipse(0,0+gridSize*0.1, gridSize*0.1, gridSize*0.1)
//       // eyes
//       fill("#7EBDC2")
//       rectMode(CENTER)
//       rect(0-gridSize*0.1,0-gridSize*0.1, gridSize*0.05, gridSize*0.2) // leftE
//       rect(0+gridSize*0.1,0-gridSize*0.1, gridSize*0.05, gridSize*0.2) // rightE
//       pop()
//     }
//   }
// }