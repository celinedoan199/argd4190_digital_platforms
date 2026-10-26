let jpgBtn
function setup() {
    createCanvas(500, 500);
    frameRate (60)
    strokeWeight(5)
    noFill()
    bgColorPick = createColorPicker ("#c19cd9")
    //CIRCLES//
    //SYNTAX: (min, max, default, step) //
    circleNumSlider = createSlider (1, 15, 50) 
    circleGapSlider = createSlider (20, 100, 50)
    circleStrokeColor = createColorPicker ("teal")
   
    //LINES//
    showLinesCheckBox = createCheckbox('show lines', true);
    linesNumSlider = createSlider (1,12, 6)
    lines1SpinSlider = createSlider (0, .05, 0.02, 0.01)
    lines1Length = createSlider 
    lines1LenSlider = createSlider (20, 500, 100)
    lines1Color = createColorPicker ("yellow")
    //LINES 2//
    lines2SpinSlider = createSlider (0, 500)
    lines2NumSlider = createSlider (1,12)
    // lines2LenSlider 

    //EXPORT AS JPG//
    jpgBtn = createButton('export JPG')
        jpgBtn.mousePressed(function(){
            saveCanvas("my_canvas", "jpg")
        })
}
function draw() {
    let bgColor = bgColorPick.value()
    background(bgColor);
    translate(width/2, height/2)

    drawCircles()
    if (showLinesCheckBox.checked()) {
        drawLines1()
    }
    drawLines2()

}

function drawCircles() {
    let num = circleNumSlider.value()
    let gap = circleGapSlider.value()
    let strokeColor = circleStrokeColor.value()
    for(let i = 0; i< num; i++) {
        push()
            noStroke()
            // fill("white")
            // circle(0, 0, 50)
            // noFill()
            stroke(strokeColor)
            circle(0, 0, (i+1) * gap)
        pop()
    }
}
function drawLines1() {
    let num = linesNumSlider.value()
    let speed = lines1SpinSlider.value()
    let len  = lines1LenSlider.value()
    let color = lines1Color.value()
    for(let i = 0; i < num; i++) {
        push()
            stroke(color)
            rotate(i/num * TWO_PI)
            translate (50,0) //dist from center//
            rotate(frameCount * speed) //animation speed//
            // rotate(radians(lines2SpinSlider.value(), 0)) //indiv angle of lines//

        line(-len/2,0 , len/2,0)
        pop()
    }
}

function drawLines2() {
    let num = lines2NumSlider.value()
    let rotateLines2 = lines2SpinSlider.value()
    // let len  = lines2LenSlider.value()
    // let color = lines2Color.value()

    for(let i = 0; i < num; i++) {
        push()
            stroke("white")
            rotate(i/num * TWO_PI)
            translate (50,0) //dist from center//
            // rotate(frameCount * speed) //animation speed//
            rotate(-radians(rotateLines2, 0)) //indiv angle of lines//

        line(0,0 , 100,0)
        pop()
    }
}