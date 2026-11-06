let myData
let bgColor = '#bfd3cc'
async function setup() {
    let canvas = createCanvas(600, 800);
    canvas.parent('sketch-holder');
    
    frameRate (60)
    //load data in setup//
    myData = await loadJSON('horse_data_visual.json')
    console.log(myData)
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
    background(bgColor)
    push()
        stroke("#375d4a")
        strokeWeight(4)
        line(width/2,45 , width/2,height-40)
    pop()
    //TEXT//
    fill("#375d4a")
    textAlign(CENTER)
    textStyle(BOLD)
    textFont('monospace')
    push()
        textSize(16)
        text("2026", width/2, 30)
        text("1970", width/2, height-15)
    pop()
    push()
        textSize(48)
        text("♂", width/2-270, 45)
        text("♀", width/2+270, 45)
    pop()
    //KEY//
    push()
    translate(0,-80)
        textSize(24)
        text('KEY', 30, height/2)
        textSize(16)
        text('Age', 25, height/2+35)
            text('2', 55, height/2+60)
            text('3', 85, height/2+63)
            text('4', 120, height/2+66)
            text('5+', 166, height/2+72)
        noStroke()
            circle(55,height/2+30, 15)
            circle(85,height/2+30, 20)
            circle(120,height/2+30, 30)
            circle(167,height/2+30, 45)
        textAlign(LEFT)
        text('Training Center', 10, height/2+105)
            fill('#ea3a2d')
                circle(40,height/2+135,40)
                text('miho',65,height/2+140)
            fill('#2931ca')
                circle(140,height/2+135,40)
                text('ritto',165,height/2+140)
        stroke('#375d4a')
        fill('gold')
            star(25,height/2+180,6,12, 5)
            noStroke()
            fill('#375d4a')
            text('= # of Grade 1 Wins', 45,height/2+186)
        circle(40,height/2+225,40)
            text('active', 65, height/2+230)
        noFill()
        stroke('#375d4a')
        strokeWeight(4)
            circle(160,height/2+225,40)
            noStroke()
            fill('#375d4a')
            text('retired', 185, height/2+230)
        text('Year = Last Year Raced', 10, height/2+275)
        text('Length of Line = \nCareer Length', 10, height/2+305)
    pop()

    for (let i = 0; i < myData.length; i++) {
        let horse = myData[i]
        let x
        let y
        let c 
        let filled
        let size 
        let numStars
        let careerLength = horse.career_length
        let gender = horse.gender
        let horseName = horse.horse
        // let c = trainStable[horse.training]

        //G1 WINS//
        if (horse.g1 === 0) {
            numStars = 0
        } if (horse.g1 === 1) {
            numStars = 1
        }  else if (horse.g1 === 2) {
            numStars = 2
        } else if (horse.g1 === 3) {
            numStars = 3
        } else if (horse.g1 === 4) {
            numStars = 4
        } else if (horse.g1 === 6) {
            numStars = 6
        } else if (horse.g1 === 9) {
            numStars = 9
        }
        //AGE = SIZE//
        if (horse.age === 5) {
        size = 45
        } else if (horse.age === 4) {
            size = 30
        } else if (horse.age === 3) {
            size = 20
        } else if (horse.age === 2) {
            size = 15
        }
        //LAST YR ACTIVE = Y VALUE//
        if (horse.last_active === 2026) {
            y = 55
        } else if (horse.last_active === 2020) {
            y = height/7.5
        } else if (horse.last_active === 2015) {
            y = height/4.5
        } else if (horse.last_active === 2007) {
            //~MIDPOINT OF TOP HALF//
            y = height/3.5
        } else if (horse.last_active === 1993) {
            //MIDPOINT//
            y = height/2
        } else if (horse.last_active === 1986) {
            y = height-200
        } else if (horse.last_active === 1977) {
            y = height-50
        } 
        //TRAINING CENTER = COLOR//
        if (horse.training === 'miho') {
            c = '#ea3a2d'
        } else if (horse.training === 'ritto') {
            c = '#2931ca'
        } else if (horse.training === 'unknown') {
            c = 'black'
        }
        if (horse.status === 'active') {
            filled = true
        } else if (horse.status === 'retired') {
            filled = false
        }
        //DRAW FUNCTION//
        drawHorse(x,y,c,filled,size,numStars, 
            careerLength, gender, horseName)
    }
    // push()
    // pop()
}

function drawHorse(x,y,c,filled,size,numStars, 
    careerLength, gender, horseName) {
    push()
        push()
            //LINES//
            stroke('#375d4a')
            strokeWeight(3)
            let lineLength = map(careerLength, 1, 4, 50, 200, true)
            if (gender === 'm') {
                x = width/2 - lineLength
            } else if (gender === 'f') {
                x = width/2 + lineLength
            }
            line(width/2,y,x,y)
        pop()
        //CIRCLES//
        strokeWeight(4) 
        stroke(c)
        if (filled) {
            fill(c) 
        } else {
            fill(bgColor)
        }
        circle(x,y,size)
    pop()
    
    // push()
    //     fill(c)
    //     text(horseName,x,y+40) 
    // pop()

        //STARS//
        let radius = size/2 + 15
        let spread = map(numStars, 1, 10, PI/3, TWO_PI * 0.85, true)
        for (let i = 0; i < numStars; i++) {
            let angle = (spread / numStars) * i - spread/2 - HALF_PI
        let starX = x + cos(angle) * radius
        let starY = y + sin(angle) * radius
            push()
                fill('gold')
                stroke('#375d4a')
                strokeWeight(1)
                star(starX, starY, 4, 8, 5)
            pop()
        }
}

