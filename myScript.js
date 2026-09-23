// this is for project 2-2 //
let golshi = document.getElementById("golshi")

// Txt Input //
let word = document.getElementById("word")
let wordInput = document.getElementById("wordInput")
 
function updText(element, value) {
  element.textContent = value
}
wordInput.addEventListener("input", function(){
  updText(word, wordInput.value)
})

function checkAnswer() {
  let userInput = document.getElementById("wordInput").value;
  let correctAnswer = 'Gold Ship';

  if (userInput === correctAnswer) {
    console.log('Correct!');
    feedbackElement.textContent = "CORRECT!! CONGRATS!!!";
    feedbackElement.style.color = "white"
    feedbackElement.style.background = "green"
    feedbackElement.style.width = "200px"
    feedbackElement.style.textAlign = "center"

  } else {
    console.log('Wrong!');
    feedbackElement.textContent = "WRONG. TRY AGAIN.";
    feedbackElement.style.color = "white"
    feedbackElement.style.background = "red"
    feedbackElement.style.width = "200px"
    feedbackElement.style.textAlign = "center"
  }
}
const feedbackElement = document.getElementById("feedback");

// Very Important Function //
function updateOutput(element, input) {
  element.textContent = input.value
}
// Very Important Function //

// Circle Color //
let circle = document.getElementById("circle")
let circColorOutput = document.querySelector("output[for=circColor]")
let circColor = document.getElementById("circColor") //input//

function changeColor(element, colorInput) {
  element.style.backgroundColor = colorInput.value
}
circColor.addEventListener("input", function () {
  changeColor(circle, circColor)
  updateOutput(circColorOutput, circColor)
})

// Scale It (circle)//
let circScaleOut = document.querySelector("output[for=circScale]")
let circScale = document.getElementById("circScale") //input//
 
function changeScale(element, scaleInput) {
  element.style.scale = scaleInput.value
}
circScale.addEventListener("input", function (event) {
  changeScale(circle, circScale)
  updateOutput(circScaleOut, circScale)
})

// Scale Him //
let golImg = document.getElementById("golshi")
let golScaleOut = document.querySelector("output[for=golScale]")
let golScale = document.getElementById("golScale")
 
function changeScale(element, scaleInput) {
  element.style.scale = scaleInput.value
}
golScale.addEventListener("input", function (event) {
  changeScale(golImg, golScale)
  updateOutput(golScaleOut, golScale)
})

// Jumping //
let input = document.getElementById("wordInput")
let image = document.getElementById("golshi");

wordInput.addEventListener('input', function(){
  image.classList.add('jump')
  setTimeout(function(){
    image.classList.remove('jump')
  }, 200)
})

// Border Weight //
let border = document.getElementById("imgContainer")
let borderWeightOutput = document.querySelector("output[for=borderWeight]")
let borderWeight = document.getElementById("borderWeight") //input//

function updBorder(element, borderWeightInput){
  element.style.borderWidth = borderWeightInput.value + "px"
}

borderWeight.addEventListener("input", function () {
  updBorder(border, borderWeight)
  updateOutput(borderWeightOutput, borderWeight)
})

// Border Type //
//Dot//
let dotButton = document.getElementById("dotButton")

function makeDottedBorder(element) {
  element.style.borderStyle = "dotted"
}
dotButton.addEventListener("click", function(){
  makeDottedBorder(border)
});
//Solid//
let solidButton = document.getElementById("solidButton")

function makeSolidBorder(element) {
  element.style.borderStyle = "solid"
}
solidButton.addEventListener("click", function(){
  makeSolidBorder(border)
});

// Move Circle //
let moveX = document.getElementById("moveX")
let moveY = document.getElementById("moveY")

function changePosition(element, xInput, yInput) {
  element.style.transform = `translate(${xInput.value}px, ${yInput.value}px)`
}
moveX.addEventListener("input", function (event) {
  changePosition(circle, moveX, moveY);
})
moveY.addEventListener("input", function (event) {
  changePosition(circle, moveX, moveY);
})
