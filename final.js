let skyColor, cloudColor

let word = 'ALONE'

let img;
let img2;

let widthOffset = 0;
let heightOffset = 100;

let stars = [];
  // https://editor.p5js.org/wvnl/sketches/5wnuHAXKd //

async function setup() {
    // createCanvas(1056, 1632);
    img = await loadImage('assests/person_day.png');
    img2 = await loadImage('assests/person_night.png');
    createCanvas(535, 816);
    font = await loadFont('assests/press-start-2p.ttf', font =>
      {
        textFont(font);
      });
    for (let h = 0; h < 1000; h++) {
		  stars[h] = new Star();
	  }
    frameRate (60)
    // noLoop() 
    skyColor = color('#ADD8E6')     // blue sky
    cloudColor = color('#FFFFFF')   // white cloud
}

function draw() {
  //BACKGROUND//
    background(220)
  // background('#ADD8E6')
  drawDay()
  //SWITCH TO NIGHT//
    if (mouseIsPressed === true) {
      drawNight()
    }
}
function drawDay() {
      background(skyColor);
    noStroke()
    for (let i = 0; i < width; i += 10) {
      for (let j = 0; j < height; j += 10) {
        let n = noise((i + 100) * 0.01 , j * 0.01, frameCount * 0.05) // remove frameCount to remove animation
        let amt = map(n, .3, 0.6, 0, 1, true)
        fill(lerpColor(skyColor, cloudColor, amt))
        circle(i, j, 10)
      }}
    let rW = map(noise(widthOffset), 0, 1, 150, 210);
    let rH = map(noise(heightOffset), 0, 1, 160, 210);
    //CONTENT//
      //SUN//
      push()
        noStroke()
        //SUN RAYS//
          fill(255, 234, 171, 150)
          ellipse(115,115, rW, rH)
        // fill('#ffeaab')
        fill(254, 222, 127, 225)
        circle(115,115, 150)

      pop()
        widthOffset += .2;
        heightOffset += .2;
      //TEXT//
          textSize(100)
          let amp = map(mouseY, 0, height/2, 10, 30, true)
          let x = width/2 - fontWidth(word)/2
          for (let u = 0; u < word.length; u++) {
            let letter = word[u]
            let w = fontWidth(letter)
            let wave = sin(frameCount * 0.05 + u * 1)
        push()
          textAlign(CENTER)
          textSize(20)
          
          // stroke('white')
          // strokeWeight(5)
          fill(skyColor)
          fill('#8eb5c0')
          //SMALL//
            // noStroke()
            text('small', 115,125)
          
          stroke(skyColor)
          strokeWeight(7)
          //&//
            fill('white')
            textSize(50)      
            text('&', 450,230)
          //ALONE//
              push()
                textSize(100)
                translate(x + w/2, height/2 + wave * amp)
                text(letter, 7, 0)

                // textSize(100)
                // text('ALONE', width/2+5,height/2)
            pop()
        pop()
        x += w
      //HILLS//
        push()
          noStroke()
            // fill('#8aa760')
            fill(138, 167, 96, 200)
            ellipse(450, height+50,500,400)      
            // fill('#b0c875')
            fill(176, 200, 117, 200)
            ellipse(100, height+50,500,300)
        pop()
  }
  //PERSON//
    push()
      // image(img,0,0);
      img.resize(0, 100);
      image(img, 100, height-180);
    pop()

}
function drawNight() {
  background('#181a32')
  for (let h = 0; h < stars.length; h++) {
		  stars[h].draw();
	}
  let rW = map(noise(widthOffset), 0, 1, 150, 200);
  let rH = map(noise(heightOffset), 0, 1, 160, 200);
  noStroke()
    //MOON//
      push()
        noStroke()
        //MOON RAYS//
          fill(255, 255, 255, 50)
          ellipse(115,115, rW, rH)
        // fill('#ffffff')
        fill(255, 255, 255, 225)
        circle(115,115, 150)
      pop()
      widthOffset += .05;
      heightOffset += .05;
      //TEXT//
          textSize(100)
          let amp = map(mouseY, 0, height/2, 10, 30, true)
          let x = width/2 - fontWidth(word)/2
          for (let q = 0; q < word.length; q++) {
            let letter = word[q]
            let w = fontWidth(letter)
            let wave = cos(frameCount * 0.05 + q * 1)
      push()
        textAlign(CENTER)
        textSize(20)

        fill('#181a32')
        noStroke()
        text('small', 115,125)

        fill('white')
        stroke('white')
        textSize(50)      
        text('&', 450,230)

            //ALONE//
                push()
                  textSize(100)
                  translate(x + w/2, height/2 + wave * amp)
                  text(letter, 7, 0)
                  // textSize(100)
                  // text('ALONE', width/2+5,height/2)
              pop()
          x += w
      push()
        noStroke()
          // fill('#3D534A')
          fill(61, 83, 74, 225)
          ellipse(450, height+50,500,400)      
          // fill('#597263')
          fill(89, 114, 99, 225)
          ellipse(100, height+50,500,300)
      pop()
    pop()
  }
  //PERSON//
    push()
      img2.resize(0, 100);
      image(img2, 100, height-180);
    pop()
}

class Star {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.size = random(0.5, 3);
		this.t = random(TAU);
	}
  draw() {
      this.t += 0.3;
      let scale = this.size + sin(this.t) ;
      noStroke();
      ellipse(this.x, this.y, scale, scale);
    }
}

function keyPressed() {
  if (key === 's') {
    saveCanvas('small_alone', 'png');
  }
}
