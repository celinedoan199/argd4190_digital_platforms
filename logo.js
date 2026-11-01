let jpgBtn
function setup() {
    createCanvas(500, 500);
    frameRate (60)
    //BG COLOR//
    createElement('label', 'Background Color')
    bgColorPick = createColorPicker ("#c19cd9")
        bgColorPick.addClass('colorPick')
    //SYNTAX: (min, max, default, step) //
// .addClass('')

    //EXPORT AS JPG//
    jpgBtn = createButton('export JPG')
        jpgBtn.mousePressed(function(){
            saveCanvas("my_canvas", "jpg")
        })
        jpgBtn.style('margin', '0 1rem 0 .5rem');
        //CANVAS SLIDERS//
        createElement('label', 'Canvas Width')
        canvasW = createSlider(100,1000, 500,50)
            canvasW.addClass('slider')
        createElement('label', 'Canvas Height')
        canvasH = createSlider(100,1000, 500,50)
            canvasH.addClass('slider')

    //SLIDERS//
        //SQUARES//
        createElement('label', '# of Lines')
        sqNumSlider = createSlider(1,10,5)
            sqNumSlider.addClass('slider')
        createElement('label', 'Line Stroke Width')
        sqStrokeSlider = createSlider(2,40,10,1)
            sqStrokeSlider.addClass('slider')
        createElement('label', 'Line Gap')
        sqSizesSLider = createSlider(20, 200, 100)
            sqSizesSLider.addClass('slider')
        createElement('label', 'Line Stroke Color')
        sqStrokeColorSilder = createColorPicker ("#fffff0")
            sqStrokeColorSilder.addClass('colorPick')
        //CIRCLE//
        createElement('label', 'Shift Circle X')
        circXSlider = createSlider(0,width,width/2,25)
            circXSlider.addClass('slider')
        createElement('label', 'Shift Circle Y')
        circYSlider = createSlider(0,height,height/2,25)
            circYSlider.addClass('slider')
        
        createElement('label', 'Circle Size')
        circSizeSlider = createSlider(50,300,100)
            circSizeSlider.addClass('slider')
        createElement('label', 'Circle Color')
        circColorPick = createColorPicker("#fffff0")
            circColorPick.addClass('colorPick')
        
        createElement('label', 'Circle Stroke Color')
        circStrokeColorPick = createColorPicker("#c19cd9")
            circStrokeColorPick.addClass('colorPick')
        createElement('label', 'Circle Stroke')
        circStrokeSlider = createSlider(1,20,10)
            circStrokeSlider.addClass('slider')
    //CHECKBOXES//
        //CIRCLE//
            circleCheckBox = createCheckbox('Show Circle', true)
                circleCheckBox.addClass('checkbox')
            circStrokeCbx = createCheckbox('Circle Stroke', true)
    randomBtn = createButton('random composition')
    randomBtn.mousePressed(function(){
        randoComp()
    })
}
//DRAW//
function draw() {
    //W & H VARIABLES//
        let canW = canvasW.value()
        let canH = canvasH.value()
    resizeCanvas(canW, canH)

    let bgColor = bgColorPick.value()
        background(bgColor);
    
    squares()
    
    if (circleCheckBox.checked()) {
        drawCircle()
    }
}

function squares() {
    rectMode(CENTER)
    let sqStrokeColor = sqStrokeColorSilder.value()
    let sqStroke = sqStrokeSlider.value()
    let sqNum = sqNumSlider.value()
    let sqSizes = sqSizesSLider.value()
    //TOP L//
    for(let i = 0; i < sqNum; i++) {
        push()
        translate(0, 0)
        noFill()
        stroke(sqStrokeColor)
        strokeWeight(sqStroke)
        square(0,0, (i+1)*sqSizes)
        pop()
    }
    //TOP R//
    for(let i = 0; i < sqNum; i++) {
        push()
        translate(width, 0)
        noFill()
        stroke(sqStrokeColor)
        strokeWeight(sqStroke)
        square(0,0, (i+1)*sqSizes)
        pop()
    }
    //BOTTOM R//
    for(let i = 0; i < sqNum; i++) {
        push()
        translate(width, height)
        noFill()
        stroke(sqStrokeColor)
        strokeWeight(sqStroke)
        square(0,0, (i+1)*sqSizes)
        pop()
    }   
    //BOTTOM L//
    for(let i = 0; i < sqNum; i++) {
        push()
        translate(0, height)
        noFill()
        stroke(sqStrokeColor)
        strokeWeight(sqStroke)
        square(0,0, (i+1)*sqSizes)
        pop()
    } 
}

function drawCircle() {
    let circX = circXSlider.value()
    let circY = circYSlider.value()

    let circStrokeColor = circStrokeColorPick.value()
    let circColor = circColorPick.value()
    let circSize = circSizeSlider.value()
    if (circStrokeCbx.checked()){
        let circStroke = circStrokeSlider.value()
        stroke(circStrokeColor)
        strokeWeight(circStroke)
    } else {
        noStroke()
    }
    push()
        // translate(width/2, height/2)
        fill(circColor)
        circle(circX, circY, circSize)
    pop()
}

function randoComp() {
    //SQUARES//
    sqStrokeSlider.value(random(2, 40));
    sqNumSlider.value(random(1, 10));
    sqSizesSLider.value(random(20, 200));
    //CIRCLE//
    circXSlider.value(random(0, width));
    circYSlider.value(random(0, height));
    circSizeSlider.value(random(50, 300));
    circStrokeSlider.value(random(1, 20));
}