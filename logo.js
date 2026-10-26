let jpgBtn
function setup() {
    createCanvas(500, 500);
    frameRate (60)
    bgColorPick = createColorPicker ("#c19cd9")
    //SYNTAX: (min, max, default, step) //

    //EXPORT AS JPG//
    jpgBtn = createButton('export JPG')
        jpgBtn.mousePressed(function(){
            saveCanvas("my_canvas", "jpg")
        })
}
function draw() {
    rectMode(CENTER)
    let bgColor = bgColorPick.value()
        background(bgColor);
    
    for(let i = 0; i < 5; i++) {
        translate(0, 0)
        push()
        noFill()
        stroke("teal")
        strokeWeight(10)
        square(0,0, (i+1)*100)
        pop()
    }       

    // for(let i = 0; i < 5; i++) {
    //     translate(width, 0)
    //     push()
    //     noFill()
    //     stroke("teal")
    //     strokeWeight(10)
    //     square(0,0, (i+1)*100)
    //     pop()
    // }   

    for(let i = 0; i < 5; i++) {
        translate(width, height)
        push()
        noFill()
        stroke("teal")
        strokeWeight(10)
        square(0,0, (i+1)*100)
        pop()
    }   
        // //top left//
        // push()
        // translate(0,0)
        //     rect (0,0 , 100,100)    
        // pop()
        // //top right//
        // push()
        // translate(500,0)
        //     rect (0,0 , 100,100)    
        // pop()
        // //bot left//
        // push()
        // translate(0,500)
        //     rect (0,0 , 100,100)    
        // pop()
        // //bot right//
        // push()
        // translate(500,500)
        //     rect (0,0 , 100,100)    
        // pop()
}